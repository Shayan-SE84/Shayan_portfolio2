export interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string | null;
  language: string;
  topics: string[];
  stars: number;
  forks: number;
  featured: boolean;
  codeSnippet: string;
  caseStudy: string;
  image: string;
}

export const fallbackProjects: Project[] = [
  {
    name: "pizza-web",
    description: "A dynamic restaurant ordering platform built with modular state systems, responsive carts, and robust checkout schemas. Optimized for small touch screens and fast client-side flows.",
    html_url: "https://github.com/Shayan-SE84/pizza-web",
    homepage: "https://github.com/Shayan-SE84/pizza-web",
    language: "TypeScript",
    topics: ["TypeScript", "Responsive UI", "Cart State", "User Experience"],
    stars: 2,
    forks: 0,
    featured: true,
    codeSnippet: `// Cart State Management
interface CartItem {
  id: string;
  size: 'S' | 'M' | 'L';
  qty: number;
}

export const dispatchCartAction = (
  state: CartItem[], 
  action: { type: 'ADD' | 'REMOVE'; payload: CartItem }
) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};`,
    caseStudy: "Designed to solve real-world e-commerce interactions by managing clean transactional states. Features interactive checkout modules, live cart summaries, and a complete light/dark theme implementation.",
    image: "/src/assets/images/pizza_web_ui_1790768553348.jpg"
  },
  {
    name: "shayan-portfolio",
    description: "Premium technical personal portfolio utilizing simulated workstation consoles, client-side draft auto-recovery systems, and strict semantic layouts. Designed for high fidelity and rapid accessibility.",
    html_url: "https://github.com/Shayan-SE84/shayan-portfolio",
    homepage: "https://shayan-portfolio.pages.dev",
    language: "TypeScript",
    topics: ["React", "Tailwind CSS v4", "WebGL Canvas", "LocalStorage API"],
    stars: 1,
    forks: 0,
    featured: true,
    codeSnippet: `// LocalStorage Form Auto-Draft Recovery
const DRAFT_KEY = "shayan_form_draft";

export const persistDraft = (formData: Record<string, string>) => {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
};

export const retrieveDraft = (): Record<string, string> | null => {
  const raw = localStorage.getItem(DRAFT_KEY);
  return raw ? JSON.parse(raw) : null;
};`,
    caseStudy: "Fuses client-side interactive widgets with clean, high-performance system dashboards. Employs advanced canvas rendering for fine atmospheric backdrops without runtime performance lags on mobile devices.",
    image: "/src/assets/images/developer_dashboard_workstation_1790768573226.jpg"
  },
  {
    name: "Portfolio",
    description: "The foundational milestone web asset marking the start of my engineering path. Implements vanilla scripting, standard semantic containers, and responsive grid patterns.",
    html_url: "https://github.com/Shayan-SE84/Portfolio",
    homepage: null,
    language: "HTML",
    topics: ["Semantic HTML", "Vanilla JS", "CSS Grid", "Milestone Progress"],
    stars: 1,
    forks: 0,
    featured: false,
    codeSnippet: `<!-- Early Semantic Grid Architecture -->
<section id="milestone-grid" class="layout-grid">
  <article class="milestone-card">
    <header class="card-head">
      <h4>Vanilla Component v1</h4>
    </header>
  </article>
</section>`,
    caseStudy: "A crucial milestone showcasing progress from absolute full-stack basics to structured component frameworks. Highly semantic and standard-compliant layout structures.",
    image: "/src/assets/images/semantic_web_layout_1790768590047.jpg"
  },
  {
    name: "Shayan-SE84",
    description: "Self-documenting profile configuration and automated development dashboard. Incorporates metrics tracking, interactive widgets, and active integration pipelines.",
    html_url: "https://github.com/Shayan-SE84/Shayan-SE84",
    homepage: null,
    language: "Markdown",
    topics: ["GitHub Workflows", "CI/CD Actions", "Self-Documenting", "Profile Hub"],
    stars: 0,
    forks: 0,
    featured: false,
    codeSnippet: `# Automated Telemetry Pipeline
name: Update Metrics
on:
  schedule:
    - cron: "0 */12 * * *"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3`,
    caseStudy: "Acts as a central repository hub linking multi-platform workflows. Uses automated GitHub actions to query, compute, and print developer stats instantly on the main profile dashboard.",
    image: "/src/assets/images/automation_metrics_hub_1790768611386.jpg"
  }
];
