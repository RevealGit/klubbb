const steps = [
  { emoji: "📋", title: "Publiez une demande" },
  { emoji: "💬", title: "Recevez des devis" },
  { emoji: "🛒", title: "Choisissez une offre" },
  { emoji: "😊", title: "Profitez du transport" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Comment ça marche ?</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              <div className="w-[60px] h-[60px] bg-[#f0f4ff] rounded-xl flex items-center justify-center text-3xl">
                {step.emoji}
              </div>
              <p className="font-semibold text-gray-800 text-sm md:text-base">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
