import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Building2, Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oxford Education School" },
      { name: "description", content: "Our history, mission, vision, leadership, and achievements." },
      { property: "og:title", content: "About Oxford Education School" },
      { property: "og:description", content: "Forty years of academic excellence and character formation." },
    ],
  }),
  component: About,
});

const STATS = [
  { n: "40+", l: "Years of service" },
  { n: "1,800", l: "Students" },
  { n: "120", l: "Faculty members" },
  { n: "98%", l: "Board pass rate" },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our story"
        title="Forty years of teaching, learning and growing together."
        subtitle="From a single classroom in 1985 to a campus of 1,800 students today — our purpose has remained the same."
      />

      <section className="container-page py-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div className="prose prose-lg max-w-none text-foreground/85">
            <h2 className="gold-rule font-display text-3xl text-primary">A brief history</h2>
            <p className="mt-6">
              Oxford Education School was founded in 1985 by a small group of educators
              who believed that a great school could be built around three simple ideas:
              that every child can learn deeply, that character matters as much as competence,
              and that a school should be a community before it is an institution.
            </p>
            <p className="mt-4">
              Four decades later, more than 12,000 alumni have walked through our gates and into
              universities and careers across the world. Our classrooms, science labs, library,
              auditorium and playing fields have grown — but the original spirit has not changed.
            </p>

            <h2 className="gold-rule mt-12 font-display text-3xl text-primary">Founder's message</h2>
            <p className="mt-6">
              "When we opened our first classroom in Dhanmondi with forty children and four teachers,
              we did not imagine the school it would become. What we did imagine — and what we still
              cherish — is a place where young people are taken seriously, where teachers are trusted
              to teach, and where families feel at home."
            </p>
            <p className="mt-2 font-display text-primary">— Late Prof. M. K. Rahman, Founder</p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-cream p-6">
              <Target className="text-gold" size={22} />
              <h3 className="mt-3 font-display text-xl text-primary">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To educate young people of independent mind and generous spirit, prepared to
                contribute to their communities and lead lives of meaning.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-cream p-6">
              <Eye className="text-gold" size={22} />
              <h3 className="mt-3 font-display text-xl text-primary">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To be a school in which scholarship, character and community are inseparable —
                a place valued for its standards and its kindness in equal measure.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-cream p-6">
              <Award className="text-gold" size={22} />
              <h3 className="mt-3 font-display text-xl text-primary">Achievements</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>National Education Award, 2022</li>
                <li>Top 10 secondary schools, Dhaka Board, 5 yrs running</li>
                <li>3 national olympiad medallists (2024)</li>
                <li>ISO 21001:2018 certified</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl text-gold">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="gold-rule font-display text-3xl text-primary">Infrastructure</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Modern science & computing laboratories",
            "30,000-volume library and digital archive",
            "500-seat auditorium and performing arts wing",
            "Indoor sports complex and outdoor playing fields",
            "Medical room with full-time school nurse",
            "Safe, monitored campus with CCTV coverage",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-lg border border-border bg-background p-5 shadow-card">
              <Building2 className="mt-0.5 shrink-0 text-gold" size={20} />
              <p className="text-sm text-foreground/80">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
