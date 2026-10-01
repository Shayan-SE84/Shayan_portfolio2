export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900/60 py-12">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Column 1: Info and Monogram */}
          <div className="md:col-span-5 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <img
                alt="Shayan Khan Custom Monogram"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1X3frQ1d-N6VtpU_-uMpCEsL-Hlmf3LPexPTf8ocZsHNhNtW0zJ2ospwANAHsB7o6no5l5SiuF_sVVIelwqAuM7lkSHbhRx7Esw9PEDNYXswUrAgPul_tl6H9znxS7OSBGjLUa7fOygPlHh6gplg_M16B_3rWcukkS-h-p3rMvveS600WpfAmEwTeTZuzek70OF31yQSq3YFOX94xYuRmQFdVd9rgA5k-oUdkexsuC8259ncDGukUTnfw"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Shayan Khan
              </span>
            </div>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Software Engineering Student at Muhammad Ali Jinnah University (MAJU). Dedicated to frontend responsive interfaces and verified software defense modules.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Karachi, Pakistan · UTC+5</span>
            </div>
          </div>

          {/* Column 2: Quick Index Navigation links */}
          <div className="md:col-span-3 flex flex-col gap-4 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
              Site Index
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-sm">
              <a href="#hero" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                Home View
              </a>
              <a href="#about" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                About &amp; Academy
              </a>
              <a href="#skills" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                Skills &amp; Matrices
              </a>
              <a href="#projects" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                Selected Repos
              </a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Column 3: Communication channels */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
              Direct Channels
            </span>
            <div className="flex flex-col gap-2.5 font-mono text-xs text-slate-600 dark:text-slate-400">
              <a
                href="mailto:shayankhan.1946@gmail.com"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>shayankhan.1946@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923282305784"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+92 328 2305784</span>
              </a>
              <a
                href="https://github.com/Shayan-SE84"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span>github.com/Shayan-SE84</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs text-slate-400 dark:text-slate-500">
            &copy; {currentYear} Shayan Khan. Built with modern web architecture and security principles.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <span className="material-symbols-outlined text-xs">arrow_upward</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
