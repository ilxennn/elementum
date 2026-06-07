import Image from "next/image";

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-24">

        {/* Left Image */}
        <div className="relative">

          <img
            src="/svg/yellow-line-2.svg"
            alt=""
            className="absolute left-[-60px] top-20 w-[120px] z-0"
          />

          <div className="relative z-10 h-[475px] w-[475px] overflow-hidden rounded-full">
            <Image
              src="/images/meeting-2.png"
              alt="Team"
              width={475}
              height={475}
              className="h-full w-full object-cover"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className="max-w-2xl -translate-y-3">

          <div className="relative inline-block">
            <img
              src="/svg/yellow-line.svg"
              alt=""
              className="absolute left-[230px] top-[106px] w-[300px]"
            />

            <h2 className="relative font-gerbil text-[45px] leading-[1.3] ">
              <span className="rounded-full bg-[#D7EEDD] px-4 -left-3 relative">See</span>
                how we can
              <br />
              help you progress
            </h2>
          </div>

          <p className="mt-6 max-w-xl text-[19px]">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>

          <button className="mt-5 flex items-center gap-4 text-lg font-medium">
            Read more

            <img
              src="/svg/arrow.svg"
              alt=""
              className="w-[120px] translate-y-0.5"
            />
          </button>
        </div>

        <img
            src="/svg/triangle.svg"
            alt=""
            className="absolute left-[80px] top-5 w-[180px] z-0"
          />

      </div>
    </section>
  );
}