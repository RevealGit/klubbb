import Link from "next/link";

export default function Benefits() {
  return (
    <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Pourquoi utiliser Klubbb ?</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Gagnez du temps</h3>
            <p className="text-gray-600 leading-relaxed">
              Ne passez plus une seule minute au téléphone à négocier. Klubbb le fait pour vous et vous vous consacrez à ce qui compte vraiment.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Réduisez vos coûts</h3>
            <p className="text-gray-600 leading-relaxed">
              Choisissez immédiatement l&apos;offre la plus avantageuse et économisez jusqu&apos;à 80% par rapport au devis de n&apos;importe quelle entreprise de transport !
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Transportez en sécurité</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous sélectionnons uniquement des entreprises de transport fiables et vérifiées. Tranquille, votre marchandise voyage toujours assurée.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/comment-ca-marche" className="btn-outline">
            Découvrez comment fonctionne Klubbb
          </Link>
        </div>
      </div>
    </section>
  );
}
