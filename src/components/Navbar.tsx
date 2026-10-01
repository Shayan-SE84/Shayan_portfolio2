import { useState, useEffect } from "react";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Force close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 bg-white/85 border-slate-200/80 dark:bg-slate-950/85 dark:border-slate-900/80 backdrop-blur-xl">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex flex-col group focus:outline-none">
            <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">
              Shayan Khan
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
              SE @ MAJU
            </span>
          </a>
          
          {/* Status badge - unboxed/clean */}
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              Active for Contracts
            </span>
          </div>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative whitespace-nowrap rounded-md ${
                  isActive
                    ? "text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-slate-900/60 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/30"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            type="button"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/40 border border-transparent hover:border-slate-200 dark:hover:border-slate-900 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500"
            aria-label="Toggle visual theme"
          >
            <span className="material-symbols-outlined text-lg">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Core Call-to-action */}
          <a
            href="https://wa.me/923282305784"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wide rounded-lg font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:hover:bg-emerald-500/20 transition-all"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-900 bg-slate-50 border border-slate-200 hover:bg-slate-100 dark:text-slate-100 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:bg-slate-900 transition-all focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-t bg-white border-slate-200 dark:bg-slate-950 dark:border-slate-900 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-slate-900/60 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900/20"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://wa.me/923282305784"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 text-sm font-mono rounded-lg text-emerald-600 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 font-semibold"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Open WhatsApp Chat</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
