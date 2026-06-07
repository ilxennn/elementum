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
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}