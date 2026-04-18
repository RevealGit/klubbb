import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis & Témoignages clients — Klubbb",
  description:
    "Découvrez les avis et témoignages de plus de 156 000 clients satisfaits qui ont utilisé Klubbb pour leurs transports et déménagements.",
};

export default function Avis() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Avis & Témoignages</h1>
            <p className="text-xl text-blue-100 mb-8">
              Plus de 156 000 clients ont fait confiance à Klubbb pour leurs transports
            </p>
            {/* Global rating */}
            <div className="inline-flex flex-col items-center bg-white/15 backdrop-blur-sm px-8 py-5 rounded-2xl">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-4xl font-black">4.8 / 5</span>
              <span className="text-blue-200 text-sm mt-1">Basé sur 12 400+ avis vérifiés</span>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA */}
        <section className="py-14 bg-[#f8fafc] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-gray-500 mb-8">
              Publiez votre demande gratuitement et obtenez des devis en moins de 24h.
            </p>
            <Link href="/publier-demande" className="btn-primary text-base px-8 py-4">
              Publier ma demande gratuitement
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
