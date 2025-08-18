import CaseStudyCard from "@/components/CaseStudyCard";
import data from "@/data/case-studies.json";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

type CaseStudy = {
  title: string;
  slug: string;
  excerpt: string;
  images: string[];
  tags?: string[];
  thumb?: string;
};

export default function Home() {
  const items = (data as CaseStudy[]).map((d) => ({
    ...d,
    cover: d.thumb ?? d.images?.[0] ?? "/images/case-01.jpg",
  }));

  return (
    <div>
      <section className="bg-gray-50 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left sm:text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">Creative Digital Experiences</h1>
            <p className="mt-3 text-gray-600 max-w-prose sm:mx-auto md:mx-0">I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles.</p>
            <div className="mt-6 flex gap-3 justify-start sm:justify-center md:justify-start">
              <a href="#work" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Projects</a>
              <Link href="/contact" className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition">Get In Touch</Link>
            </div>
          </div>
          <div className="flex-1 flex md:justify-end">
            <div className="relative mx-auto md:ml-auto md:mr-0 size-72 sm:size-84 rounded-full overflow-hidden border border-black/5 shadow-inner">
              <Image src="/images/profile.jpg" alt="Portrait of Lem Tippong" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-gray-600 mb-6">Explore my latest work in web design, mobile apps, and digital experiences.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <CaseStudyCard key={item.slug} title={item.title} slug={item.slug} excerpt={item.excerpt} cover={item.cover} tags={item.tags} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">About Me</h2>
            <p className="text-gray-600 leading-relaxed">I’m a digital designer and front‑end developer focused on UX, motion, and performance. I partner with teams to turn ideas into usable, beautiful products.</p>
            <ul className="mt-4 text-sm text-gray-600 grid grid-cols-2 gap-2">
              <li><strong>Skills:</strong> UX/UI, Web, Mobile</li>
              <li><strong>Tools:</strong> Figma, Next.js, Tailwind</li>
            </ul>
            <div className="mt-6">
              <Link href="/about" className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition">More about me</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600 mb-4">Have a project in mind? Let’s discuss how I can help.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
