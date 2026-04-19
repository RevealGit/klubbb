import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import PressQuotes from "@/components/PressQuotes";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <PressQuotes />
      <HowItWorks />
      <Categories />
      <Benefits />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
