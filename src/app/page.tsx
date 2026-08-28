import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import LearningSection from "@/components/LearningSection";
import WorkSection from "@/components/WorkSection";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <LearningSection />
      <WorkSection />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
}
