
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyUpadeshaSection from "../components/WhyUpadeshaSection";
import VideoReviewsSection from "../components/VideoReviewsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUpadeshaSection />
      <VideoReviewsSection />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
