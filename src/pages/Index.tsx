import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanFeatures from "@/components/LoanFeatures";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";

const Index = () => (
  <div className="min-h-screen pb-16 md:pb-0">
    <Navbar />
    <HeroSection />
    <TrustIndicators />
    <HowItWorks />
    <WhyChooseUs />
    <LoanFeatures />
    <Testimonials />
    <FAQSection />
    <div className="bg-[linear-gradient(180deg,_hsl(221_50%_20%)_0%,_hsl(218_48%_17%)_100%)]">
      <FinalCTA />
      <Footer />
    </div>
    <MobileStickyButton />
  </div>
);

export default Index;
