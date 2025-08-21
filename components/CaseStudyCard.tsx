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
    <motion.article 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
      whileHover={{ 
        y: -4, 
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/case-studies/${slug}`} className="block">
        <motion.div 
          className="relative aspect-[16/10] overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          <Image 
            src={cover} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, 33vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <div className="p-5">
          <motion.h3 
            className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-custom-blue transition-colors duration-200"
            whileHover={{ 
              x: 2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {title}
          </motion.h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">{excerpt}</p>
          
          {tags.length > 0 && (
            <motion.ul 
              className="flex flex-wrap gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {tags.slice(0, 3).map((t, index) => (
                <motion.li 
                  key={t} 
                  className="text-xs bg-custom-blue-50 text-custom-blue-700 rounded-full px-3 py-1.5 font-medium border border-custom-blue-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.2 + index * 0.05, 
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#eff6ff",
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </Link>
    </motion.article>
  );
}


