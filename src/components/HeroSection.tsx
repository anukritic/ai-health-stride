import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healthcare-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healthcare AI Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Improve productivity and create{" "}
          <span className="text-secondary">
            better patient experiences
          </span>{" "}
          with AI
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Transform healthcare operations with custom AI solutions designed for 
          digitization and operational efficiency through intelligent documentation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-primary-light hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          >
            View Solutions
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;