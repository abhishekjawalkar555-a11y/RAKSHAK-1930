import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#safety-tips", label: "Safety Tips" },
  { href: "#features", label: "Features" },
  { href: "#emergency", label: "Emergency" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 text-senior-lg font-bold text-primary">
          <Shield className="h-7 w-7 text-secondary" />
          Rakshak 1930
        </a>
        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-senior-base font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:1930" className="hidden rounded-full bg-accent px-6 py-2.5 text-senior-base font-semibold text-accent-foreground shadow transition-all hover:bg-orange-hover md:inline-flex">
          Call 1930
        </a>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <ul className="space-y-3 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-senior-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:1930" className="mt-4 block rounded-full bg-accent px-6 py-3 text-center text-senior-base font-semibold text-accent-foreground shadow">
            Call 1930
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
