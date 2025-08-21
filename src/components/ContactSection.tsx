import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", details: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch for{" "}
            <span className="text-primary">
              Your Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your healthcare operations with AI? Let's discuss your specific needs and create a custom solution.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-primary/10 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-7 h-7 border-2 border-primary rounded bg-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                Tell Us About Your Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    placeholder="Dr. John Smith"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    placeholder="john.smith@hospital.com"
                  />
                </div>
                
                
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-sm font-medium text-foreground">
                    Project Details *
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    required
                    rows={5}
                    value={formData.details}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                    placeholder="Tell us about your healthcare facility, current challenges, and what you'd like to achieve with AI solutions..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-3"
                    size="lg"
                  >
                    <div className="w-5 h-5 border border-white rounded bg-primary flex items-center justify-center">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-3"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/fosterhealthai', '_blank')}
                  >
                    <div className="w-5 h-5 border border-primary rounded bg-white flex items-center justify-center">
                      <Calendar className="w-3 h-3 text-primary" />
                    </div>
                    Schedule Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;