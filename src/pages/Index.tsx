import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SafetyTipsSection from "@/components/SafetyTipsSection";
import EmergencySection from "@/components/EmergencySection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <SafetyTipsSection />
    <EmergencySection />
    <FeaturesSection />
    <Footer />
  </div>
);

export default Index;
