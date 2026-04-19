"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const categories = [
  { value: "voiture", label: "Transport de voitures" },
  { value: "moto", label: "Transport de motos/scooters" },
  { value: "meubles", label: "Meubles & Électroménager" },
  { value: "industriel", label: "Industrie & Bâtiment" },
  { value: "palettes", label: "Palettes" },
  { value: "bateau", label: "Transport de bateaux" },
  { value: "demenagement", label: "Déménagements complets" },
  { value: "instruments", label: "Pianos & instruments" },
  { value: "refrigere", label: "Aliments réfrigérés" },
  { value: "autre", label: "Autre" },
  { value: "animaux", label: "Animaux domestiques" },
];

const countries = [
  { value: "fr", label: "France" },
  { value: "de", label: "Allemagne" },
  { value: "es", label: "Espagne" },
  { value: "it", label: "Italie" },
  { value: "be", label: "Belgique" },
  { value: "ch", label: "Suisse" },
  { value: "lu", label: "Luxembourg" },
  { value: "pt", label: "Portugal" },
  { value: "gb", label: "Royaume-Uni" },
  { value: "nl", label: "Pays-Bas" },
  { value: "at", label: "Autriche" },
  { value: "ro", label: "Roumanie" },
  { value: "sm", label: "Saint-Marin" },
  { value: "pl", label: "Pologne" },
  { value: "cz", label: "République Tchèque" },
  { value: "hu", label: "Hongrie" },
  { value: "sk", label: "Slovaquie" },
  { value: "hr", label: "Croatie" },
  { value: "rs", label: "Serbie" },
  { value: "gr", label: "Grèce" },
  { value: "dk", label: "Danemark" },
  { value: "fi", label: "Finlande" },
  { value: "se", label: "Suède" },
  { value: "no", label: "Norvège" },
];

export default function Hero() {
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("fr");
  const [to, setTo] = useState("fr");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category) {
      router.push(`/publier-demande?categorie=${category}&de=${from}&vers=${to}`);
    }
  };

  return (
    <section className="relative min-h-[620px] md:min-h-[680px] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
        alt="Transport et déménagement"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#003DA5]/82" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            Plus d&apos;1 000 000 d&apos;utilisateurs nous font confiance
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Du transport,{" "}
            <span className="text-yellow-300">on s&apos;en occupe.</span>
            <br className="hidden sm:block" />
            {" "}Toi, détends-toi.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 font-semibold tracking-wide">
            Sûr. Rapide. Économique.
          </p>

          {/* Form — 3 selects like macingo */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="relative flex-[2]">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative flex-1">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full appearance-none bg-gray-50 text-gray-800 font-medium px-4 py-3.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative flex-1">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full appearance-none bg-gray-50 text-gray-800 font-medium px-4 py-3.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <button
              type="submit"
              className="bg-[#003DA5] hover:bg-[#002d7a] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Demander des devis
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-sm text-blue-100 font-semibold">
            <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span>Devis gratuits</span>
            <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span>Transporteurs vérifiés</span>
            <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span>Jusqu&apos;à 80% d&apos;économies</span>
            <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span>Marchandise assurée</span>
          </div>
        </div>
      </div>
    </section>
  );
}
