import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
