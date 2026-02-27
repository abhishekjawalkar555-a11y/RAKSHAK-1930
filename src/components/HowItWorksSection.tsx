import { PhoneCall, ShieldAlert, Banknote } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: PhoneCall,
    title: "Fraud Call",
    desc: "You receive a call from someone claiming to be from the police, CBI, or a bank.",
  },
  {
    step: 2,
    icon: ShieldAlert,
    title: "Fake Threat",
    desc: "They threaten you with arrest, account freeze, or legal action to create panic.",
  },
  {
    step: 3,
    icon: Banknote,
    title: "Money Demand",
    desc: "Under pressure, they demand immediate money transfer or personal details like OTP.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-senior-2xl font-bold text-primary md:text-senior-3xl">
        How the Scam Works
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-senior-base text-muted-foreground">
        Understanding the pattern helps you stay protected.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="animate-fade-in-up relative rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-senior-lg font-bold text-accent-foreground shadow">
              {s.step}
            </span>
            <div className="mb-4 mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-senior-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-senior-base text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
