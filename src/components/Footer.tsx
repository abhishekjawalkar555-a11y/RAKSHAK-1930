import { Shield, Mail, Phone, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12 text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2 text-senior-lg font-bold">
            <Shield className="h-7 w-7 text-accent" />
            Rakshak 1930
          </div>
          <p className="text-senior-base opacity-80">
            A cyber safety initiative to protect senior citizens from digital arrest scams and online fraud.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-senior-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-senior-base opacity-80">
            <li><a href="#about" className="transition-opacity hover:opacity-100">About the Project</a></li>
            <li><a href="#safety-tips" className="transition-opacity hover:opacity-100">Safety Tips</a></li>
            <li><a href="#features" className="transition-opacity hover:opacity-100">Features</a></li>
            <li><a href="#" className="transition-opacity hover:opacity-100">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-senior-lg font-semibold">Contact</h4>
          <ul className="space-y-3 text-senior-base opacity-80">
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" /> 1930 (Toll Free)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" /> support@rakshak1930.in
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent" />
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-100">
                cybercrime.gov.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
        © 2026 Rakshak 1930. All rights reserved. A Cyber Safety Initiative for Senior Citizens.
      </div>
    </div>
  </footer>
);

export default Footer;
