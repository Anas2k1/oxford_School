import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { CheckCircle2, Download, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Oxford Education School" },
      { name: "description", content: "Admission requirements, procedure, fees structure and important dates." },
      { property: "og:title", content: "Admissions — Oxford Education School" },
      { property: "og:description", content: "Applications for the 2026 academic year are now open." },
    ],
  }),
  component: Admissions,
});

const STEPS = [
  "Submit the admission form online or at the school office.",
  "Sit for an age-appropriate written assessment.",
  "Attend a brief interview with the admissions panel.",
  "Receive offer letter within 7 working days.",
  "Complete enrolment by paying the admission fee.",
];

const FEES = [
  { level: "Early Years", admission: "৳ 25,000", monthly: "৳ 7,500" },
  { level: "Primary (1–5)", admission: "৳ 30,000", monthly: "৳ 9,000" },
  { level: "Junior Secondary (6–8)", admission: "৳ 35,000", monthly: "৳ 10,500" },
  { level: "Secondary (9–10)", admission: "৳ 40,000", monthly: "৳ 12,000" },
  { level: "Higher Secondary (11–12)", admission: "৳ 45,000", monthly: "৳ 14,000" },
];

const DATES = [
  { d: "Jun 1, 2026", e: "Online applications open" },
  { d: "Jul 15, 2026", e: "Application deadline" },
  { d: "Aug 1–10, 2026", e: "Admission tests & interviews" },
  { d: "Aug 25, 2026", e: "Offer letters issued" },
  { d: "Sep 10, 2026", e: "Enrolment deadline" },
];

function Admissions() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Admissions 2026"
        title="Join a school that takes your child seriously."
        subtitle="We welcome applications from families who share our belief that education is about more than examinations."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="gold-rule font-display text-3xl text-primary">Requirements</h2>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {[
                "Completed application form (online or printed)",
                "Birth certificate / National ID copy of the student",
                "Last two years of academic transcripts (Grade 1+)",
                "Two recent passport-size photographs",
                "Parent / guardian National ID copy",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="gold-rule mt-12 font-display text-3xl text-primary">Procedure</h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s} className="flex gap-4 rounded-lg border border-border bg-background p-5 shadow-card">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground">{i + 1}</span>
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
                Enquire now <ArrowRight size={16} />
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                <Download size={16} /> Admission form (PDF)
              </a>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="gold-rule font-display text-2xl text-primary">Important dates</h3>
              <ul className="mt-5 space-y-3">
                {DATES.map((d) => (
                  <li key={d.e} className="flex items-start gap-3 rounded-md border border-border bg-cream p-4">
                    <Calendar className="mt-0.5 text-gold" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-primary">{d.d}</p>
                      <p className="text-sm text-muted-foreground">{d.e}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page">
          <h2 className="gold-rule font-display text-3xl text-primary">Fees structure</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-background shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-display font-medium">Level</th>
                  <th className="px-6 py-4 text-left font-display font-medium">Admission (one-time)</th>
                  <th className="px-6 py-4 text-left font-display font-medium">Monthly tuition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {FEES.map((f) => (
                  <tr key={f.level} className="hover:bg-cream">
                    <td className="px-6 py-4 font-medium text-primary">{f.level}</td>
                    <td className="px-6 py-4 text-foreground/80">{f.admission}</td>
                    <td className="px-6 py-4 text-foreground/80">{f.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">All amounts in Bangladeshi Taka. Sibling and need-based scholarships available.</p>
        </div>
      </section>
    </PageShell>
  );
}
