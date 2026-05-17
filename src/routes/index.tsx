import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight, BookOpen, GraduationCap, Microscope, Trophy, Users, Calendar, Bell, Quote } from "lucide-react";
import hero from "@/assets/hero-school.jpg";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oxford Education School — Academic excellence since 1985" },
      { name: "description", content: "Welcome to Oxford Education School. Explore admissions, academics, notices, results, and the life of our community." },
      { property: "og:title", content: "Oxford Education School" },
      { property: "og:description", content: "A tradition of academic excellence and character formation since 1985." },
    ],
  }),
  component: Home,
});

const QUICK = [
  { icon: GraduationCap, label: "Admissions Open", to: "/admissions" },
  { icon: Bell, label: "Latest Notices", to: "/notices" },
  { icon: BookOpen, label: "Academic Calendar", to: "/academics" },
  { icon: Trophy, label: "Results Portal", to: "/results" },
];

const NOTICES = [
  { date: "May 12, 2026", tag: "Exam", title: "Mid-Term Examination schedule released for Grades 6–10" },
  { date: "May 08, 2026", tag: "Event", title: "Annual Science Fair — registration now open" },
  { date: "May 02, 2026", tag: "Holiday", title: "School closed on May 25 in observance of Eid-ul-Adha" },
  { date: "Apr 28, 2026", tag: "Result", title: "Grade 12 Pre-Board results published in the Results portal" },
];

const WHY = [
  { icon: Microscope, title: "Inquiry-led learning", body: "Curriculum built around questions, evidence and craft — not memorisation." },
  { icon: Users, title: "Small, attentive classes", body: "A 14:1 student–teacher ratio so every child is seen and stretched." },
  { icon: Trophy, title: "A culture of achievement", body: "98% pass rate in national board exams over the past decade." },
  { icon: BookOpen, title: "Beyond the classroom", body: "30+ clubs spanning robotics, debate, music, athletics and service." },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Oxford Education School campus at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/40" />
        <div className="container-page relative py-28 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Est. 1985 · Dhaka</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
            A school where curiosity becomes <span className="text-gold">character</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            For four decades, Oxford Education School has prepared young people for thoughtful lives —
            rooted in scholarship, service and integrity.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant transition hover:brightness-95"
            >
              Apply for 2026 <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Discover our story
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="border-b border-border bg-cream">
        <div className="container-page grid grid-cols-2 gap-px md:grid-cols-4">
          {QUICK.map((q) => (
            <Link
              key={q.label}
              to={q.to}
              className="group flex items-center gap-3 bg-cream px-6 py-6 transition hover:bg-background"
            >
              <q.icon className="text-gold" size={22} />
              <span className="font-medium text-primary group-hover:underline">{q.label}</span>
              <ArrowRight size={14} className="ml-auto text-gold opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* Principal */}
      <section className="container-page py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={principal}
              alt="Mr. A. R. Chowdhury, Principal"
              width={768}
              height={960}
              loading="lazy"
              className="rounded-lg shadow-elegant"
            />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-2 border-gold md:block" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">From the Principal</p>
            <h2 className="mt-3 font-display text-4xl text-primary">
              "Education is the kindling of a flame, not the filling of a vessel."
            </h2>
            <p className="mt-6 text-muted-foreground">
              Our task is not simply to prepare students for examinations, but for citizenship —
              to give them the habits of mind, the moral grounding, and the breadth of experience
              that will sustain them long after they leave our gates. Every member of our faculty
              is committed to that work.
            </p>
            <p className="mt-4 font-display text-lg text-primary">— Mr. A. R. Chowdhury</p>
            <p className="text-sm text-muted-foreground">Principal, Oxford Education School</p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Why Oxford</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-primary">
            An education measured in more than marks.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-lg border border-border bg-background p-7 shadow-card">
                <w.icon className="text-gold" size={26} />
                <h3 className="mt-5 font-display text-xl text-primary">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Notice Board</p>
            <h2 className="mt-3 font-display text-4xl text-primary">Latest announcements</h2>
          </div>
          <Link to="/notices" className="hidden text-sm font-semibold text-primary hover:text-gold md:inline-flex">
            View all notices →
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-border rounded-lg border border-border bg-background">
          {NOTICES.map((n) => (
            <li key={n.title} className="flex flex-col gap-2 p-6 transition hover:bg-cream md:flex-row md:items-center md:gap-6">
              <div className="flex shrink-0 items-center gap-3 md:w-56">
                <Calendar size={16} className="text-gold" />
                <span className="text-sm text-muted-foreground">{n.date}</span>
                <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">{n.tag}</span>
              </div>
              <p className="text-foreground">{n.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-page max-w-3xl text-center">
          <Quote className="mx-auto text-gold" size={36} />
          <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
            "Oxford gave my daughter not just an excellent education, but a sense of who she wanted to be.
            The faculty treat each student as a whole person."
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-gold">— Mrs. Rahman, parent of Class of 2024</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24 text-center">
        <h2 className="font-display text-4xl text-primary md:text-5xl">Visit our campus</h2>
        <p className="mt-4 text-muted-foreground">
          Open days are held every second Saturday of the month. We would love to meet you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary">
            Book a visit
          </Link>
          <Link to="/admissions" className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            Apply now
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
