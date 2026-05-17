import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl">Oxford Education School</h3>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Sapientia · Virtus · Veritas
          </p>
          <p className="mt-4 text-sm text-primary-foreground/70">
            A tradition of academic excellence and character formation since 1985.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/academics" className="hover:text-gold">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/notices" className="hover:text-gold">Notices</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> 24 College Avenue, Dhanmondi, Dhaka 1209</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +880 1700 000 000</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@oxfordedu.school</li>
          </ul>
          <p className="mt-4 text-xs text-primary-foreground/60">Emergency: +880 1700 999 999</p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-gold">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-gold/40 p-2 hover:bg-gold hover:text-gold-foreground"><Facebook size={16} /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-gold/40 p-2 hover:bg-gold hover:text-gold-foreground"><Youtube size={16} /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-gold/40 p-2 hover:bg-gold hover:text-gold-foreground"><Instagram size={16} /></a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">School hours: Sun–Thu, 8:00 AM – 3:30 PM</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Oxford Education School. All rights reserved.</p>
          <p>Privacy Policy · Anti-Bullying Policy · Careers</p>
        </div>
      </div>
    </footer>
  );
}
