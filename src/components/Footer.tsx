import fosterLogo from "@/assets/foster-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={fosterLogo} 
                alt="Foster Health AI" 
                className="h-10 w-auto brightness-0 invert"
              />
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

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-white/80">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">
            © 2024 Foster AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-white/60">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;