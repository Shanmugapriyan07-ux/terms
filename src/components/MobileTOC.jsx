// src/components/MobileTOC.jsx
import { useState } from "react";
import { SECTIONS } from "../data/terms";

export default function MobileTOC() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="xl:hidden sticky top-[67px] z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        <span className="flex items-center gap-2.5">
          <svg
            width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="#6D4AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="15" y2="12" />
            <line x1="3" y1="18" x2="18" y2="18" />
          </svg>
          Jump to section
        </span>
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className="accordion-content"
        style={{ maxHeight: open ? "600px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-3 border-t border-zinc-100 dark:border-zinc-800">
          {SECTIONS.map(({ id, emoji, title, number }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-start gap-2 p-3 rounded-xl text-left hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors group"
            >
              <span className="text-base mt-0.5 group-hover:scale-110 transition-transform">
                {emoji}
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 leading-snug">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
