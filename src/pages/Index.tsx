import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import DataSafetySection from "@/components/DataSafetySection";
import PerformanceSection from "@/components/PerformanceSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <section id="solutions">
          <UseCasesSection />
        </section>
        <section id="security">
          <DataSafetySection />
        </section>
        <section id="performance">
          <PerformanceSection />
        </section>
        <section id="events">
          <EventsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
