import { useState, useEffect } from "react";

const DRAFT_KEY = "shayan_portfolio_contact_draft";

interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactDraft>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasDraft, setHasDraft] = useState(false);

  // Restore draft on initial load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) {
          setFormData({
            name: parsed.name || "",
            email: parsed.email || "",
            subject: parsed.subject || "",
            message: parsed.message || "",
          });
          setHasDraft(true);
        }
      }
    } catch (err) {
      console.error("Failed to restore contact draft:", err);
    }
  }, []);

  // Sync draft to local storage
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    
    // Save to LocalStorage
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(updated));
      setHasDraft(true);
    } catch (err) {
      console.error("Failed to sync contact draft:", err);
    }
  };

  // Clear draft
  const handleClearDraft = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    try {
      localStorage.removeItem(DRAFT_KEY);
      setHasDraft(false);
    } catch (err) {}
  };

  // Submit contact form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct Pakistan WhatsApp link formatter
    const encodedMessage = encodeURIComponent(
      `Hi Shayan,\n\nI saw your portfolio.\nMy Name: ${formData.name}\nMy Email: ${formData.email}\nSubject: ${formData.subject || "Collaboration opportunity"}\n\nMessage:\n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/923282305784?text=${encodedMessage}`;

    // Open WhatsApp deep-link in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Success notifications & Clear storage
    setToastMessage("Draft saved! Redirecting to WhatsApp for immediate dispatch.");
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Auto-clear toast after 5 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  // Clipboard copy helper
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shayankhan.1946@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-slate-200 dark:border-slate-900/60"
    >
      
      {/* Title section */}
      <div className="flex flex-col gap-3 mb-12 text-left animate-fadeIn">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-500 inline-block"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
            Direct Comm Lines
          </span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-balance">
          Initiate Direct Communication
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Whether you are looking to hire, contract, collaborate, or secure a web application, my channels are open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Fast Access Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          
          {/* Email Quick-Copy Card */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                Direct Email Inbox
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-[10px] text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                aria-label="Copy Shayan's email address to clipboard"
              >
                <span className="material-symbols-outlined text-xs">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            
            <a
              href="mailto:shayankhan.1946@gmail.com"
              className="flex items-center gap-2.5 font-sans text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <span className="material-symbols-outlined text-cyan-500 dark:text-cyan-400 text-xl">mail</span>
              <span>shayankhan.1946@gmail.com</span>
            </a>
            
            <span className="font-sans text-xs text-slate-400 dark:text-slate-500">
              Response priority: High. Typically replies inside 24 hours.
            </span>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                Instant Chat Channels
              </span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Online
              </span>
            </div>
            
            <a
              href="https://wa.me/923282305784"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-sans text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span className="material-symbols-outlined text-emerald-500 dark:text-emerald-400 text-xl">chat</span>
              <span>+92 328 2305784</span>
            </a>
            
            <span className="font-sans text-xs text-slate-400 dark:text-slate-500">
              Direct connection matching Pakistan's mobile carriers. Tap to launch WhatsApp instantly.
            </span>
          </div>

          {/* Academic Physical location */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200 text-cyan-600 dark:bg-slate-900 dark:border-slate-800 dark:text-cyan-400">
              <span className="material-symbols-outlined text-lg">location_city</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                Muhammad Ali Jinnah University
              </h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                Lal Kothi, Main Shahrah-e-Faisal, Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-lg">terminal</span>
              </div>
              <div className="space-y-0.5">
                <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-slate-100">
                  GitHub Profile
                </h4>
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  @Shayan-SE84
                </p>
              </div>
            </div>
            <a
              href="https://github.com/Shayan-SE84"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-sans text-xs font-semibold bg-slate-50 border border-slate-200 hover:bg-slate-100 text-cyan-600 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-cyan-400 transition-all"
            >
              Visit Profile
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Form with Auto-Draft */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border bg-white border-slate-200 dark:bg-slate-950/40 dark:border-slate-900 shadow-xl flex flex-col justify-between">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                Draft a Secure Message
              </h3>
              
              {hasDraft && (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs animate-spin" style={{ animationDuration: '3s' }}>sync</span>
                    <span>Draft Autosaved</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleClearDraft}
                    className="font-mono text-[10px] text-red-500 hover:text-red-400 font-medium cursor-pointer"
                    title="Clear current draft content"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold"
                >
                  Your Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Richard Hendricks"
                  className="px-4 py-3 rounded-lg border bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-200 dark:placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400 text-sm transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold"
                >
                  Your Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. richard@piedpiper.com"
                  className="px-4 py-3 rounded-lg border bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-200 dark:placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400 text-sm transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="subject"
                className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold"
              >
                Subject / Topic
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="e.g. React Contract / Academic Collab"
                className="px-4 py-3 rounded-lg border bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-200 dark:placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400 text-sm transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="message"
                className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold"
              >
                Inquiry Detail
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write the timeline, tech stack scope, or details of your request here..."
                className="px-4 py-3 rounded-lg border bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-200 dark:placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="font-sans text-xs text-slate-400 dark:text-slate-500 text-left">
                Pressing send logs parameters &amp; triggers WhatsApp API redirect.
              </span>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-sans text-sm font-semibold hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </div>

          </form>

          {/* Success Toast feedback panel */}
          {toastMessage && (
            <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 text-left">
              <span className="material-symbols-outlined shrink-0">check_circle</span>
              <div className="space-y-1">
                <div className="font-sans text-sm font-bold">Inquiry Processed</div>
                <p className="font-sans text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {toastMessage}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
