"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const categories = [
  { value: "voiture", label: "Transport de voitures" },
  { value: "moto", label: "Transport de motos" },
  { value: "demenagement", label: "Déménagement complet" },
  { value: "bateau", label: "Transport de bateaux" },
  { value: "meubles", label: "Meubles & Électroménager" },
  { value: "industriel", label: "Produits industriels" },
  { value: "batiment", label: "Bâtiment & Construction" },
  { value: "animaux", label: "Animaux & Élevage" },
  { value: "palettes", label: "Palettes & Marchandises" },
];

export default function Hero() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      router.push(`/publier-demande?categorie=${selected}`);
    }
  };

  return (
    <section className="relative min-h-[620px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
        alt="Transport et déménagement"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay bleu */}
      <div className="absolute inset-0 bg-[#003DA5]/82" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            Plus d&apos;1 000 000 d&apos;utilisateurs nous font confiance
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Du transport,{" "}
            <span className="text-yellow-300">on s&apos;en occupe.</span>
            <br className="hidden sm:block" />
            {" "}Toi, détends-toi.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 font-semibold tracking-wide">
            Sûr. Rapide. Économique.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-3 shadow-2xl max-w-2xl mx-auto"
          >
            <div className="relative flex-1">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full appearance-none bg-gray-50 text-gray-800 font-semibold px-4 py-3.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] cursor-pointer"
                required
              >
                <option value="">Que voulez-vous transporter ?</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#003DA5] hover:bg-[#002d7a] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Demander des devis
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-sm text-blue-100 font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span>
              Devis gratuits
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span>
              Transporteurs vérifiés
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span>
              Jusqu&apos;à 80% d&apos;économies
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span>
              Marchandise assurée
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
