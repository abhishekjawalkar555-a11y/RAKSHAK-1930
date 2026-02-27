import { Shield, Phone, AlertTriangle } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "Fake Calls",
    desc: "Scammers call pretending to be police, CBI or bank officials and threaten you with a fake arrest warrant.",
  },
  {
    icon: AlertTriangle,
    title: "Fear Tactics",
    desc: "They create panic by saying your bank account or Aadhaar is linked to crime, pressuring you to act fast.",
  },
  {
    icon: Shield,
    title: "Money Theft",
    desc: "Under pressure, victims transfer money or share OTPs, leading to massive financial losses.",
  },
];

const AboutSection = () => (
  <section id="about" className="bg-card py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-senior-2xl font-bold text-primary md:text-senior-3xl">
        What is a Digital Arrest Scam?
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-senior-base text-muted-foreground">
        Fraudsters impersonate government officials over phone or video call, threatening fake legal action to steal your money.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="animate-fade-in-up rounded-xl border border-border bg-background p-8 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-light">
              <item.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="mb-2 text-senior-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-senior-base text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
