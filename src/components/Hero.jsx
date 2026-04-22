// src/components/Hero.jsx
import { LAST_UPDATED, VERSION } from "../data/terms";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 px-5 sm:px-8">
      {/* Background orbs */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6D4AFF, transparent 70%)" }}
      />
      <div
        className="absolute top-32 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #A892FF, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full border"
            style={{
              color: "#6D4AFF",
              borderColor: "rgba(109,74,255,0.25)",
              backgroundColor: "rgba(109,74,255,0.06)",
            }}
          >
            Legal Agreement
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" />
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-zinc-900 dark:text-white"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Terms &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6D4AFF 0%, #A892FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Conditions
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          We've written our terms to be understood by real people, not just lawyers.
          Here's what you agree to when you join the MindMates community.
        </p>

        {/* Meta chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: "📅", label: `Updated ${LAST_UPDATED}` },
            { icon: "📋", label: `Version ${VERSION}` },
            { icon: "🇮🇳", label: "Governed by Indian Law" },
            { icon: "⏱️", label: "~5 min read" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              <span>{chip.icon}</span>
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-900/50 to-transparent" />
    </section>
  );
}
