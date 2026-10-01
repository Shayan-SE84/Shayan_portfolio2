export default function About() {
  const academicMilestones = [
    {
      title: "BS Software Engineering",
      institution: "Muhammad Ali Jinnah University (MAJU)",
      location: "Karachi, Pakistan",
      desc: "Comprehensive coursework in advanced software architecture, database management systems, data structures, and secure programming practices.",
      icon: "school"
    },
    {
      title: "Web & Database Engineering Diploma",
      institution: "Aptech Learning Center",
      location: "Karachi, Pakistan",
      desc: "Practical engineering training covering semantic modern HTML layouts, responsive CSS grids, JavaScript engines, MySQL database schemas, and dynamic client states.",
      icon: "workspace_premium"
    },
    {
      title: "Cybersecurity & Ethical Hacking Fundamentals",
      institution: "NED Academy — NED University of Eng & Tech",
      location: "Karachi, Pakistan",
      desc: "Specialized training focusing on defensive coding structures, application vulnerability scanning, OWASP standards, and secure authentication models.",
      icon: "shield"
    }
  ];

  return (
    <section
      id="about"
      className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-slate-200 dark:border-slate-900/60"
    >
      {/* Title block */}
      <div className="flex flex-col gap-3 mb-12 text-left animate-fadeIn">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-500 inline-block"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
            Academic Trajectory &amp; Background
          </span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-balance">
          Foundations, Certified Training &amp; Secure Focus
        </h2>
        <p className="font-sans text-base text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          I combine academic software engineering methodologies from MAJU with certified vocational development courses and ethical hacking awareness.
        </p>
      </div>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Story Bento Card */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 font-mono text-[11px] font-semibold border border-cyan-500/10 dark:border-cyan-500/20">
              <span className="material-symbols-outlined text-sm">school</span>
              <span>Educational Milestones</span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Balancing user-focused architectures with defensive software engineering.
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              At <strong className="text-slate-800 dark:text-slate-200 font-semibold">Muhammad Ali Jinnah University (MAJU)</strong>, I have grounded myself in the theory of complex computer systems and algorithms. At the same time, my intensive practical training at <strong className="text-slate-800 dark:text-slate-200 font-semibold">Aptech</strong> gave me the building blocks to turn this theory into modern, responsive web experiences.
            </p>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To ensure my work stands up to the demands of modern applications, I completed hands-on Cybersecurity and Ethical Hacking training at <strong className="text-slate-800 dark:text-slate-200 font-semibold">NED Academy</strong>. This training shaped my approach to defensive engineering—helping me write clean code that actively avoids common security risks from day one.
            </p>
          </div>

          {/* Academic Timeline Cards */}
          <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-900">
            {academicMilestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200 text-cyan-600 dark:bg-slate-900 dark:border-slate-800 dark:text-cyan-400">
                  <span className="material-symbols-outlined text-lg">{milestone.icon}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-base font-bold text-slate-900 dark:text-slate-100">
                    {milestone.title}
                  </h4>
                  <div className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    {milestone.institution} <span className="text-slate-400 dark:text-slate-600">·</span> {milestone.location}
                  </div>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Bento Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Map & Base Card */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-4 text-left">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">
                Geographic Base
              </span>
              <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium uppercase tracking-wider">
                Karachi, PK / UTC+5
              </span>
            </div>
            
            {/* Custom Vector map */}
            <div className="w-full h-40 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-900 flex items-center justify-center overflow-hidden relative">
              <svg className="absolute inset-0 w-full h-full text-slate-200 dark:text-slate-800/40" fill="none" viewBox="0 0 320 160" aria-hidden="true">
                <path d="M0,80 Q80,40 160,80 T320,80" stroke="currentColor" strokeDasharray="5 5" strokeWidth="1.5" />
                <path d="M30,120 C100,100 160,110 220,130" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" />
                <circle cx="160" cy="80" r="6" className="fill-cyan-500 animate-pulse" />
                <circle cx="160" cy="80" r="16" stroke="#06b6d4" strokeWidth="1" className="opacity-40 animate-ping" />
              </svg>
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-white/80 border border-slate-200 dark:bg-slate-950/80 dark:border-slate-900 font-mono text-[11px] text-slate-800 dark:text-slate-200">
                Karachi, Sindh, Pakistan
              </div>
            </div>

            <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
              Operating out of Karachi's primary educational hubs. Capable of working remotely or executing hybrid roles locally.
            </p>
          </div>

          {/* Workflow Bento Card */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-4 text-left">
            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">
              Core Philosophies &amp; Focus
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-900/60">
                <div className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                  Defensive Code
                </div>
                <div className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  OWASP alignment
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-900/60">
                <div className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                  Continuous Dev
                </div>
                <div className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  GitHub automation
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-900/60">
                <div className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                  Bilingual
                </div>
                <div className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  English &amp; Urdu
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-900/60">
                <div className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                  Clean state
                </div>
                <div className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Responsive layout
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Direct Opportunity Banner */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border border-cyan-500/15 dark:from-cyan-500/10 dark:via-slate-950/20 dark:to-emerald-500/5 dark:border-cyan-500/20 shadow-md flex items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <h4 className="font-sans text-base font-bold text-slate-800 dark:text-slate-200">
                Ready for Contracts &amp; Roles
              </h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                Summer internships, React interfaces, &amp; security audits.
              </p>
            </div>
            <a
              href="#contact"
              className="w-10 h-10 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow shadow-cyan-500/10 animate-float"
              aria-label="Directly scroll to contact info"
            >
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
