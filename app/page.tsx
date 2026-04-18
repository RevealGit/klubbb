import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Categories />
      <HowItWorks />
      <Benefits />
      <Stats />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
