// src/components/Sidebar.jsx
import { useState, useEffect } from "react";
import { SECTIONS } from "../data/terms";

export default function Sidebar() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-15% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyLink = (id) => {
    navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`);
    setCopied(id);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <aside className="hidden xl:block w-72 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 mb-4 px-4">
          Contents
        </p>

        <nav className="space-y-0.5">
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <div key={section.id} className="group flex items-center gap-1">
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 text-left ${
                    isActive
                      ? "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 font-semibold"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-base transition-all ${isActive ? "scale-110" : "opacity-60 group-hover:opacity-100"}`}
                  >
                    {section.emoji}
                  </span>
                  <span className="leading-snug">{section.title}</span>
                  {isActive && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#6D4AFF" }}
                    />
                  )}
                </button>

                {/* Copy link button */}
                <button
                  onClick={() => copyLink(section.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-all flex-shrink-0"
                  title="Copy link"
                >
                  {copied === section.id ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* Contact card */}
        <div
          className="mt-6 mx-2 p-4 rounded-2xl border"
          style={{
            background: "linear-gradient(135deg, rgba(109,74,255,0.06) 0%, rgba(168,146,255,0.04) 100%)",
            borderColor: "rgba(109,74,255,0.15)",
          }}
        >
          <p className="text-xs font-semibold text-violet-700 dark:text-violet-400 mb-1">
            Questions about these terms?
          </p>
          <a
            href="mailto:shanmugapriyancse582@gmail.com"
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-violet-600 transition-colors"
          >
            shanmugapriyancse582@gmail.com →
          </a>
        </div>
      </div>
    </aside>
  );
}
