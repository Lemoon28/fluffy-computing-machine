import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  slug: string;
  excerpt: string;
  cover: string;
  tags?: string[];
};

export default function CaseStudyCard({ title, slug, excerpt, cover, tags = [] }: Props) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition">
      <Link href={`/case-studies/${slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image src={cover} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">{excerpt}</p>
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 3).map((t) => (
                <li key={t} className="text-xs bg-gray-100 rounded px-2 py-1">{t}</li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </motion.article>
  );
}


