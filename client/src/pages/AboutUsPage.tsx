import dragonfly from "../assets/dragonfly.svg";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-[#D3F1DF]">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          alt="dragonfly"
          src={dragonfly}
          className="h-full w-full object-cover opacity-8"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#85A98F] opacity-50"
      />

      <div className="relative mx-auto max-w-2xl py-8 text-center">
        <h2 className="text-xl tracking-tight font-bold text-white sm:text-3xl">
          About Us
        </h2>
        <div className="mt-8 text-pretty text-center text-lg font-bold text-white sm:text-xl/8">
          <p>
            We acknowledge the Gadigal clan of the Eora Nation as the
            traditional custodians of this land. Sovereignty was never ceded. It
            always was and always will be Aboriginal land. We pay our deep
            respects to Elders past, present and emerging. We support the Uluru
            Statement from the Heart and the need for a First Nations Voice
            enshrined in the Australian Constitution. We support reconciliation
            and remediation of the injustices of our colonial history.
          </p>
          <br />
          <p>
            We acknowledge the rights of every LGBQTI person to live without
            fear and violence. We support non-binary genders.
          </p>
          <br />
          <p>
            We deplore the breeding of animals in captivity for slaughter. We respect the rights of animals to live without pain and suffering inflicted by humans.
          </p>
        </div>
      </div>
    </div>
  );
}
