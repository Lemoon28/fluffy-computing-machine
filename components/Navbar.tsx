import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Lem Tippong</Link>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link className="hover:opacity-70 transition" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:opacity-70 transition" href="/about">About</Link>
          </li>
          <li>
            <Link className="hover:opacity-70 transition" href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


