import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, Mic, Database } from "lucide-react";

const useCases = [
  {
    title: "Discharge Summary Automation with AI Agents",
    description: "Streamline patient discharge processes with intelligent automation that generates comprehensive summaries from clinical data.",
    icon: FileText,
  },
  {
    title: "Fast-track Clinical Trials with AI Agents",
    description: "Accelerate clinical research with AI-powered data analysis and automated documentation for faster trial completion.",
    icon: Clock,
  },
  {
    title: "Digitise OPD Consultations with Voice Dictation",
    description: "Transform outpatient consultations with advanced voice recognition technology for accurate, real-time documentation.",
    icon: Mic,
  },
  {
    title: "Automating Health Registries with AI Agents",
    description: "Efficiently manage and update health registries with intelligent automation that ensures accuracy and compliance.",
    icon: Database,
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI Solutions for Modern Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how our custom AI agents transform healthcare workflows and improve patient outcomes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;