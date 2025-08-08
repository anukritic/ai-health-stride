import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Users } from "lucide-react";

const events = [
  {
    title: "Webinar #1",
    subtitle: "AI-Powered Clinical Documentation: Getting Started",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    attendees: "250+ registered",
  },
  {
    title: "Webinar #2", 
    subtitle: "Streamlining Healthcare Workflows with AI Agents",
    date: "March 22, 2024",
    time: "3:00 PM EST",
    attendees: "180+ registered",
  },
  {
    title: "Webinar #3",
    subtitle: "Data Security & Compliance in Healthcare AI",
    date: "March 29, 2024", 
    time: "1:00 PM EST",
    attendees: "320+ registered",
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-primary-light/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Learn from the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our upcoming webinars to discover how AI can revolutionize your healthcare practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="bg-white/90 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-hover transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-primary">
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {event.subtitle}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-hero hover:shadow-hover transition-all duration-300"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;