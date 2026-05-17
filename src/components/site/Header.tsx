import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import crest from "@/assets/crest.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/teachers", label: "Teachers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/notices", label: "Notices" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={crest} alt="Oxford Education School crest" className="h-12 w-12" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-primary">Oxford Education School</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-gold">Sapientia · Virtus · Veritas</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:[text-shadow:0_1px_0_var(--color-gold)]"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary"
          >
            Apply <ArrowRight size={14} />
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden rounded-md p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="py-2 text-sm font-medium text-foreground/80 data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
