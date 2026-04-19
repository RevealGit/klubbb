import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    slug: "transport-voitures",
    label: "Transport de voitures",
    subtitle: "Livraison ponctuelle",
    description: "Pour particuliers, concessionnaires, loueurs et garages.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=480&h=480&fit=crop",
  },
  {
    slug: "transport-motos",
    label: "Transport de motos",
    subtitle: "En vacances ou en rassemblement",
    description: "On vous aide à emmener votre passion à deux roues en toute sécurité.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=480&fit=crop",
  },
  {
    slug: "demenagements-complets",
    label: "Déménagements complets",
    subtitle: "De l'emballage au transport",
    description: "Petits et grands déménagements en France et en Europe.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=480&h=480&fit=crop",
  },
  {
    slug: "transport-bateaux",
    label: "Transport de bateaux",
    subtitle: "Plaisanciers et chantiers navals",
    description: "Voiliers et bateaux à moteur, des petits formats aux transports spéciaux.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=480&h=480&fit=crop",
  },
  {
    slug: "meubles-electromenager",
    label: "Meubles & Électroménager",
    subtitle: "Marchandise traitée avec soin",
    description: "Confiez-nous vos meubles et appareils en toute tranquillité.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=480&h=480&fit=crop",
  },
  {
    slug: "produits-industriels",
    label: "Produits industriels",
    subtitle: "Transport en toute sécurité",
    description: "Produits dangereux ou non, finis et semi-finis, de toute nature.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=480&h=480&fit=crop",
  },
  {
    slug: "batiment-construction",
    label: "Bâtiment & Construction",
    subtitle: "Attention maximale en chantier",
    description: "Matériaux de construction transportés avec prudence jusqu'à destination.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&h=480&fit=crop",
  },
  {
    slug: "animaux-elevage",
    label: "Animaux & Élevage",
    subtitle: "Transport dans le respect",
    description: "Bétail, animaux d'élevage, animaux domestiques et de compagnie.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=480&h=480&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Que souhaitez-vous transporter ?</h2>
          <p className="section-subtitle">
            Choisissez la catégorie de produits à transporter et indiquez les lieux et dates de chargement et de livraison.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/transport/${cat.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-gray-900 group-hover:text-[#003DA5] transition-colors mb-0.5">
                  {cat.label}
                </h3>
                <p className="text-xs text-gray-400 italic mb-1">{cat.subtitle}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/transport" className="btn-outline">
            Toutes les catégories
          </Link>
        </div>
      </div>
    </section>
  );
}
