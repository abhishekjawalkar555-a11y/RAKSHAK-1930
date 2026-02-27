import { Phone, ExternalLink } from "lucide-react";

const EmergencySection = () => (
  <section id="emergency" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-accent bg-card p-10 text-center shadow-lg md:p-14">
        <h2 className="mb-4 text-senior-2xl font-bold text-primary md:text-senior-3xl">
          Report Cyber Crime Immediately
        </h2>
        <p className="mb-8 text-senior-base text-muted-foreground">
          If you or someone you know has been targeted, act fast. Every minute counts.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:1930"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-senior-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-orange-hover hover:shadow-xl"
          >
            <Phone className="h-6 w-6" />
            Dial 1930
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-8 py-4 text-senior-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            cybercrime.gov.in
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EmergencySection;
