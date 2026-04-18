import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const categories: Record<string, { label: string; description: string; details: string[]; image: string }> = {
  "transport-voitures": {
    label: "Transport de voitures",
    description: "Confiez le transport de votre véhicule à des professionnels vérifiés. Particuliers, concessionnaires ou sociétés de location, nous gérons tous vos besoins en transport automobile.",
    details: ["Véhicules particuliers et de collection", "Transport sur plateau ou camion fermé", "Prise en charge à domicile possible", "Assurance incluse", "Suivi en temps réel"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=500&fit=crop",
  },
  "transport-motos": {
    label: "Transport de motos",
    description: "Transport sécurisé de motos, scooters et quads partout en France. Nos transporteurs spécialisés prennent soin de votre deux-roues.",
    details: ["Motos, scooters, quads et custom", "Sangles de fixation professionnelles", "Transport en véhicule fermé disponible", "Assurance incluse", "Devis gratuit en 24h"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop",
  },
  "demenagements-complets": {
    label: "Déménagements complets",
    description: "Du déballage à la livraison, nos déménageurs professionnels s'occupent de tout. Déménagement d'appartement, de maison ou de bureau.",
    details: ["Emballage et déballage inclus", "Montage et démontage de meubles", "Protection des objets fragiles", "Assurance tous risques", "Devis personnalisé gratuit"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop",
  },
  "transport-bateaux": {
    label: "Transport de bateaux",
    description: "Transport de bateaux, voiliers, jet-skis et embarcations de plaisance par des spécialistes du transport maritime terrestre.",
    details: ["Bateaux jusqu'à 20 mètres", "Remorques spécialisées homologuées", "Expertise en transport exceptionnel", "Assurance valeur agréée", "Transport France et Europe"],
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=500&fit=crop",
  },
  "meubles-electromenager": {
    label: "Meubles & Électroménager",
    description: "Transport de meubles, électroménager et objets volumineux. Canapés, réfrigérateurs, pianos — on s'occupe de tout.",
    details: ["Objets encombrants et volumineux", "Emballage protection inclus", "Montage à destination possible", "Accès difficile pris en charge", "Assurance casse incluse"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=500&fit=crop",
  },
  "produits-industriels": {
    label: "Produits industriels",
    description: "Transport de machines, équipements industriels et matériel professionnel. Nos transporteurs disposent du matériel adapté.",
    details: ["Machines-outils et équipements lourds", "Chariots élévateurs disponibles", "Transport sous douane possible", "Délais express disponibles", "Traçabilité complète"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=500&fit=crop",
  },
  "batiment-construction": {
    label: "Bâtiment & Construction",
    description: "Transport de matériaux de construction, engins de chantier et équipements BTP partout en France.",
    details: ["Matériaux en vrac et palettisés", "Engins de chantier et nacelles", "Transport exceptionnel possible", "Bennes et camions bâchés", "Livraison chantier possible"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop",
  },
  "animaux-elevage": {
    label: "Animaux & Élevage",
    description: "Transport d'animaux domestiques et de bétail dans le respect du bien-être animal. Véhicules agréés et chauffeurs formés.",
    details: ["Animaux domestiques et de compagnie", "Bétail et animaux de ferme", "Véhicules agréés au transport animal", "Respect des normes bien-être animal", "Certificats sanitaires gérés"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=500&fit=crop",
  },
  "palettes-marchandises": {
    label: "Palettes & Marchandises",
    description: "Transport de palettes, colis volumineux, denrées alimentaires, instruments de musique, pneumatiques et tout type de marchandises.",
    details: ["Palettes et colis jusqu'à 5T", "Transport frigorifique disponible", "Instruments de musique", "Pneumatiques et pièces auto", "Enlèvement et livraison sur RDV"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=500&fit=crop",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) return { title: "Kategorie introuvable — Klubbb" };
  return {
    title: `${cat.label} — Devis gratuit | Klubbb`,
    description: cat.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categories).map(slug => ({ slug }));
}

export default async function TransportCategory({ params }: Props) {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero with image */}
        <section className="relative h-80 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003DA5]/90 to-[#003DA5]/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 text-white">
              <h1 className="text-4xl md:text-5xl font-black mb-3">{cat.label}</h1>
              <p className="text-lg text-blue-100 max-w-xl">{cat.description}</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Details */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce que comprend ce service</h2>
                <div className="space-y-3 mb-10">
                  {cat.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comment ça marche ?</h3>
                  <ol className="space-y-3 text-gray-500 text-sm">
                    <li className="flex gap-3"><span className="font-bold text-[#003DA5]">1.</span> Publiez votre demande gratuitement en 5 minutes</li>
                    <li className="flex gap-3"><span className="font-bold text-[#003DA5]">2.</span> Recevez plusieurs devis de transporteurs vérifiés sous 24h</li>
                    <li className="flex gap-3"><span className="font-bold text-[#003DA5]">3.</span> Choisissez la meilleure offre et réservez en ligne</li>
                    <li className="flex gap-3"><span className="font-bold text-[#003DA5]">4.</span> Votre transport est effectué et votre bien livré</li>
                  </ol>
                </div>
              </div>

              {/* CTA Card */}
              <div>
                <div className="bg-[#003DA5] text-white rounded-2xl p-7 sticky top-24">
                  <h3 className="text-xl font-bold mb-3">Devis gratuit</h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Publiez votre demande et recevez jusqu&apos;à 10 devis de transporteurs vérifiés.
                  </p>
                  <Link
                    href={`/publier-demande?categorie=${slug}`}
                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-6 py-4 rounded-xl w-full flex items-center justify-center gap-2 transition-colors"
                  >
                    Obtenir des devis
                    <ArrowRight size={18} />
                  </Link>
                  <div className="mt-5 space-y-2 text-sm text-blue-200">
                    <p className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> 100% gratuit</p>
                    <p className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Sans engagement</p>
                    <p className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400" /> Transporteurs vérifiés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
