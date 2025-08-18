import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  title: string;
  content: string;
  images: string[];
};

export default function CaseStudyDetail({ title, content, images }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{title}</h1>
      {images.length > 0 && (
        <div className="relative rounded-lg overflow-hidden mb-8 border border-black/5">
          <Image src={images[0]} alt={title} width={1600} height={1000} className="w-full h-auto" />
        </div>
      )}
      <div className="prose max-w-none prose-p:leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
      {images.slice(1).length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {images.slice(1).map((src) => (
            <div key={src} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/5">
              <Image src={src} alt="Case image" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}


