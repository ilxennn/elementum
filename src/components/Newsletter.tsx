export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#D7EEDD] py-28">

      <img
        src="/svg/redarrow1.svg"
        alt=""
        className="absolute top-0 w-[150px] translate-x-[615px]"
      />
      <img
        src="/svg/redarrow2.svg"
        alt=""
        className="absolute top-0 w-[150px] translate-x-[525px]"
      />

      <img
        src="/svg/semicircle.svg"
        alt=""
        className="absolute right-15 top-50 w-[150px] rotate-180"
      />

      <div className="mx-auto max-w-7xl text-center">

        <h2 className="font-gerbil text-[80px] leading-[1.15]">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-5 text-[20px]">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 rounded-full bg-black px-8 py-4 text-lg text-white">
          Subscribe Now
        </button>

      </div>
    </section>
  );
}