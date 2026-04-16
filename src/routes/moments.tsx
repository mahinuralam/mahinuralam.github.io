import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/moments")({
  head: () => ({
    meta: [
      { title: "Moments — Md Mahinur Alam" },
      {
        name: "description",
        content:
          "Conferences, contests, and milestones — KICS, ICTC, ICMIC, ACM ICPC, and graduation memories.",
      },
      { property: "og:title", content: "Moments — Md Mahinur Alam" },
      {
        property: "og:description",
        content: "Conference travels, contests, and graduation memories.",
      },
    ],
  }),
  component: MomentsPage,
});

const MOMENTS = [
  { title: "KICS Fall 2025", place: "Lahan Select Hotel, Gyeongju, South Korea", year: "2025" },
  { title: "ICTC 2025", place: "Lotte Hotel, Jeju Island, South Korea", year: "2025" },
  { title: "ICMIC 2025", place: "Tambuli Seaside Resort & Spa, Cebu, Philippines", year: "2025" },
  { title: "KICS Summer Conference 2025", place: "Jeju Island, South Korea", year: "2025" },
  { title: "GEF 2024 — 2nd Prize Winner", place: "Kumoh Institute of Technology, South Korea", year: "2024" },
  { title: "KICS Fall 2024 — Energy Self-Sufficiency Contest", place: "Jeju Island, South Korea", year: "2024" },
  { title: "KICS Fall 2024 Conference", place: "Lahan Select, Gyeongju, South Korea", year: "2024" },
  { title: "ICTC 2024", place: "Ramada Plaza, Jeju Island, South Korea", year: "2024" },
  { title: "KICS Summer 2024", place: "Jeju Island, South Korea", year: "2024" },
  { title: "ACM ICPC Asia Dhaka Regional", place: "Bangladesh", year: "2021" },
  { title: "BUET Inter-University Programming Contest", place: "BUET CSE Fest, Dhaka", year: "2022" },
  { title: "RUET Inter-University Programming Contest", place: "RUET CSE Fest, Rajshahi", year: "2022" },
  { title: "UITS Inter-University Collaborative Contest", place: "Dhaka, Bangladesh", year: "2022" },
  { title: "IUBAT CSE Fest", place: "IUBAT, Dhaka, Bangladesh", year: "2022" },
  { title: "IUBAT Intra-University Programming Contest", place: "IUBAT, Dhaka, Bangladesh", year: "2022" },
  { title: "IUBAT Intra-University Programming Contest", place: "IUBAT, Dhaka, Bangladesh", year: "2019" },
  { title: "Graduation Day", place: "IUBAT, Dhaka, Bangladesh", year: "2022" },
];

const ACCENT_GRADIENTS = [
  "from-amber-200/80 via-orange-100/70 to-rose-100/60",
  "from-sky-200/80 via-cyan-100/70 to-emerald-100/60",
  "from-violet-200/80 via-purple-100/70 to-fuchsia-100/60",
  "from-yellow-200/80 via-amber-100/70 to-orange-100/60",
  "from-emerald-200/80 via-teal-100/70 to-cyan-100/60",
  "from-rose-200/80 via-pink-100/70 to-fuchsia-100/60",
];

function MomentsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Memories</p>
      <h1 className="display-xl mt-3">Moments.</h1>
      <div className="gold-rule mt-6" />
      <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
        Conference halls, contest stages, and quiet wins — fragments of a journey across Bangladesh,
        South Korea, the Philippines, and the United States.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOMENTS.map((m, i) => (
          <article
            key={m.title + m.year + i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${
                ACCENT_GRADIENTS[i % ACCENT_GRADIENTS.length]
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <span className="font-display text-5xl text-ink/20 transition-transform group-hover:scale-105">
                  {m.year}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                {m.year}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg leading-snug text-ink">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.place}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-border bg-paper/40 p-6 text-center text-sm text-muted-foreground">
        Photos from the original Google Site can be added here later — the gallery is wired up to
        receive them.
      </div>
    </section>
  );
}
