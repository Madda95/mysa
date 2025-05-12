// components
import { Footer, Navbar } from "@/components";

// sections
import Hero from "./hero";
import Projects from "./projects";
import Resume from "./resume";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
}
