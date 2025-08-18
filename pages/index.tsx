import CaseStudyCard from "@/components/CaseStudyCard";
import data from "@/data/case-studies.json";
import Link from "next/link";

type CaseStudy = {
  title: string;
  slug: string;
  excerpt: string;
  images: string[];
  tags?: string[];
};

export default function Home() {
  const items = (data as CaseStudy[]).map((d) => ({
    ...d,
    cover: d.images?.[0] ?? "/images/case-01.jpg",
  }));

  return (
    <div>
      <section className="bg-gray-50 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">Creative Digital Experiences</h1>
            <p className="mt-3 text-gray-600 max-w-prose">I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles.</p>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Projects</a>
              <Link href="/contact" className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition">Get In Touch</Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="mx-auto size-48 sm:size-56 rounded-full bg-gray-100 border border-black/5 shadow-inner flex items-center justify-center text-6xl">🧑‍💻</div>
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
    </div>
  );
}
