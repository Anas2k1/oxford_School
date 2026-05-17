import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Search, Calculator } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Oxford Education School" },
      { name: "description", content: "Search results by roll number, view marksheet, and calculate GPA." },
      { property: "og:title", content: "Results" },
      { property: "og:description", content: "Examination results portal." },
    ],
  }),
  component: Results,
});

const EXAMS = [
  { id: "midterm-2026", label: "Mid-Term Examination — 2026" },
  { id: "annual-2025", label: "Annual Examination — 2025" },
  { id: "preboard-2025", label: "Pre-Board — 2025" },
];

function Results() {
  const [examId, setExamId] = useState("");
  const [roll, setRoll] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Examinations"
        title="Results portal."
        subtitle="Look up published results by roll number, or use the GPA reference below."
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-8 shadow-card">
            <h2 className="font-display text-2xl text-primary">Find result by roll number</h2>

            <form onSubmit={onSearch} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-primary">Examination</label>
                <select
                  value={examId}
                  onChange={(e) => setExamId(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="">Select an exam…</option>
                  {EXAMS.map((e) => (
                    <option key={e.id} value={e.id}>{e.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-primary">Roll number</label>
                <input
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="e.g. 240145"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
                <Search size={16} /> Search result
              </button>
            </form>

            {submitted && (
              <p className="mt-6 rounded-md bg-cream p-4 text-sm text-muted-foreground">
                Result lookup is a demo on this page. Published results will be available from the school office.
              </p>
            )}
          </div>

          <div className="rounded-lg border border-border bg-cream p-8">
            <div className="flex items-center gap-2 text-gold">
              <Calculator size={20} />
              <span className="text-xs font-semibold uppercase tracking-widest">GPA Reference</span>
            </div>
            <h2 className="mt-2 font-display text-2xl text-primary">Grading scale</h2>
            <p className="mt-2 text-sm text-muted-foreground">National grading scale used by the school.</p>
            <table className="mt-5 w-full overflow-hidden rounded-md border border-border bg-background text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left font-display font-medium">Marks</th>
                  <th className="p-3 text-left font-display font-medium">Grade</th>
                  <th className="p-3 text-left font-display font-medium">GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[["80–100", "A+", "5.00"], ["70–79", "A", "4.00"], ["60–69", "A−", "3.50"], ["50–59", "B", "3.00"], ["40–49", "C", "2.00"], ["33–39", "D", "1.00"], ["0–32", "F", "0.00"]].map((r) => (
                  <tr key={r[1]}>
                    <td className="p-3 text-foreground/80">{r[0]}</td>
                    <td className="p-3 font-semibold text-primary">{r[1]}</td>
                    <td className="p-3 text-foreground/80">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
