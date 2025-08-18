import { GetStaticPaths, GetStaticProps } from "next";
import data from "@/data/case-studies.json";
import CaseStudyDetail from "@/components/CaseStudyDetail";

type CaseStudy = {
  title: string;
  slug: string;
  content: string;
  images: string[];
};

export default function CaseStudyPage({ title, content, images }: CaseStudy) {
  return <CaseStudyDetail title={title} content={content} images={images} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = data as CaseStudy[];
  return {
    paths: items.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const items = data as CaseStudy[];
  const found = items.find((i) => i.slug === slug)!;
  return { props: found };
};


