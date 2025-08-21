import { Shield, Lock, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const safetyFeatures = [
  {
    title: "Foster never trains on your documents or patient data",
    icon: Shield,
  },
  {
    title: "Your confidential information remains private and protected",
    icon: Lock,
  },
  {
    title: "Data encryption at rest and in transit",
    icon: Key,
  },
];

const DataSafetySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Data is{" "}
            <span className="text-primary">
              Completely Secure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We prioritize the highest standards of data protection and privacy for healthcare organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="text-center p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-hover group"
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full border-2 border-primary bg-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 border border-primary/20 shadow-card">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground">
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSafetySection;