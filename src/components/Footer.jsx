// src/components/Footer.jsx
import { LAST_UPDATED } from "../data/terms";
import logoo from "../assets/logoo.png";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-16">
      {/* CTA band */}
      <div
        className="py-16 px-5 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(109,74,255,0.05) 0%, rgba(168,146,255,0.03) 50%, rgba(109,74,255,0.05) 100%)",
        }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3 leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Ready to connect with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6D4AFF, #6D4AFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your people?
            </span>
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-light">
            Join thousands of people connecting through skills and shared passions.
          </p>
          <a
            
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6D4AFF, #8B6BFF)",
              boxShadow: "0 8px 25px rgba(109,74,255,0.35)",
            }}
          >
            Mind Mates
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #6D4AFF, #6D4AFF)" }}
          >
                 <img 
               src={logoo}
               alt="Logo" 
               className="w-5 h-5 mb-0.5" 
             />
          </div>
          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300" style={{ fontFamily: "'Fraunces', serif" }}>
            MindMates
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400 dark:text-zinc-600">
          <a href="/privacy-policy" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-violet-600 transition-colors font-semibold text-violet-500">Terms & Conditions</a>
          <a href="/cookies" className="hover:text-violet-600 transition-colors">Cookie Policy</a>
          <a href="mailto:legal@mindmates.app" className="hover:text-violet-600 transition-colors">Contact Legal</a>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © 2026 MindMates · Last updated {LAST_UPDATED}
        </p>
      </div>
    </footer>
  );
}
