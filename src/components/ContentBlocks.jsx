// src/components/ContentBlocks.jsx

export function ParagraphBlock({ text }) {
  return (
    <p className="text-[15px] leading-[1.8] text-zinc-600 dark:text-zinc-300 font-light">
      {text}
    </p>
  );
}

export function IntroBlock({ text }) {
  return (
    <p
      className="text-lg sm:text-xl leading-relaxed font-light text-zinc-700 dark:text-zinc-200"
      style={{ fontFamily: "'Fraunces', serif" }}
    >
      {text}
    </p>
  );
}

export function HighlightBlock({ text }) {
  return (
    <div
      className="relative pl-5 py-4 pr-5 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(109,74,255,0.07) 0%, rgba(168,146,255,0.04) 100%)",
        borderLeft: "3px solid #6D4AFF",
      }}
    >
      <p className="text-[14.5px] leading-relaxed text-violet-800 dark:text-violet-300 font-medium">
        {text}
      </p>
    </div>
  );
}

export function ListBlock({ title, items, variant = "default" }) {
  const isDanger = variant === "danger";
  return (
    <div className="space-y-3">
      {title && (
        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
          {title}
        </p>
      )}
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                isDanger
                  ? "bg-red-100 dark:bg-red-950/40 text-red-500"
                  : "bg-violet-100 dark:bg-violet-950/40 text-violet-600"
              }`}
            >
              {isDanger ? "✕" : "✓"}
            </span>
            <span className="text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CardsBlock({ items }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {items.map((card, i) => (
        <div
          key={i}
          className="group p-4 rounded-xl border bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800/50 hover:shadow-md hover:shadow-violet-100/30 dark:hover:shadow-violet-950/30 transition-all duration-300"
        >
          <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </span>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-1.5">
            {card.title}
          </p>
          <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-light">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function LinkBlock({ text, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold transition-all group"
      style={{ color: "#6D4AFF" }}
    >
      <span className="group-hover:underline">{text}</span>
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className="group-hover:translate-x-1 transition-transform"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  );
}
