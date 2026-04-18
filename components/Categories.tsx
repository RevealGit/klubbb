import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    slug: "transport-voitures",
    label: "Transport de voitures",
    description: "Particuliers, concessionnaires, sociétés de location",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
  },
  {
    slug: "transport-motos",
    label: "Transport de motos",
    description: "Motos, scooters, quads et véhicules deux-roues",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    slug: "demenagements-complets",
    label: "Déménagements complets",
    description: "Du déballage à la livraison, on gère tout",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
  },
  {
    slug: "transport-bateaux",
    label: "Transport de bateaux",
    description: "Bateaux, jet-skis et embarcations de plaisance",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&h=300&fit=crop",
  },
  {
    slug: "meubles-electromenager",
    label: "Meubles & Électroménager",
    description: "Canapés, réfrigérateurs, pianos et objets volumineux",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
  },
  {
    slug: "produits-industriels",
    label: "Produits industriels",
    description: "Machines, équipements et matériel professionnel",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  },
  {
    slug: "batiment-construction",
    label: "Bâtiment & Construction",
    description: "Matériaux, engins et équipements de chantier",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    slug: "animaux-elevage",
    label: "Animaux & Élevage",
    description: "Transport d'animaux domestiques et de bétail",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
  },
  {
    slug: "palettes-marchandises",
    label: "Palettes & Marchandises",
    description: "Alimentation, instruments, pneus et petits colis",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Que souhaitez-vous transporter ?</h2>
          <p className="section-subtitle">
            Choisissez votre catégorie et recevez des devis gratuits en quelques minutes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/transport/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#003DA5] transition-colors mb-1">
                  {cat.label}
                </h3>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
