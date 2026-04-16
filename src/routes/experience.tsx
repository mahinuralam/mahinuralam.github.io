import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Md Mahinur Alam" },
      {
        name: "description",
        content:
          "Research and engineering experience: GSU, PICL at Kumoh NIT, AIMS Lab, and Divine IT Ltd.",
      },
      { property: "og:title", content: "Experience — Md Mahinur Alam" },
      {
        property: "og:description",
        content:
          "Research and engineering experience across academic labs and industry.",
      },
    ],
  }),
  component: ExperiencePage,
});

type Role = {
  title: string;
  org: string;
  period: string;
  blurb?: string;
  projects?: { title: string; period?: string; bullets: string[]; papers?: string[] }[];
  bullets?: string[];
};

const ROLES: Role[] = [
  {
    title: "Graduate Research Assistant",
    org: "Georgia Southern University (GSU)",
    period: "Nov 2024 – Present",
    projects: [
      {
        title: "Multi-Robot System",
        period: "Nov 2025 – Present",
        bullets: [
          "Cooperative UAV / UGV coordination and sensor network optimization.",
          "Real-time target tracking and decision-making with partial information.",
        ],
      },
    ],
  },
  {
    title: "Graduate Research Assistant",
    org: "Pervasive Intelligent Computing Lab (PICL), Kumoh NIT",
    period: "Mar 2024 – Present",
    projects: [
      {
        title: "Real-Time Autonomous Driving Hazard Analysis (Project Lead)",
        period: "Sep 2025 – Present",
        bullets: [
          "Lightweight multimodal framework for unknown-hazard detection.",
          "Speed, video, and motion fusion for multi-sensor hazard detection.",
        ],
        papers: [
          "M. M. Alam, K. J. Tanha, M. Kim, T. Jun. Multi-modal Real-time Hazard Detection for Autonomous Driving Systems. KICS Fall 2025.",
        ],
      },
      {
        title: "AI for Digital Twin-Based Warehouse Logistics (Project Lead)",
        period: "Jul 2024 – Present",
        bullets: [
          "Digital Twin warehouse simulation with NVIDIA Omniverse Isaac Sim and FlexSim.",
          "RF + vision sensor fusion for intelligent decision-making and process optimization.",
        ],
        papers: [
          "Federated Semi-Supervised Digital Twin for Enhanced Human-Machine Interaction in Industry 5.0 — ICTC 2024.",
          "AI for Digital Twin-Based Warehouse Logistics Optimization: A Review — ICT Express (under review).",
          "Deep Q-Network Agent-Driven Dynamic Slotting Optimization in FlexSim Digital Twin — ICT Express (under review).",
        ],
      },
      {
        title: "Image Analysis on Edge Devices for Daycare Application (Project Lead)",
        period: "Sep 2024 – Dec 2024",
        bullets: [
          "98% accuracy Transformer for face recognition with MTCNN + diffusion-generated images.",
          "97% accuracy BiLSTM for action recognition using MoveNet pose embeddings.",
        ],
      },
      {
        title: "Manufacturing Execution Systems (MES)",
        period: "Mar 2024 – Jun 2024",
        bullets: [
          "Transformer-fused Multi-CNN reaching 98% accuracy, surpassing prior defect detection models.",
          "Stable Diffusion synthetic defect generation to mitigate class imbalance.",
          "Improved baseline accuracy by 4.64% via preprocessing, augmentation, and fine-tuning.",
        ],
        papers: [
          "Stable Diffusion-Augmented Industrial Anomaly Detection — IEEE Access (minor revision).",
          "Enhanced Anomaly Detection with Optimized Deep Learning in Manufacturing — J-KICS (under review).",
        ],
      },
    ],
  },
  {
    title: "Research Assistant",
    org: "AIMS Lab, United International University",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Analyzed heart failure, kidney disease, and stroke data from rural Bangladesh.",
      "Identified high-impact regions and uncovered drivers of disease prevalence.",
    ],
  },
  {
    title: "Software Engineer (Python)",
    org: "Divine IT Ltd., Bangladesh",
    period: "Sep 2022 – Sep 2023",
    blurb:
      "Worked on PrismHRM and PrismATS as a responsible engineer — implementing new features, modifications, and bug fixes.",
    bullets: [
      "PrismATS — built recruitment APIs, redesigned the job portal UI, candidate forms, application steps, password & attachment flows, dynamic form builder.",
      "PrismHRM — improved leave policies (study & Hajj leave), employee list and add flows, departmental layers.",
      "Disciplinary Management — built a Complaint sub-module with dynamic Reply section and committee actions.",
      "Movement Register & Movement Pass — added travel-medium typing, comprehensive employee movement tracking.",
      "Mode of Travel & Asset Management — improved data capture and assignment workflows.",
    ],
  },
];

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Career</p>
      <h1 className="display-xl mt-3">Experience.</h1>
      <div className="gold-rule mt-6" />
      <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
        A timeline of research and engineering work — from competitive programming roots to leading
        AI-for-industry projects across Korea and the United States.
      </p>

      <div className="mt-16 space-y-16">
        {ROLES.map((role) => (
          <article key={role.title + role.org} className="relative">
            <header className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="font-mono text-xs uppercase tracking-wider text-gold">{role.period}</p>
              <div>
                <h2 className="font-display text-2xl text-ink md:text-3xl">{role.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{role.org}</p>
              </div>
            </header>

            <div className="mt-6 md:ml-[260px]">
              {role.blurb && (
                <p className="prose-paper mb-6 text-foreground">{role.blurb}</p>
              )}

              {role.bullets && (
                <ul className="space-y-2.5 text-sm text-foreground md:text-base">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {role.projects && (
                <div className="space-y-8">
                  {role.projects.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-xl border border-border bg-card p-6 shadow-paper"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg text-ink">{p.title}</h3>
                        {p.period && (
                          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            {p.period}
                          </span>
                        )}
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-foreground">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {p.papers && (
                        <div className="mt-5 border-t border-border/60 pt-4">
                          <p className="eyebrow mb-3">Related papers</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {p.papers.map((paper) => (
                              <li key={paper} className="italic">
                                — {paper}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
