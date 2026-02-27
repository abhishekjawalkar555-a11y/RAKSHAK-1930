import { BrainCircuit, Phone, Users, Video } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Fraud Alert",
    desc: "Smart detection system that identifies and warns you about potential scam calls.",
  },
  {
    icon: Phone,
    title: "One Tap Emergency Call",
    desc: "Instantly connect to the 1930 helpline with a single tap during emergencies.",
  },
  {
    icon: Users,
    title: "Family Notification",
    desc: "Automatically alerts your family members when a suspicious call is detected.",
  },
  {
    icon: Video,
    title: "Scam Awareness Videos",
    desc: "Easy-to-understand video guides explaining common scam tactics and prevention.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-card py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-senior-2xl font-bold text-primary md:text-senior-3xl">
        Features of Rakshak 1930
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-senior-base text-muted-foreground">
        Designed to keep senior citizens safe with simple yet powerful tools.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="animate-fade-in-up rounded-xl border border-border bg-background p-8 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <f.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="mb-2 text-senior-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-senior-base text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
