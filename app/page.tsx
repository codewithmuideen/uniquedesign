import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import VideoPlayer from "@/components/video-player";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <VideoPlayer />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
