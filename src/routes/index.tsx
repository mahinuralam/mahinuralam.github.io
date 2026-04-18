import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import portrait from "@/assets/profile-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md Mahinur Alam — Researcher & Programmer" },
      {
        name: "description",
        content:
          "PhD Student at Georgia Southern University. Researcher in Deep Learning, Computer Vision, Federated Learning, LLMs, and Security & Privacy.",
      },
      { property: "og:title", content: "Md Mahinur Alam — Researcher & Programmer" },
      {
        property: "og:description",
        content:
          "PhD Student at Georgia Southern University. Researcher in Deep Learning, Computer Vision, Federated Learning, LLMs, and Security & Privacy.",
      },
    ],
  }),
  component: HomePage,
});

const QUICK_FACTS = [
  "Graduate Research Assistant at ARMOR Lab, GSU",
  "Graduate Research Assistant at Kumoh NIT, South Korea",
  "Data Scientist at AIMS Lab, UIU",
  "Software Engineer (Python) at Divine IT Ltd.",
  "Published in IEEE Access, ICT Express, JISA, IEEE ICC, ICTC & ICCIT",
  "Outstanding Graduate Thesis Award — Spring 2026",
  "KICS 2× Best Paper (Fall 2024) · KICS Best Paper (Summer 2025)",
  "ACM ICPC Dhaka Regional Finalist 2021 · 1600+ DSA problems solved",
];

const EDUCATION = [
  {
    degree: "PhD in Engineering",
    school: "Georgia Southern University, Statesboro, GA, USA",
    period: "Present",
  },
  {
    degree: "MEng in IT Convergence Engineering",
    school: "Kumoh National Institute of Technology, Gumi, South Korea",
    period: "Mar 2024 – Dec 2025",
    detail: "GPA 4.44 / 4.50 (WES 4.00 / 4.00)",
  },
  {
    degree: "BSc in Computer Science & Engineering",
    school: "International University of Business Agriculture & Technology, Dhaka, Bangladesh",
    period: "Jan 2019 – Dec 2022",
    detail: "GPA 3.79 / 4.00 (WES 3.69 / 4.00)",
  },
];

const UPDATES = [
  { tag: "Feb 2026", text: "Best Graduate Thesis Award, Spring 2026." },
  { tag: "Jan 2026", text: "Journal paper accepted in IEEE Access." },
  { tag: "Jan 2026", text: "Journal paper accepted in ICT Express." },
  { tag: "Dec 2025", text: "Paper accepted in ICAIIC 2026, Tokyo, Japan." },
  { tag: "Nov 2025", text: "Paper accepted in ICCIT 2025, Cox's Bazar." },
  { tag: "Oct 2025", text: "Two papers accepted in KICS Fall 2025, Gyeongju." },
  { tag: "Aug 2025", text: "Two papers accepted in ICTC 2025, Jeju Island." },
  { tag: "Jun 2025", text: "Two papers accepted in ICMIC 2025, Cebu." },
  { tag: "May 2025", text: "Three papers in KICS Summer 2025 [Best Paper]." },
  { tag: "Jan 2025", text: "Paper accepted in IEEE ICC 2025, Canada." },
  { tag: "Dec 2024", text: "KICS Fall 2024 Energy Contest [2× Best Paper]." },
  { tag: "Apr 2024", text: "MSc Scholarship from Tampere University, Finland." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-gold" />
              Researcher · PhD Student
            </p>
            <h1 className="display-xl mt-5">
              Hi, I'm <span className="italic text-gold">Md Mahinur</span> Alam.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              PhD student at Georgia Southern University. I research Machine and Deep Learning,
              Computer Vision, Federated Learning, LLMs, and Security &amp; Privacy — bridging
              theory and real industrial systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/publications"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
              >
                View publications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/experience"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-muted"
              >
                Experience
              </Link>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="h-3 w-3" /> Statesboro, Georgia · USA
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/30 via-accent/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-paper shadow-paper">
              <img
                src={portrait}
                alt="Portrait of Md Mahinur Alam"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lift md:block">
              <p className="font-display text-2xl text-ink">PhD '28</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Georgia Southern
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/60 bg-paper/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_2fr] md:px-8">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="display-lg mt-3">A brief note.</h2>
            <div className="gold-rule mt-5" />
          </div>
          <div className="prose-paper space-y-5 text-base md:text-lg">
            <p>
              I'm currently a PhD Student at Georgia Southern University. I completed my MEng in IT
              Convergence Engineering at Kumoh National Institute of Technology (KIT), South Korea
              and worked as a Researcher at the Pervasive Intelligent Computing Laboratory (PICL).
            </p>
            <p>
              I earned my Bachelor's in Computer Science and Engineering from the International
              University of Business Agriculture and Technology (IUBAT), Bangladesh in 2022. Before
              starting graduate school, I worked as a Software Engineer at Divine IT Ltd.
            </p>
            <p>
              My research interests span Machine and Deep Learning, Computer Vision, Federated
              Learning, Large Language Models, and Security &amp; Privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="eyebrow">At a glance</p>
        <h2 className="display-lg mt-3">A quick preview.</h2>
        <div className="gold-rule mt-5" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {QUICK_FACTS.map((fact, i) => (
            <li
              key={fact}
              className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-paper"
            >
              <span className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-foreground">{fact}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="border-t border-border/60 bg-paper/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="eyebrow">Education</p>
          <h2 className="display-lg mt-3">Where I've studied.</h2>
          <div className="gold-rule mt-5" />
          <div className="mt-12 space-y-10">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="grid gap-4 border-b border-border/60 pb-10 last:border-0 last:pb-0 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {edu.period}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
                  {edu.detail && (
                    <p className="mt-2 inline-block rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                      {edu.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Updates</p>
            <h2 className="display-lg mt-3">Recent news.</h2>
            <div className="gold-rule mt-5" />
          </div>
        </div>
        <ul className="mt-12 divide-y divide-border/60">
          {UPDATES.map((u) => (
            <li key={u.tag + u.text} className="grid gap-2 py-5 md:grid-cols-[120px_1fr] md:gap-8">
              <span className="font-mono text-xs uppercase tracking-wider text-gold">{u.tag}</span>
              <p className="text-sm text-foreground md:text-base">{u.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
