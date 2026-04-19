import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import QuickCategories from "@/components/QuickCategories";
import PressQuotes from "@/components/PressQuotes";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <QuickCategories />
      <PressQuotes />
      <HowItWorks />
      <Categories />
      <Benefits />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Partners />
      <Footer />
    </main>
  );
}
