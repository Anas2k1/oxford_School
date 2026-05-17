import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Teachers & Staff — Oxford Education School" },
      { name: "description", content: "Meet the faculty and staff who guide our students every day." },
      { property: "og:title", content: "Teachers & Staff" },
      { property: "og:description", content: "Department-wise faculty listing." },
    ],
  }),
  component: Teachers,
});

const DEPARTMENTS = [
  {
    name: "Languages",
    staff: [
      { n: "Ms. Sabrina Haque", q: "M.A. English Literature, Dhaka University", e: "s.haque@oxfordedu.school", r: "Head of English" },
      { n: "Mr. Tanvir Alam", q: "M.A. Bangla, Jahangirnagar University", e: "t.alam@oxfordedu.school", r: "Bangla Department" },
    ],
  },
  {
    name: "Mathematics & Sciences",
    staff: [
      { n: "Dr. Imran Khan", q: "Ph.D. Physics, BUET", e: "i.khan@oxfordedu.school", r: "Head of Sciences" },
      { n: "Ms. Nadia Rahman", q: "M.Sc. Mathematics, DU", e: "n.rahman@oxfordedu.school", r: "Mathematics" },
      { n: "Mr. Faisal Chowdhury", q: "M.Sc. Chemistry, BUET", e: "f.c@oxfordedu.school", r: "Chemistry" },
    ],
  },
  {
    name: "Humanities & Social Studies",
    staff: [
      { n: "Ms. Rumana Begum", q: "M.A. History, DU", e: "r.begum@oxfordedu.school", r: "Head of Humanities" },
      { n: "Mr. Arif Hossain", q: "M.A. Economics, NSU", e: "a.hossain@oxfordedu.school", r: "Economics" },
    ],
  },
  {
    name: "Arts, Music & PE",
    staff: [
      { n: "Ms. Lubna Karim", q: "B.F.A. Charukola, DU", e: "l.karim@oxfordedu.school", r: "Visual Arts" },
      { n: "Mr. Shamim Reza", q: "Dip. Physical Education", e: "s.reza@oxfordedu.school", r: "Athletics Director" },
    ],
  },
];

function Teachers() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our People"
        title="A faculty chosen for scholarship and for care."
        subtitle="120 teachers — most with postgraduate degrees and a decade or more in the classroom."
      />

      <section className="container-page py-20">
        {DEPARTMENTS.map((d) => (
          <div key={d.name} className="mt-12 first:mt-0">
            <h2 className="gold-rule font-display text-2xl text-primary">{d.name}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {d.staff.map((s) => (
                <div key={s.n} className="rounded-lg border border-border bg-background p-6 shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream font-display text-xl text-primary">
                    {s.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-primary">{s.n}</h3>
                  <p className="text-xs uppercase tracking-wider text-gold">{s.r}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.q}</p>
                  <a href={`mailto:${s.e}`} className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:text-gold">
                    <Mail size={12} /> {s.e}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
