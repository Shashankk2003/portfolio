import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { AIInDesign } from "@/components/AIInDesign";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <AIInDesign />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
