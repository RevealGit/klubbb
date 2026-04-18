import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Transport de voitures", href: "/transport/transport-voitures" },
  { label: "Transport de motos", href: "/transport/transport-motos" },
  { label: "Déménagements complets", href: "/transport/demenagements-complets" },
  { label: "Transport de bateaux", href: "/transport/transport-bateaux" },
  { label: "Meubles & Électroménager", href: "/transport/meubles-electromenager" },
  { label: "Produits industriels", href: "/transport/produits-industriels" },
  { label: "Bâtiment & Construction", href: "/transport/batiment-construction" },
  { label: "Animaux & Élevage", href: "/transport/animaux-elevage" },
  { label: "Palettes & Marchandises", href: "/transport/palettes-marchandises" },
];

const company = [
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Qui sommes-nous", href: "/a-propos" },
  { label: "Avis clients", href: "/avis" },
  { label: "Blog", href: "/blog" },
  { label: "Espace transporteur", href: "/espace-transporteur" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "FAQ & Support", href: "/faq" },
  { label: "Conditions générales", href: "/cgu" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-klubbb-light.png"
                alt="Klubbb"
                width={160}
                height={60}
                className="object-contain h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Klubbb est la plateforme en ligne qui vous permet d&apos;envoyer des objets encombrants
              partout en France et en Europe au meilleur prix. Plus de 156 000 clients satisfaits.
            </p>
            {/* Contact */}
            <div className="space-y-3 text-sm">
              <a href="tel:+33756839091" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={14} />
                07 56 83 90 91
              </a>
              <a href="mailto:contact@klubbb.fr" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={14} />
                contact@klubbb.fr
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                France
              </span>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-[#003DA5] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5">Nos services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5">La société</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-5">Informations légales</h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Klubbb. Tous droits réservés. Développé avec fierté en France 🇫🇷</p>
          <p>Économisez jusqu&apos;à 80% sur vos transports avec Klubbb</p>
        </div>
      </div>
    </footer>
  );
}
