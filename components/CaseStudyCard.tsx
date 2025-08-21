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
      className="group rounded-xl overflow-hidden bg-white border border-gray-200/50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/case-studies/${slug}`} className="block">
        <motion.div 
          className="relative aspect-[16/10] overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          <Image 
            src={cover} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
            sizes="(max-width: 768px) 100vw, 33vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        
        <div className="p-6">
          <motion.h3 
            className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
            whileHover={{ 
              x: 4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {title}
          </motion.h3>
          
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
          
          {tags.length > 0 && (
            <motion.ul 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {tags.slice(0, 3).map((t, index) => (
                <motion.li 
                  key={t} 
                  className="text-xs bg-blue-50 text-blue-700 rounded-full px-3 py-1.5 font-medium border border-blue-200/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#dbeafe",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          )}
          
          <motion.div 
            className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
            whileHover={{ 
              x: 4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            View Project
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}


