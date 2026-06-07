import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
      <img
            src="/svg/triangle.svg"
            alt=""
            className="absolute left-110 top-550 w-[180px] z-20"
          />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}