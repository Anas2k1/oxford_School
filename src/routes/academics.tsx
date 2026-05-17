import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Download } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Oxford Education School" },
      { name: "description", content: "Classes, curriculum, subjects, examinations, and the academic calendar." },
      { property: "og:title", content: "Academics — Oxford Education School" },
      { property: "og:description", content: "A rigorous curriculum from Play Group through Grade 12." },
    ],
  }),
  component: Academics,
});

const LEVELS = [
  { name: "Early Years", grades: "Play Group – KG", desc: "Play-based learning, language, numeracy and motor skills." },
  { name: "Primary", grades: "Grades 1 – 5", desc: "Foundational literacy, numeracy, science, social studies, arts and PE." },
  { name: "Junior Secondary", grades: "Grades 6 – 8", desc: "Broad curriculum with introduction to lab science and a second language." },
  { name: "Secondary (SSC)", grades: "Grades 9 – 10", desc: "Science, Business Studies and Humanities streams; SSC preparation." },
  { name: "Higher Secondary (HSC)", grades: "Grades 11 – 12", desc: "HSC streams with university counselling and advanced electives." },
];

const SUBJECTS = ["English", "Bangla", "Mathematics", "Physics", "Chemistry", "Biology", "ICT", "Accounting", "Economics", "History", "Geography", "Religion & Moral Studies", "Physical Education", "Art & Music"];

const CALENDAR = [
  { term: "Term 1", dates: "Jan 5 – Apr 10" },
  { term: "Mid-term break", dates: "Apr 11 – Apr 20" },
  { term: "Term 2", dates: "Apr 21 – Aug 5" },
  { term: "Summer break", dates: "Aug 6 – Aug 25" },
  { term: "Term 3", dates: "Aug 26 – Dec 15" },
];

function Academics() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Academics"
        title="A rigorous, broad and humane curriculum."
        subtitle="From Play Group through Grade 12 — designed to develop competent thinkers, confident communicators, and caring citizens."
      />

      <section className="container-page py-20">
        <h2 className="gold-rule font-display text-3xl text-primary">Classes offered</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LEVELS.map((l) => (
            <div key={l.name} className="rounded-lg border border-border bg-background p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{l.grades}</p>
              <h3 className="mt-2 font-display text-2xl text-primary">{l.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="gold-rule font-display text-3xl text-primary">Subjects</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUBJECTS.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/80">{s}</span>
              ))}
            </div>

            <h3 className="mt-10 font-display text-xl text-primary">Examination system</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>· Continuous assessment across every term</li>
              <li>· Two formal exams per academic year</li>
              <li>· SSC (Grade 10) and HSC (Grade 12) board examinations</li>
              <li>· Detailed reports issued to parents each term</li>
            </ul>
          </div>

          <div>
            <h2 className="gold-rule font-display text-3xl text-primary">Academic calendar 2026</h2>
            <ul className="mt-6 divide-y divide-border rounded-lg border border-border bg-background">
              {CALENDAR.map((c) => (
                <li key={c.term} className="flex items-center justify-between p-4">
                  <span className="font-medium text-primary">{c.term}</span>
                  <span className="text-sm text-muted-foreground">{c.dates}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary"
            >
              <Download size={16} /> Download class routine (PDF)
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
