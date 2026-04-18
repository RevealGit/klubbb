"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, User, Truck } from "lucide-react";

const categories = [
  { label: "Transport de voitures", slug: "transport-voitures" },
  { label: "Transport de motos", slug: "transport-motos" },
  { label: "Déménagements complets", slug: "demenagements-complets" },
  { label: "Transport de bateaux", slug: "transport-bateaux" },
  { label: "Meubles & Électroménager", slug: "meubles-electromenager" },
  { label: "Produits industriels", slug: "produits-industriels" },
  { label: "Bâtiment & Construction", slug: "batiment-construction" },
  { label: "Animaux & Élevage", slug: "animaux-elevage" },
  { label: "Palettes & Marchandises", slug: "palettes-marchandises" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar — masqué sur mobile */}
      <div className="hidden sm:block bg-[#003DA5] text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>🇫🇷 Plateforme française de transport et déménagement</span>
          <div className="flex items-center gap-4">
            <Link href="/espace-transporteur" className="hover:underline flex items-center gap-1">
              <Truck size={14} />
              Espace transporteur
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-klubbb-dark.png"
            alt="Klubbb"
            width={160}
            height={60}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/comment-ca-marche"
            className="text-gray-700 hover:text-[#003DA5] font-medium transition-colors"
          >
            Comment ça marche
          </Link>
          <Link
            href="/avis"
            className="text-gray-700 hover:text-[#003DA5] font-medium transition-colors"
          >
            Avis & Témoignages
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#003DA5] font-medium transition-colors"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Que voulez-vous transporter ?
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-64 border border-gray-100"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/transport/${cat.slug}`}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#003DA5] transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/faq"
            className="text-gray-700 hover:text-[#003DA5] font-medium transition-colors"
          >
            FAQ & Support
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/connexion"
            className="flex items-center gap-2 text-gray-700 hover:text-[#003DA5] font-medium transition-colors"
          >
            <User size={18} />
            Mon compte
          </Link>
          <Link href="/publier-demande" className="btn-primary text-sm">
            Publier une demande
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          <Link href="/comment-ca-marche" className="text-gray-700 font-medium py-2 border-b border-gray-100">
            Comment ça marche
          </Link>
          <Link href="/avis" className="text-gray-700 font-medium py-2 border-b border-gray-100">
            Avis & Témoignages
          </Link>
          <Link href="/faq" className="text-gray-700 font-medium py-2 border-b border-gray-100">
            FAQ & Support
          </Link>
          <Link href="/connexion" className="text-gray-700 font-medium py-2 border-b border-gray-100">
            Mon compte
          </Link>
          <Link href="/publier-demande" className="btn-primary text-center justify-center mt-2">
            Publier une demande
          </Link>
        </div>
      )}
    </header>
  );
}
