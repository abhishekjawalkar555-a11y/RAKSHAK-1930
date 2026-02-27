import { Phone } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-senior-3xl font-bold leading-tight text-primary md:text-senior-4xl">
              Stay Safe from Digital Arrest Scams
            </h1>
            <p className="mb-8 text-senior-lg text-muted-foreground md:text-senior-xl">
              Protecting Senior Citizens from Cyber Fraud
            </p>
            <a
              href="tel:1930"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-senior-lg font-semibold text-accent-foreground shadow-lg transition-all hover:bg-orange-hover hover:shadow-xl"
            >
              <Phone className="h-6 w-6" />
              Call 1930 Helpline
            </a>
          </div>
          <div className="flex-1">
            <img
              src={heroIllustration}
              alt="Elderly couple safely using a smartphone with a security shield in the background"
              className="mx-auto w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
