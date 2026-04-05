import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import NavDots from "@/components/NavDots";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <NavDots />
      <Hero />
      <Marquee />
      <About />
      <TechStack />
      <Marquee />
      <Services />
      <Projects />
      <Marquee />
      <Testimonials />
      <Education />
      <Contact />
    </main>
  );
}
