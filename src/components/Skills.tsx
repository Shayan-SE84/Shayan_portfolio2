export default function Skills() {
  const skillsMatrix = [
    {
      category: "Frontend Architectures",
      desc: "Developing responsive client states, clean modular component hierarchies, and modern styling architectures.",
      color: "text-cyan-600 border-cyan-500/10 bg-cyan-50 dark:text-cyan-400 dark:border-cyan-500/20 dark:bg-cyan-500/5",
      accentColor: "bg-cyan-500",
      icon: "web",
      percentage: 90,
      tags: ["HTML5 Semantics", "CSS3 Flex/Grid", "JavaScript ES6+", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap 5"]
    },
    {
      category: "Database & Backend Design",
      desc: "Creating relational database models, robust query optimization schemas, and secure API data exchanges.",
      color: "text-emerald-600 border-emerald-500/10 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-500/20 dark:bg-emerald-500/5",
      accentColor: "bg-emerald-500",
      icon: "database",
      percentage: 80,
      tags: ["MySQL Queries", "Relational Schema Modeling", "RESTful Protocols", "JSON API Payloads", "Node.js Basics", "CRUD Operations"]
    },
    {
      category: "Application Security & Defense",
      desc: "Informed by NED Academy training in ethical hacking. Emphasizing defensive code logic and OWASP compliance.",
      color: "text-indigo-600 border-indigo-500/10 bg-indigo-50 dark:text-indigo-400 dark:border-indigo-500/20 dark:bg-indigo-500/5",
      accentColor: "bg-indigo-500",
      icon: "shield_person",
      percentage: 75,
      tags: ["Ethical Hacking Intro", "Vulnerability Scanning", "Network Foundations", "OWASP Top 10", "Secure Auth Logic"]
    },
    {
      category: "Workflows & CLI Utilities",
      desc: "Utilizing modern developer toolchains for code execution, version tracking, and CI/CD pipelines.",
      color: "text-slate-700 border-slate-200 bg-slate-50 dark:text-slate-200 dark:border-slate-800 dark:bg-slate-900/50",
      accentColor: "bg-slate-400 dark:bg-slate-300",
      icon: "terminal",
      percentage: 85,
      tags: ["Git & GitHub workflows", "VS Code workspaces", "Linux Bash Scripting", "MS Office Automation", "Markdown Documentation"]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-slate-200 dark:border-slate-900/60"
    >
      {/* Title Block */}
      <div className="flex flex-col gap-3 mb-12 text-left animate-fadeIn">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
            Technical Stack Matrix
          </span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-balance">
          Capabilities &amp; Modern Toolchain
        </h2>
        <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Tested and honed across university labs, certified industry courses, and independent software build experiments.
        </p>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {skillsMatrix.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-6 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors group text-left"
          >
            <div className="space-y-4">
              
              {/* Category Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
              </div>

              {/* Title and description */}
              <div className="space-y-1">
                <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.category}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-x-2 gap-y-1.5 pt-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {tag}{tagIdx < item.tags.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Depth Progress Slider */}
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-900">
              <div className="flex justify-between items-center font-mono text-[11px] text-slate-400 dark:text-slate-400">
                <span>Depth &amp; Practice</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${item.accentColor}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
