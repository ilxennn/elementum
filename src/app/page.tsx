import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import OfferSection from "@/components/OfferSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <div>
        <img
            src="/svg/redline-top.svg"
            alt=""
            className="absolute mx-0 right-[-40px] top-400 w-[1300px] z-0"
          />
      </div>
      <Services />
      <div>
        <img
            src="/images/blur.png"
            alt=""
            className="absolute mx-0 translate-x-4/4 top-300 w-[500px] z-0"
          />
      </div>
      <img
            src="/svg/triangle.svg"
            alt=""
            className="absolute left-115 top-560 w-[180px] z-20"
          />
      <img
            src="/svg/redline-bottom.svg"
            alt=""
            className="absolute mx-0 right-[-40px] top-590 w-[750px] z-0"
          />
      <OfferSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}