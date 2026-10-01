import { useState, useEffect } from "react";
import { fallbackProjects, Project } from "../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"all" | "ts" | "web" | "profile">("all");

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/Shayan-SE84/repos");
        if (!res.ok) {
          throw new Error("Failed to fetch public repositories");
        }
        const data = await res.json();
        
        if (Array.isArray(data)) {
          // Merge GitHub counts (stars, forks) with our rich static data
          const merged = fallbackProjects.map((local) => {
            const remote = data.find(
              (r: any) => r.name.toLowerCase() === local.name.toLowerCase()
            );
            if (remote) {
              return {
                ...local,
                stars: remote.stargazers_count ?? local.stars,
                forks: remote.forks_count ?? local.forks,
                description: remote.description || local.description,
              };
            }
            return local;
          });
          setProjects(merged);
        }
      } catch (err) {
        console.warn("GitHub API fetch fallback triggered:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  // Filter projects by active tab
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ts") return project.language.toLowerCase() === "typescript";
    if (activeFilter === "web") {
      return (
        project.language.toLowerCase() === "html" ||
        project.language.toLowerCase() === "typescript" ||
        project.topics.some(t => t.toLowerCase().includes("web"))
      );
    }
    if (activeFilter === "profile") {
      return (
        project.name.toLowerCase() === "shayan-se84" ||
        project.topics.some(t => t.toLowerCase().includes("profile"))
      );
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-slate-200 dark:border-slate-900/60"
    >
      
      {/* Section Header & Filter row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 text-left animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-cyan-500 inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Engineering Work
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-balance">
            Featured Repositories &amp; Codebases
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Live public repositories queried directly from my GitHub profile stream.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-900 rounded-lg shrink-0 w-fit">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase rounded-md transition-all ${
              activeFilter === "all"
                ? "bg-white text-cyan-600 shadow-sm dark:bg-slate-950 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("ts")}
            className={`px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase rounded-md transition-all ${
              activeFilter === "ts"
                ? "bg-white text-cyan-600 shadow-sm dark:bg-slate-950 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            TypeScript
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("web")}
            className={`px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase rounded-md transition-all ${
              activeFilter === "web"
                ? "bg-white text-cyan-600 shadow-sm dark:bg-slate-950 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            Web Apps
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("profile")}
            className={`px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase rounded-md transition-all ${
              activeFilter === "profile"
                ? "bg-white text-cyan-600 shadow-sm dark:bg-slate-950 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            Profile Hub
          </button>
        </div>

      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="group p-6 sm:p-8 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-6 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all transform hover:-translate-y-1 text-left"
          >
            
            {/* Upper Content */}
            <div className="space-y-4">
              
              {/* Header metadata row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                  {project.language} · Public
                </span>
                
                {/* Stars and Forks counter */}
                <div className="flex items-center gap-3 font-mono text-xs text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    <span>{project.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-cyan-500 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">fork_left</span>
                    <span>{project.forks}</span>
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Image Layout Panel */}
              {project.image && (
                <div className="w-full h-44 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-900 bg-slate-100 dark:bg-slate-950 relative">
                  <img
                    src={project.image}
                    alt={`${project.name} graphic preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
                </div>
              )}

              {/* Code Preview Mock panel */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60 dark:bg-slate-950 dark:border-slate-900/80 font-mono text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 overflow-x-auto space-y-1.5 shadow-inner no-scrollbar">
                <div className="text-slate-400 dark:text-slate-600 select-none">// Mock Core Integration preview</div>
                <pre className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.codeSnippet}</pre>
              </div>

              {/* Topics/Tags */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                {project.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    #{topic}{tIdx < project.topics.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom row: Case study & Primary actions */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-900">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  Engineering Scope:
                </span>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 italic">
                  {project.caseStudy}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-cyan-500 text-slate-950 font-sans text-xs font-semibold hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 shadow"
                >
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  <span>View Source Code</span>
                </a>
                
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-sans text-xs font-medium hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-900/60 dark:border-slate-900 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-900 transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    <span>Live Showcase</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* GitHub Quick CTA bar */}
      <div className="mt-12 p-6 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950/20 dark:border-slate-900 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex items-center justify-center text-cyan-500 shadow-inner shrink-0">
            <span className="material-symbols-outlined text-2xl">folder_zip</span>
          </div>
          <div className="space-y-0.5">
            <h4 className="font-sans text-base font-bold text-slate-800 dark:text-slate-200">
              Continuous Git Integration
            </h4>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
              Follow all public repositories, direct commits, and upcoming deployment pipelines.
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Shayan-SE84"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg font-mono text-xs font-bold text-cyan-600 bg-cyan-50 border border-cyan-500/20 hover:bg-cyan-100 dark:text-cyan-400 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-all shrink-0 shadow-sm flex items-center gap-2"
        >
          <span>github.com/Shayan-SE84</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

    </section>
  );
}
