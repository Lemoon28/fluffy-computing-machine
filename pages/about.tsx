import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="relative aspect-square w-full max-w-sm md:max-w-none md:w-full rounded-2xl overflow-hidden border border-black/5">
        <Image src="/images/profile.jpg" alt="Portrait of Lem Tippong" fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-gray-600 dark:text-slate-300 leading-relaxed">I am a passionate digital designer and front‑end developer with over 5 years of experience crafting user‑centered solutions. I blend creative direction with systems‑thinking to deliver designs that feel effortless and perform beautifully.</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <li><strong>Skills:</strong> UX/UI, Web, Mobile, Branding</li>
          <li><strong>Tools:</strong> Figma, Next.js, Tailwind CSS</li>
          <li><strong>Motion:</strong> Framer Motion</li>
          <li><strong>Data Viz:</strong> D3, Python</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <Link className="px-4 py-2 rounded bg-black text-white hover:opacity-90 transition" href="/contact">Let&apos;s Work Together</Link>
          <a className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}


