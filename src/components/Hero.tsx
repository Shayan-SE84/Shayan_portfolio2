export default function Hero() {
  const socialLinks = [
    { label: "GitHub", url: "https://github.com/Shayan-SE84", icon: "code" },
    { label: "WhatsApp", url: "https://wa.me/923282305784", icon: "chat" },
    { label: "Email", url: "mailto:shayankhan.1946@gmail.com", icon: "mail" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-[1240px] mx-auto px-4 md:px-8"
    >
      {/* Specular radial blooms */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left animate-fadeIn">
          
          {/* Status badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
              BS Software Engineering Student @ MAJU
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Engineering Secure Systems
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight text-balance">
              Building Clean Code &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 bg-clip-text text-transparent">
                Defensive Architectures
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Hi, I’m <strong className="text-slate-800 dark:text-slate-200 font-semibold">Shayan Khan</strong> — an undergraduate at Muhammad Ali Jinnah University, Karachi. I design fully responsive client applications and integrate foundational application security models.
          </p>

          {/* Call-To-Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-lg font-sans text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-lg font-sans text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:bg-slate-900/60 dark:border-slate-900 dark:hover:text-slate-100 dark:hover:bg-slate-900 transition-all active:scale-95"
            >
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-900/40 w-full">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Connections
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:bg-slate-100 border border-transparent hover:border-slate-200 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-900/40 dark:hover:border-slate-900 transition-all focus:outline-none"
                  title={link.label}
                >
                  <span className="material-symbols-outlined text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Fast telemetry stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6">
            <div className="p-4 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-sm">
              <div className="font-mono text-2xl font-bold text-cyan-600 dark:text-cyan-400">4+</div>
              <div className="font-sans text-xs text-slate-500 dark:text-slate-400">Open Source</div>
            </div>
            <div className="p-4 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-sm">
              <div className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">MAJU</div>
              <div className="font-sans text-xs text-slate-500 dark:text-slate-400">SE Student</div>
            </div>
            <div className="p-4 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-sm">
              <div className="font-mono text-2xl font-bold text-indigo-600 dark:text-indigo-400">NED</div>
              <div className="font-sans text-xs text-slate-500 dark:text-slate-400">Sec Trained</div>
            </div>
            <div className="p-4 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-sm">
              <div className="font-mono text-2xl font-bold text-slate-700 dark:text-slate-300">100%</div>
              <div className="font-sans text-xs text-slate-500 dark:text-slate-400">Responsive</div>
            </div>
          </div>

        </div>

        {/* Right Column: High-Precision Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center relative animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
          
          <div className="relative group">
            
            {/* Concentric Outer Ring */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2.5 bg-gradient-to-tr from-cyan-400 via-slate-200 to-emerald-400 dark:from-cyan-400 dark:via-slate-900 dark:to-emerald-400 shadow-2xl shadow-cyan-400/10 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
                <img
                  alt="Shayan Khan Portrait Headshot"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmCWKjgdEyCw6F22jK7uMJX74mH_dFkLkh5GxsW4YazDobljwe0E_2jdX787liZ0CmKU5WSpIXq6NzrbrrW5ual4bWn0bZsWar7sb7VCY3REk3sJ_N6iAckL97d7visrcmVY06l86nErwwaNrAyGk3IsamAtoIoeNUrl7Wzs1lBYuKy2RuqReXQ0u5rrFhjm_uM9Ql_19Ynr1OvDGe-jEpgbhiCFW84C9TxEkFssZ_FL5_4iwch59"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Float Badge 1 */}
            <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 px-4 py-2 rounded-xl bg-white/90 border border-slate-200 dark:bg-slate-900/90 dark:border-slate-900/80 shadow-xl flex items-center gap-2.5">
              <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 text-lg">verified</span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-semibold text-slate-900 dark:text-slate-100">
                  Shayan Khan
                </span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                  @Shayan-SE84
                </span>
              </div>
            </div>

            {/* Float Badge 2 */}
            <div className="absolute -top-3 -left-3 px-3.5 py-1.5 rounded-lg bg-white/90 border border-slate-200 dark:bg-slate-900/90 dark:border-slate-900/80 shadow-md flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-600 dark:text-cyan-400 text-sm">terminal</span>
              <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                dev_env: active
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
