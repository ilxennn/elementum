import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* Yellow SVG Line */}
          <img
            src="/svg/yellow-line.svg"
            alt=""
            className="absolute left-1/2 top-30 w-[450px] scale-y-[0.9] -translate-x-1/2"
          /><img
            src="/svg/Rectangle-green.svg"
            alt=""
            className="absolute left-110 top-63 w-[350px] -translate-x-1/2"
          /><img
            src="/svg/Rectangle-pink.svg"
            alt=""
            className="absolute left-198 top-36 w-[325px] scale-y-[1]"
          /><img
            src="/svg/semicircle.svg"
            alt=""
            className="absolute left-300 top-48 w-[100px] -translate-x-1/2"
          />


          <h1 className="relative z-10 font-gerbil mx-auto max-w-6xl py-10 text-center text-6xl leading-25 md:text-[80px]">
            The thinkers and
            <br />
            doers were changing
            <br />
            the{" "}
            <span >
              status
            </span>{" "}
            Quo with
          </h1>
        </div>

        <p className="text-[19px] mx-auto max-w-2xl text-center">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only happens
          when you refuse to play things safe.
        </p>
      </div>

      <div>
        <img
            src="/svg/black-squiggle.svg"
            alt=""
            className="absolute left-17 top-97 w-[74px] scale-y-[0.9] -translate-x-1/2"
          />
          <img
            src="/svg/red-squiggle.svg"
            alt=""
            className="absolute left-7 top-99 w-[58px] scale-y-[0.9] -translate-x-1/2"
          />
      </div>

        <div className="flex w-max animate-marquee gap-8 mt-45">
          <img src="/images/image-hero.png" alt="" className="w-[1500px]" />
          <img src="/images/image-hero.png" alt="" className="w-[1500px]" />
          <img src="/images/image-hero.png" alt="" className="w-[1500px]" />
          <img src="/images/image-hero.png" alt="" className="w-[1500px]" />
        </div>

    </section>

  );
}