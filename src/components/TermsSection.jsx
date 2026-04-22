// src/components/TermsSection.jsx
import { useState } from "react";
import {
  ParagraphBlock,
  IntroBlock,
  HighlightBlock,
  ListBlock,
  CardsBlock,
  LinkBlock,
} from "./ContentBlocks";

function renderBlock(block, idx) {
  switch (block.type) {
    case "paragraph": return <ParagraphBlock key={idx} text={block.text} />;
    case "intro":     return <IntroBlock key={idx} text={block.text} />;
    case "highlight": return <HighlightBlock key={idx} text={block.text} />;
    case "list":      return <ListBlock key={idx} title={block.title} items={block.items} variant={block.variant} />;
    case "cards":     return <CardsBlock key={idx} items={block.items} />;
    case "link":      return <LinkBlock key={idx} text={block.text} href={block.href} />;
    default:          return null;
  }
}

export default function TermsSection({ section, isLast }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <article
      id={section.id}
      className={`scroll-mt-28 ${!isLast ? "pb-12 mb-12 border-b border-zinc-100 dark:border-zinc-800/60" : "pb-8"}`}
    >
      {/* Section header */}
      <div className="flex items-start gap-4 mb-7">
        {/* Number + color accent */}
        <div className="flex-shrink-0 mt-1">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${section.color}22 0%, ${section.color}11 100%)`,
              border: `1px solid ${section.color}30`,
              boxShadow: `0 4px 20px ${section.color}15`,
            }}
          >
            {section.emoji}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Section number */}
          <span
            className="text-xs font-bold uppercase tracking-[0.15em] mb-1 block"
            style={{ color: section.color, opacity: 0.7 }}
          >
            Section {section.number}
          </span>

          {/* Title row with collapse toggle */}
          <div className="flex items-center justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl font-bold leading-tight text-zinc-900 dark:text-white"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {section.title}
            </h2>

            {/* Mobile accordion toggle */}
            <button
              className="xl:hidden flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              onClick={() => setCollapsed((c) => !c)}
              aria-label={collapsed ? "Expand section" : "Collapse section"}
            >
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${collapsed ? "" : "rotate-180"}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Tagline */}
          <p className="text-sm font-medium mt-1" style={{ color: section.color, opacity: 0.8 }}>
            {section.tagline}
          </p>
        </div>
      </div>

      {/* Content — accordion on mobile */}
      <div
        className="accordion-content xl:!max-h-none xl:!opacity-100"
        style={{ maxHeight: collapsed ? "0" : "9999px", opacity: collapsed ? 0 : 1 }}
      >
        <div className="pl-0 xl:pl-15 space-y-5 ml-0 xl:ml-[60px]">
          {section.content.map((block, i) => renderBlock(block, i))}
        </div>
      </div>
    </article>
  );
}
