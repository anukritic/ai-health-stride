import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Foster</span>
                <span className="text-2xl font-light text-secondary">AI</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transforming healthcare through intelligent AI solutions that improve productivity and patient experiences.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-white/80">
              <li>Discharge Summary Automation</li>
              <li>Clinical Trials Enhancement</li>
              <li>Voice Dictation Systems</li>
              <li>Health Registry Automation</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@foster.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) FOSTER-AI</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">
            © 2024 Foster AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-white/60">HIPAA Compliant</span>
            <span className="text-white/60">SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;