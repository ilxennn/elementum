import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="relative inline-block">
            <img
              src="/svg/yellow-line.svg"
              alt=""
              className="absolute left-2 top-[50px] w-[265px] scale-y-0.9"
            />

            <h2 className="relative font-gerbil text-[45px] leading-[1.4]">
              Tomorrow should
              <br />
              be better than<span className="bg-[#D7EEDD] rounded-full px-4 mx-2">today</span>
            </h2>
          </div>

          <p className="mt-4 max-w-xl font-satoshi text-[19px]">
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only happens
            when you refuse to play things safe.
          </p>

          <button className="mt-4 flex items-center gap-8 font-satoshi text-lg font-medium">
            Read more
            <img
              src="/svg/arrow.svg"
              alt=""
              className="absolute left-55 top-[486px] w-[120px]"
            />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/svg/square.svg"
            alt=""
            className="absolute right-[-60px] top-9 w-[180px] z-0"
          />

          <div className="relative z-10 h-[475px] w-[475px] overflow-hidden rounded-full">
            <Image
              src="/images/meeting-1.png"
              alt="Meeting"
              width={450}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}