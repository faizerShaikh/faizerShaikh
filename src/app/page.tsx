import { Skills } from "@/components/skills";
import { AboutMe, Experiance, HeroSection, Projects } from "../components";
import ContactMe from "@/components/contact-me";

export default function Home() {
  return (
    <>
      <div id='top'></div>
      <HeroSection />
      <AboutMe />
      <Experiance />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  );
}
