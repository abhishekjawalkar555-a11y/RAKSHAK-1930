import { CheckCircle } from "lucide-react";

const tips = [
  "Never share your OTP, PIN, or password with anyone on a call.",
  "Police or government officials never ask for money over the phone.",
  "Always verify the caller's identity before taking any action.",
  "Do not click on unknown links sent via SMS or WhatsApp.",
  "Inform a family member immediately if you receive a suspicious call.",
  "Report fraud calls to Cyber Crime Helpline 1930 right away.",
];

const SafetyTipsSection = () => (
  <section id="safety-tips" className="bg-teal-light py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-senior-2xl font-bold text-primary md:text-senior-3xl">
        Safety Tips for You
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-senior-base text-muted-foreground">
        Follow these simple steps to protect yourself from cyber fraud.
      </p>
      <div className="mx-auto max-w-2xl space-y-5">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="animate-fade-in-up flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm"
          >
            <CheckCircle className="mt-0.5 h-7 w-7 flex-shrink-0 text-secondary" />
            <p className="text-senior-base text-foreground">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SafetyTipsSection;
