import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-[#0d1117] min-h-screen antialiased selection:bg-sky-500/30 selection:text-sky-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
