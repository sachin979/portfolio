import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Snapshot from "@/components/snapshot/Snapshot";
import Experience from "@/components/experience/Experience";
import Techstack from "@/components/techstack/Techstack";
import Engineering from "@/components/engineering/Engineering";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Snapshot/>
      <Experience/>
      <Techstack/>
      <Engineering/>
      <Contact/>
      <Footer/>
    </main>
  );
}