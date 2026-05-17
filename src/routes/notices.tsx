import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notice Board — Oxford Education School" },
      { name: "description", content: "Exam notices, holiday notices, results, events and circulars." },
      { property: "og:title", content: "Notice Board" },
      { property: "og:description", content: "Stay up to date with the latest from the school." },
    ],
  }),
  component: Notices,
});

const TAG_COLOR: Record<string, string> = {
  general: "border border-primary text-primary",
  academic: "bg-primary text-primary-foreground",
  event: "bg-gold text-gold-foreground",
  urgent: "bg-destructive text-destructive-foreground",
};

const NOTICES = [
  {
    category: "academic",
    audience: "Students",
    publish_date: "2026-05-12",
    title: "Mid-Term Examination schedule released for Grades 6–10",
    body: "The Mid-Term Examination schedule for Grades 6 to 10 has been published. Students are advised to collect the printed timetable from their class teachers and review it carefully.",
  },
  {
    category: "event",
    audience: "Everyone",
    publish_date: "2026-05-08",
    title: "Annual Science Fair — registration now open",
    body: "Registration for the Annual Science Fair is open until May 30. Teams of up to three students may submit a project proposal to their science teacher.",
  },
  {
    category: "general",
    audience: "Everyone",
    publish_date: "2026-05-02",
    title: "School closed on May 25 in observance of Eid-ul-Adha",
    body: "The school will remain closed on Monday, May 25. Regular classes will resume on Tuesday, May 26.",
  },
  {
    category: "academic",
    audience: "Parents",
    publish_date: "2026-04-28",
    title: "Grade 12 Pre-Board results published",
    body: "Pre-Board examination results for Grade 12 have been published. Parents may collect mark sheets from the academic office between 10:00 AM and 2:00 PM.",
  },
  {
    category: "urgent",
    audience: "Parents",
    publish_date: "2026-04-20",
    title: "Updated transport routes effective May 1",
    body: "Bus routes 3, 7 and 12 will be revised from May 1. Please review the updated timetable available at the front desk.",
  },
];

function Notices() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Notice Board"
        title="Announcements, circulars and updates."
        subtitle="All current notices in one place — refreshed by the school office."
      />

      <section className="container-page py-16">
        <div className="grid gap-5">
          {NOTICES.map((n) => (
            <article key={n.title} className="rounded-lg border border-border bg-background p-6 shadow-card transition hover:border-gold">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${TAG_COLOR[n.category] ?? TAG_COLOR.general}`}>
                  {n.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar size={14} className="text-gold" />{" "}
                  {new Date(n.publish_date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="text-xs text-muted-foreground">· For {n.audience}</span>
              </div>
              <h2 className="mt-3 font-display text-xl text-primary">{n.title}</h2>
              <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{n.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
