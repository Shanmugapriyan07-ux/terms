import { useState, useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import MobileTOC from "./components/MobileTOC";
import TermsSection from "./components/TermsSection";
import Footer from "./components/Footer";
import { SECTIONS } from "./data/terms";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 grain">
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      <Hero />
      <MobileTOC />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex gap-14 xl:gap-20 items-start">
          <Sidebar />
          <main className="flex-1 min-w-0">
            {SECTIONS.map((section, i) => (
              <TermsSection
                key={section.id}
                section={section}
                isLast={i === SECTIONS.length - 1}
              />
            ))}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
