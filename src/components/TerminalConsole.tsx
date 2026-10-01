import { useState, useRef, useEffect } from "react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "info";
}

export default function TerminalConsole() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "system.status: Active Undergraduate @ MAJU | Application Security Trained", type: "info" },
    { text: "available_for: Summer Internships, Frontend Contracts, Cybersecurity Auditing", type: "info" },
    { text: "Type 'help' or click the preset commands below to query the workstation profile.", type: "output" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const outputEndRef = useRef<HTMLDivElement>(null);

  // Commands map
  const commands: Record<string, () => string | string[]> = {
    help: () => [
      "Available workstation commands:",
      "  skills    - Print key software frameworks and technical expertise",
      "  education - View academic enrollments, diplomas, and certifications",
      "  projects  - List highlighted open-source repositories & live demo details",
      "  contact   - Display immediate communication streams and phone lines",
      "  clear     - Wipe clean the terminal simulator output console"
    ],
    skills: () => [
      "> FRONTEND: TypeScript, HTML5 Semantic, CSS3 Layouts, Tailwind CSS, React, Next.js",
      "> BACKEND  : Relational Schema Modeling, MySQL Databases, Node.js REST API Architecture",
      "> SECURITY : Ethical Hacking Fundamentals (NED Academy), OWASP-defensive secure programming",
      "> SYSTEM   : Git/GitHub, Linux CLI utilities, Continuous Deployment workflows"
    ],
    education: () => [
      "🎓 Academic Credentials & Training Milestones:",
      "  • BS Software Engineering - Muhammad Ali Jinnah University (MAJU)",
      "  • Web & Databases Diploma - Aptech Learning Hub",
      "  • Cybersecurity & Hacking - NED Academy, NED University of Eng & Tech"
    ],
    projects: () => [
      "📂 Public GitHub Portfolios:",
      "  [1] pizza-web        - Responsive TypeScript e-commerce layout for dining cart logic",
      "  [2] shayan-portfolio - Multi-stage high-precision developer workspace console",
      "  [3] Portfolio        - Early milestone HTML5 and CSS3 semantic blueprint repo",
      "  [4] Shayan-SE84      - GitHub telemetry profile dashboard with automated streaks"
    ],
    contact: () => [
      "✉️ Active Communication Channels:",
      "  - Direct Email : shayankhan.1946@gmail.com",
      "  - Mobile Direct: +92 328 2305784 (WhatsApp active)",
      "  - Repository   : https://github.com/Shayan-SE84"
    ]
  };

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${rawCmd}`, type: "input" as const }];

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd in commands) {
      const output = commands[cmd]();
      if (Array.isArray(output)) {
        newHistory.push(...output.map(line => ({ text: line, type: "output" as const })));
      } else {
        newHistory.push({ text: output, type: "output" as const });
      }
    } else {
      newHistory.push({
        text: `bash: command not found: '${cmd}'. Type 'help' for available options.`,
        type: "error" as const
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  // Scroll to bottom on updates
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 md:px-8 py-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
      <div className="rounded-xl overflow-hidden border bg-slate-950 dark:bg-slate-950 light:bg-slate-900 border-slate-900 dark:border-slate-900 light:border-slate-800 shadow-2xl">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-950 border-b border-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-3 font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 select-none">
              shayan@maju-workstation: ~/portfolio
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            <span>bash v5.2</span>
            <span className="material-symbols-outlined text-sm text-slate-500">desktop_windows</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs md:text-sm text-slate-300 h-80 overflow-y-auto space-y-2 no-scrollbar">
          
          {/* Preset trigger block */}
          <div className="flex flex-col gap-2 border-b border-slate-900 pb-4 mb-4">
            <span className="text-slate-500 text-xs">Quick Shell Shortcuts:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCommand("help")}
                className="px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-700 text-cyan-400 hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-950 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                $ help
              </button>
              <button
                type="button"
                onClick={() => handleCommand("skills")}
                className="px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-700 text-cyan-400 hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-950 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                $ skills
              </button>
              <button
                type="button"
                onClick={() => handleCommand("education")}
                className="px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-700 text-cyan-400 hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-950 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                $ education
              </button>
              <button
                type="button"
                onClick={() => handleCommand("projects")}
                className="px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-700 text-cyan-400 hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-950 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                $ projects
              </button>
              <button
                type="button"
                onClick={() => handleCommand("clear")}
                className="px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-700 text-slate-500 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-950 transition-colors cursor-pointer"
              >
                $ clear
              </button>
            </div>
          </div>

          {/* History lines */}
          {history.map((line, idx) => {
            let color = "text-slate-300";
            if (line.type === "input") color = "text-cyan-400 font-semibold";
            if (line.type === "error") color = "text-red-400";
            if (line.type === "info") color = "text-emerald-400";
            return (
              <div key={idx} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                {line.text}
              </div>
            );
          })}

          <div ref={outputEndRef} />
        </div>

        {/* Input Terminal line */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-6 py-4 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-950 border-t border-slate-900"
        >
          <span className="font-mono text-emerald-400 font-bold select-none">&gt;</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type 'help', 'skills', 'education', 'projects'..."
            className="w-full bg-transparent border-none outline-none font-mono text-xs md:text-sm text-cyan-400 placeholder:text-slate-600 focus:ring-0"
            autoComplete="off"
            spellCheck="false"
          />
        </form>

      </div>
    </section>
  );
}
