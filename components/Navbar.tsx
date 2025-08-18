import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Lem Tippong</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:opacity-70 transition" href="/">Home</Link>
          <Link className="hover:opacity-70 transition" href="/about">About</Link>
          <Link className="hover:opacity-70 transition" href="/contact">Contact</Link>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? (
              <span className="inline-flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/>
                </svg>
                Dark
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.96 19.04l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM20 11V9h-3v2h3zm-2.05 8.04l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM13 1h-2v3h2V1zm6.24 3.05l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM12 6a6 6 0 100 12 6 6 0 000-12z"/>
                </svg>
                Light
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}


