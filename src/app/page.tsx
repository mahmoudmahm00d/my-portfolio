import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    // <h1 className="text-3xl font-light underline">Hello, Next.js!</h1>
    <>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
