import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Send, Calendar } from "lucide-react";
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your healthcare operations with AI? Let's discuss your specific needs and create a custom solution.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-primary/10 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-primary" />
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
                    className="bg-gradient-hero hover:shadow-hover transition-all duration-300 flex items-center gap-3"
                    size="lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-3"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/fosterhealthai', '_blank')}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Foster AI?</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Custom AI solutions tailored to your healthcare facility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>HIPAA compliant security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Proven track record with 99% accuracy rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>24/7 support and dedicated implementation team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="grid gap-6">
              <Card className="bg-white/90 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">hello@fosterhealthai.com</p>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;