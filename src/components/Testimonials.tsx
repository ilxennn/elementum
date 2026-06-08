import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative mx-10 py-15 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="relative text-center">

          <img
            src="/svg/yellow-line.svg"
            alt=""
            className="absolute left-180 top-[100px] w-[325px] -translate-x-1/2 z-0"
          />

          <h2 className="font-gerbil text-[45px] leading-[1.2] z-10 relative">
            <span className="rounded-full bg-[#D7EEDD] px-3">
              What
            </span>{" "}
            our customer
            <br />
            says About Us
          </h2>
        </div>

        {/* Floating Images Left */}
        <img
          src="/images/person-1.png"
          alt=""
          className="absolute left-25 top-0 w-[100px] rounded-full"
        />

        <img
          src="/images/person-2.png"
          alt=""
          className="absolute left-8 top-[155px] w-[65px] rounded-full"
        />

        <img
          src="/images/person-3.png"
          alt=""
          className="absolute left-32 top-[250px] w-[175px] rounded-full"
        />

        <img
          src="/images/person-4.png"
          alt=""
          className="absolute left-0 top-[450px] w-[95px] rounded-full"
        />

        <img
          src="/images/person-5.png"
          alt=""
          className="absolute right-15 top-0 w-[120px] rounded-full"
        />

        <img
          src="/images/person-6.png"
          alt=""
          className="absolute right-60 top-[100px] w-[80px] rounded-full"
        />

        <img
          src="/images/person-7.png"
          alt=""
          className="absolute right-50 top-[225px] w-[95px] rounded-full"
        />

        <img
          src="/images/person-8.png"
          alt=""
          className="absolute right-0 top-[325px] w-[245px] rounded-full"
        />

        {/* Testimonial Card */}
        <div className="mx-auto mt-12 max-w-[700px] rounded-[40px] bg-[#F3FAF5] px-12 py-10">

          <div className="relative">

            <span className="absolute left-0 top-0 text-[160px] leading-none text-gray-300 translate-x-[5px] -translate-y-[30px]">
              “
            </span>

            <p className="px-5 text-center font-satoshi text-[24px] leading-[1.6]">
              <span className="px-6"> </span>Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in
              traffic within days since its launch. They also had an
              impressive ability to use technologies that the company
              hadn't used, which have also proved to be easy to use and
              reliable.
            </p>

            <span className="absolute bottom-[-60px] right-10 text-[160px] leading-none text-gray-300 -translate-x-[40px] translate-y-[45px]">
              ”
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}