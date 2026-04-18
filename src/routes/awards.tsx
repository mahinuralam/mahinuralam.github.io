import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, BookOpen, Heart } from "lucide-react";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Achievements — Md Mahinur Alam" },
      {
        name: "description",
        content:
          "Best Paper awards, programming contests, scholarships, and certifications from KICS, ICPC, IUBAT, and more.",
      },
      { property: "og:title", content: "Awards & Achievements — Md Mahinur Alam" },
      {
        property: "og:description",
        content: "Programming contests, best paper awards, scholarships, and certifications.",
      },
    ],
  }),
  component: AwardsPage,
});

const CONTESTS = [
  { title: "Champion", event: "Intra University Programming Contest, IUBAT", year: "2022", team: "IUBAT_Potato_Mind" },
  { title: "Champion", event: "Intra University Programming Contest, IUBAT", year: "2021", team: "IUBAT_Potato_Mind" },
  { title: "ACM ICPC Asia Dhaka Regional Contest Finalist", event: "ACM ICPC", year: "2021", team: "IUBAT_Potato_Mind" },
  { title: "Best Fresher Programmer", event: "Intra University Programming Contest, IUBAT", year: "2019", team: "Solo" },
  { title: "First Runners-up", event: "Intra University Programming Contest, IUBAT", year: "2020", team: "IUBAT_Potato_Mind" },
  { title: "Second Runners-up", event: "UITS Inter University Collaboration Programming Contest", year: "2022", team: "IUBAT_Potato_Mind" },
  { title: "Participation", event: "Inter-University Programming Contest, RUET", year: "2022", team: "IUBAT_Potato_Mind" },
  { title: "Participation", event: "Inter-University Programming Contest, BUET", year: "2022", team: "IUBAT_Potato_Mind" },
  { title: "Participation", event: "Inter University Programming Contest, AUST", year: "2022", team: "IUBAT_Potato_Mind" },
];

const PAPER_AWARDS = [
  { title: "Outstanding Graduate Thesis Award", detail: "Spring 2026" },
  {
    title: "KICS Fall 2024 — Gumi Industrial Complex Energy Self-Sufficiency Data Academic Paper Contest",
    detail: "2× Best Paper",
  },
  { title: "KICS Summer Conference 2025", detail: "Best Paper Award" },
];

const ONLINE = [
  "Solved 1600+ Data Structure & Algorithm problems across multiple online judges.",
  "Federated fine-tuning of Qwen2.5-7B — currently ranked 5th globally on the Flower Finance LLM Leaderboard.",
  "Data Structures, Algorithms & Programming Language Mentor at IUBAT.",
];

const CERTIFICATIONS = [
  "Supervised Machine Learning: Regression and Classification",
  "Intermediate Machine Learning",
  "Data Cleaning",
  "Intro to Machine Learning",
  "Python",
  "Introduction to Solidity",
  "Develop a Blockchain with Rust on Substrate",
  "IELTS — 7.0 All Modules",
];

const VOLUNTEER = [
  "Organized IUBAT Intra-University Competitive Programming Contest (2021 & 2022).",
  "Organized Competitive Programming learning sessions.",
  "Mentor — Beginner C / C++ language sessions.",
  "Mentor — Intermediate Data Structures & Algorithms.",
];

function AwardsPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Recognition</p>
      <h1 className="display-xl mt-3">Awards &amp; achievements.</h1>
      <div className="gold-rule mt-6" />
      <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
        From competitive programming arenas across Bangladesh to international research venues —
        a record of curiosity, persistence, and collaboration.
      </p>

      {/* Programming Contests */}
      <div className="mt-16">
        <h2 className="flex items-center gap-3 font-display text-2xl text-ink md:text-3xl">
          <Trophy className="h-6 w-6 text-gold" />
          Competitive programming contests
        </h2>
        <div className="gold-rule mt-4" />
        <p className="mt-5 max-w-3xl text-muted-foreground">
          During my Bachelor's degree I competed in many programming contests, sharpening
          algorithms, data structures, and problem-solving instincts.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CONTESTS.map((c) => (
            <div
              key={c.event + c.year}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-paper"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-display text-base text-ink">{c.title}</p>
                <span className="font-mono text-xs text-gold">{c.year}</span>
              </div>
              <p className="mt-1.5 text-sm text-foreground">{c.event}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Team: {c.team}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Paper awards */}
      <div className="mt-20">
        <h2 className="flex items-center gap-3 font-display text-2xl text-ink md:text-3xl">
          <Award className="h-6 w-6 text-gold" />
          Research paper awards
        </h2>
        <div className="gold-rule mt-4" />
        <ul className="mt-8 space-y-4">
          {PAPER_AWARDS.map((a) => (
            <li
              key={a.title}
              className="flex flex-col gap-1 rounded-xl border-l-2 border-gold bg-paper/60 px-5 py-4"
            >
              <p className="font-display text-lg text-ink">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Online platforms */}
      <div className="mt-20">
        <h2 className="font-display text-2xl text-ink md:text-3xl">Online coding platforms</h2>
        <div className="gold-rule mt-4" />
        <p className="mt-5 max-w-3xl text-muted-foreground">
          Active on Codeforces, LeetCode, UVa, HackerRank, HackerEarth, SPOJ, and Kaggle — alongside
          blockchain / Solidity dApp development.
        </p>
        <ul className="mt-6 space-y-3 text-foreground">
          {ONLINE.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <h2 className="flex items-center gap-3 font-display text-2xl text-ink md:text-3xl">
          <BookOpen className="h-6 w-6 text-gold" />
          Certifications &amp; scholarships
        </h2>
        <div className="gold-rule mt-4" />
        <div className="mt-8 flex flex-wrap gap-2">
          {CERTIFICATIONS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-gold hover:text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Volunteer */}
      <div className="mt-20">
        <h2 className="flex items-center gap-3 font-display text-2xl text-ink md:text-3xl">
          <Heart className="h-6 w-6 text-gold" />
          Volunteer &amp; mentorship
        </h2>
        <div className="gold-rule mt-4" />
        <ul className="mt-8 space-y-3 text-foreground">
          {VOLUNTEER.map((v) => (
            <li key={v} className="flex gap-3">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
