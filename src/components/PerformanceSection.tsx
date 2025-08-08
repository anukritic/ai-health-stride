import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Clock } from "lucide-react";

const performanceStats = [
  {
    stat: "99%",
    title: "accuracy in clinical note generation",
    icon: Award,
    color: "from-accent to-secondary",
  },
  {
    stat: "9.1/10",
    title: "meaningfulness assessed by independent clinicians",
    icon: TrendingUp,
    color: "from-primary to-secondary",
  },
  {
    stat: "80%",
    title: "reduction in documentation time per doctor",
    icon: Clock,
    color: "from-secondary to-accent",
  },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proven Results That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Healthcare
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI solutions deliver measurable improvements in efficiency, accuracy, and patient satisfaction
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {performanceStats.map((item, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-hover transition-all duration-300 group hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardContent className="text-center p-8 relative z-10">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {item.stat}
                </div>
                
                <h3 className="text-lg font-medium text-foreground leading-tight">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join hundreds of healthcare providers who trust our AI solutions to streamline their operations 
            and focus on what matters most — patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;