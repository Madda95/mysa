// components
import { Footer, Navbar } from "@/components";

// sections
import Hero from "./hero";
import RootLayout from "./layout";
import Projects from "./projects";
import Resume from "./resume";

export default function Portfolio() {
  return (
    <RootLayout>
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <Footer />
    </RootLayout>
  );
}
