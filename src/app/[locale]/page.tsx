import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import { Contact } from "@/components/Contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <FAQ />
      <Contact />
    </>
  );
}
