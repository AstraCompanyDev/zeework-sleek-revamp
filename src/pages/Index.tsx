import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import TalentSection from "@/components/TalentSection";
import GuaranteedSection from "@/components/GuaranteedSection";
import CategoriesSection from "@/components/CategoriesSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TalentSection />
        <GuaranteedSection />
        <CategoriesSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
