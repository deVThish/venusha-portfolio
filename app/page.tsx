import Hero from "./components/Hero";
import About from "./components/About"; 

export default function Home() {
  return (
    <main className="bg-[#0d1117] min-h-screen antialiased selection:bg-sky-500/30 selection:text-sky-300">
      <Hero />
      <About /> {}
    </main>
  );
}
