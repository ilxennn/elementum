const offers = [
  {
    small: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    small: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function OfferSection() {
  return (
    <section className="relative py-50">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="relative mb-20">

          <img
            src="/svg/yellow-line.svg"
            alt=""
            className="absolute -left-4 top-[190px] w-[300px]"
          />

          <h2 className="font-gerbil text-[80px] leading-[1.3] z-10 relative">
            What we{" "} can
            <br />
            offer you!
          </h2>

          <img
            src="/svg/Rectangle-green.svg"
            alt=""
            className="absolute left-144 top-9 w-[210px] scale-y-140 rounded-e-full -translate-x-1/2"
          />
        </div>

        {/* Rows */}
        <div>
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-t border-gray-400 py-8 gap-x-12"
            >
              {/* Left Text */}
              <div className="w-[250px]">
                <p className="font-satoshi text-[23px] leading-relaxed">
                  {offer.small}
                </p>
              </div>

              {/* Main Title */}
              <div className="flex-1 px-12">
                <h3 className="font-gerbil text-[45px] leading-none z-10 relative">
                  {offer.title}
                </h3>
              </div>

              {/* Arrow */}
              <div>
                <img
                  src="/svg/arrow2.svg"
                  alt=""
                  className="w-[80px]"
                />
              </div>
            </div>
          ))}

          <div className="border-t border-gray-400" />
        </div>

        {/* Decorative Sticker */}
        <img
          src="/images/sticker.png"
          alt=""
          className="absolute bottom-77 right-[459px] w-[125px] z-0"
        />

      </div>
    </section>
  );
}