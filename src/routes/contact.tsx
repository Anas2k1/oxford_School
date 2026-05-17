import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oxford Education School" },
      { name: "description", content: "Address, phone, email, map and contact form." },
      { property: "og:title", content: "Contact Oxford Education School" },
      { property: "og:description", content: "We would love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in touch"
        title="We would love to hear from you."
        subtitle="Whether you're considering applying or already a member of our community — please get in touch."
      />

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", body: "24 College Avenue, Dhanmondi, Dhaka 1209, Bangladesh" },
              { icon: Phone, title: "Phone", body: "+880 1700 000 000  ·  +880 2 9123456" },
              { icon: Mail, title: "Email", body: "info@oxfordedu.school  ·  admissions@oxfordedu.school" },
              { icon: Clock, title: "Office hours", body: "Sunday – Thursday, 8:00 AM – 4:00 PM" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-lg border border-border bg-background p-5 shadow-card">
                <c.icon className="mt-1 text-gold" size={20} />
                <div>
                  <p className="font-display text-lg text-primary">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-lg border border-border shadow-card">
              <iframe
                title="School location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=90.370%2C23.740%2C90.382%2C23.752&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5 rounded-lg border border-border bg-cream p-8 shadow-card">
            <h2 className="font-display text-2xl text-primary">Send us a message</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Phone" placeholder="+880 …" />
            <Field label="Subject" placeholder="Admissions enquiry" />
            <div>
              <label className="text-sm font-medium text-primary">Message</label>
              <textarea
                rows={5}
                className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="How can we help?"
              />
            </div>
            <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
              Send message
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-primary">{label}</label>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
