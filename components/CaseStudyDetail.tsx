import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

type Props = {
  title: string;
  content: string;
  images: string[];
};

export default function CaseStudyDetail({ title, content, images }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.article 
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
        variants={itemVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      
      {images.length > 0 && (
        <motion.div 
          className="relative rounded-xl overflow-hidden mb-12 border border-gray-200/50 shadow-lg"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <Image 
            src={images[0]} 
            alt={title} 
            width={1600} 
            height={1000} 
            className="w-full h-auto" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      )}
      
      <motion.div 
        className="prose max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
        variants={itemVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </motion.div>
      
      {images.slice(1).length > 0 && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {images.slice(1).map((src, index) => (
            <motion.div 
              key={src} 
              className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            >
              <Image 
                src={src} 
                alt="Case image" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.article>
  );
}


