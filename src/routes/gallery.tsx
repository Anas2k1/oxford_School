import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Oxford Education School" },
      { name: "description", content: "Moments from classrooms, events, sports and cultural programs." },
      { property: "og:title", content: "Gallery — Oxford Education School" },
      { property: "og:description", content: "Life at Oxford in pictures." },
    ],
  }),
  component: Gallery,
});

const CATS = ["All", "Events", "Classrooms", "Sports", "Cultural"] as const;

// Mosaic placeholder tiles — replace with real photos via /public or imagegen later
const TILES = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  cat: (["Events", "Classrooms", "Sports", "Cultural"] as const)[i % 4],
  // Gradient placeholder styled to brand
  span: [0, 5, 8].includes(i) ? "md:col-span-2 md:row-span-2" : "",
  label: ["Annual Day 2025", "Physics Lab", "Inter-House Cricket", "Spring Concert", "Science Fair", "Library", "Football Final", "Debate Final", "Art Exhibition", "Field Trip", "Math Olympiad", "Cultural Night"][i],
}));

function Gallery() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="A year in the life of Oxford."
        subtitle="A glimpse of classrooms, fields, stages and studios — the places where our students grow up."
      />

      <section className="container-page py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c, i) => (
            <button
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:border-gold hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4">
          {TILES.map((t) => (
            <figure
              key={t.id}
              className={`group relative overflow-hidden rounded-lg ${t.span}`}
              style={{
                background: `linear-gradient(135deg, oklch(0.24 0.08 265), oklch(0.35 0.07 260) 60%, oklch(0.76 0.13 85))`,
              }}
            >
              <div className="absolute inset-0 bg-primary/30 transition group-hover:bg-primary/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-primary-foreground">
                <span className="font-display text-sm">{t.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">{t.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="gold-rule font-display text-3xl text-primary">Video gallery</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Annual Day Highlights", "Campus Tour", "Founders' Day Address"].map((v) => (
              <div key={v} className="aspect-video rounded-lg bg-primary/90 p-4 text-primary-foreground">
                <div className="flex h-full flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest text-gold">Video</span>
                  <span className="mt-1 font-display text-lg">{v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
