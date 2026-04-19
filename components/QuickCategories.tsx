import Link from "next/link";

const items = [
  { label: "Transport de voitures", href: "/transport/transport-voitures" },
  { label: "Transport de motos", href: "/transport/transport-motos" },
  { label: "Meubles & Électroménager", href: "/transport/meubles-electromenager" },
  { label: "Bâtiment & industrie", href: "/transport/batiment-construction" },
  { label: "Palettes", href: "/transport/palettes-marchandises" },
  { label: "Transport de bateaux", href: "/transport/transport-bateaux" },
  { label: "Déménagements complets", href: "/transport/demenagements-complets" },
  { label: "Pianos & instruments", href: "/transport/palettes-marchandises" },
  { label: "Animaux domestiques", href: "/transport/animaux-elevage" },
  { label: "Autres catégories...", href: "/transport" },
];

export default function QuickCategories() {
  return (
    <section className="py-5 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#003DA5] hover:underline font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
