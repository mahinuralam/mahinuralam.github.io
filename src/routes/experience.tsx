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
    org: "ARMOR Lab, Georgia Southern University (GSU)",
    period: "Present",
    projects: [
      {
        title: "Depth Estimation for Autonomous Vehicles",
        bullets: [
          "Depth estimation pipelines for hazard detection in autonomous vehicles.",
        ],
      },
      {
        title: "Microbes & Disease Analysis using BlueBoat",
        bullets: [
          "Analyzing water sample data collected from BlueBoat to study microbes and disease patterns.",
        ],
      },
    ],
  },
  {
    title: "Graduate Research Assistant",
    org: "Kumoh National Institute of Technology, South Korea",
    period: "Mar 2024 – Dec 2025",
    projects: [
      {
        title: "Real-Time Autonomous Driving Hazard Analysis",
        period: "Sep 2025 – Dec 2025",
        bullets: [
          "Multimodal model fusing speed, vision, and sound for real-time driving hazard detection.",
          "Lightweight regression model for speed/sound-based driver state detection and a VLM for visual detection.",
        ],
        papers: [
          "M. M. Alam, K. J. Tanha, M. Kim, T. Jun. Multi-modal Real-time Hazard Detection for Autonomous Driving Systems. KICS Fall 2025.",
        ],
      },
      {
        title: "AI for Digital Twin-Based Warehouse Logistics Optimization",
        period: "Jul 2024 – Dec 2025",
        bullets: [
          "Digital Twin warehouse simulation using NVIDIA Omniverse Isaac Sim and FlexSim.",
          "AI on real-time RF-based and vision-based sensor data for intelligent decision-making in warehouse logistics.",
        ],
        papers: [
          "AI-Enhanced Digital Twin Systems for Warehouse Logistics Optimization — ICT Express (Q1, IF 4.2).",
          "Federated Semi-Supervised Digital Twin for Enhanced HMI in Industry 5.0 — IEEE ICTC 2024.",
          "Deep Q-Network Agent-Driven Dynamic Slotting Optimization in FlexSim Digital Twin — Computers and Industrial Engineering (submitted).",
        ],
      },
      {
        title: "Daycare Face and Action Recognition on Edge Device",
        period: "Sep 2024 – Dec 2024",
        bullets: [
          "98% accuracy Transformer model for daycare face recognition using MTCNN facial embeddings.",
          "97% accuracy BiLSTM model for action recognition using MoveNet pose embeddings.",
          "Constructed a Korean children face and action recognition dataset.",
        ],
      },
      {
        title: "Industrial Manufacturing System Anomaly Detection",
        period: "Mar 2024 – Jun 2024",
        bullets: [
          "Attention-Enhanced Multi-CNN Transformer fusion achieving 98% accuracy.",
          "Stable Diffusion synthetic defect generation to mitigate data limitation and class imbalance.",
          "Improved baseline accuracy by 4.64% via preprocessing, augmentation, and fine-tuning.",
        ],
        papers: [
          "Stable Diffusion-Augmented Industrial Anomaly Detection Using Attention-Enhanced Multi-CNN Transformer Fusion — IEEE Access.",
        ],
      },
    ],
  },
  {
    title: "Data Scientist",
    org: "AIMS Lab, United International University, Bangladesh",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Analyzed heart failure, kidney disease, and stroke data from rural areas of Bangladesh.",
      "Identified high-impact regions and uncovered reasons for disease prevalence.",
    ],
  },
  {
    title: "Software Engineer (Python)",
    org: "Divine IT Ltd., Bangladesh",
    period: "Sep 2022 – Sep 2023",
    blurb:
      "Developed and implemented new modules and features for the PrismERP and PrismATS software suites.",
    bullets: [
      "Enhanced system stability and performance by resolving bugs and optimizing processes using parallel processing, efficient algorithms, and database optimization.",
      "Contributed to full-stack development for Enterprise Resource Planning (ERP) and Applicant Tracking Systems (ATS).",
      "PrismATS — recruitment APIs, job portal UI, candidate forms, application steps, password & attachment flows, dynamic form builder.",
      "PrismERP — leave policies, employee list/add flows, disciplinary management, movement register, asset management.",
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
