import { createFileRoute } from "@tanstack/react-router";
import { Code2, Brain, Link2 } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Md Mahinur Alam" },
      {
        name: "description",
        content:
          "Software engineering, AI/ML, and Blockchain skill stack — Python, PyTorch, TensorFlow, Solidity, Hyperledger and more.",
      },
      { property: "og:title", content: "Skills — Md Mahinur Alam" },
      {
        property: "og:description",
        content: "Software, AI/ML, and Blockchain skill stack.",
      },
    ],
  }),
  component: SkillsPage,
});

type Group = {
  icon: typeof Code2;
  domain: string;
  rows: { label: string; items: string[] }[];
  notes?: string[];
};

const GROUPS: Group[] = [
  {
    icon: Code2,
    domain: "Software Development",
    rows: [
      { label: "Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
      {
        label: "Frameworks & APIs",
        items: ["DRF", "FastAPI", "Express.js", "RESTful API"],
      },
      { label: "Databases", items: ["MySQL", "SQLite", "NoSQL"] },
      { label: "Concepts", items: ["OOP", "DSA"] },
      { label: "Tools & Cloud", items: ["Postman", "Docker", "Linux", "AWS"] },
    ],
  },
  {
    icon: Brain,
    domain: "Data Science & AI",
    rows: [
      { label: "Languages", items: ["Python"] },
      {
        label: "Frameworks & Libraries",
        items: [
          "TensorFlow",
          "PyTorch",
          "Scikit-Learn",
          "Pandas",
          "Keras",
          "NumPy",
          "Matplotlib",
          "OpenCV",
          "LangChain",
          "LangGraph",
        ],
      },
      { label: "BI & Analytics", items: ["Power BI"] },
    ],
    notes: [
      "Data Analysis · Statistical Modeling · Data Visualization · Feature Engineering",
      "Machine / Deep Learning · Computer Vision · Federated Learning",
      "LLMs · Generative AI · Diffusion Models",
      "Time-Series Forecasting · Quantization · Signal Processing",
      "Intrusion Detection",
    ],
  },
  {
    icon: Link2,
    domain: "Blockchain",
    rows: [
      { label: "Languages", items: ["Solidity", "Rust", "JavaScript"] },
      { label: "Frameworks", items: ["Web3.js", "Node.js"] },
      {
        label: "Tools",
        items: [
          "Hyperledger Fabric",
          "Hyperledger Besu",
          "Hyperledger Caliper",
          "IPFS",
          "MetaMask",
          "Cryptography",
          "Zero Knowledge Proof",
        ],
      },
    ],
  },
];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Toolbox</p>
      <h1 className="display-xl mt-3">Skills.</h1>
      <div className="gold-rule mt-6" />
      <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
        The languages, frameworks, and ideas I work with — across software engineering, applied AI,
        and decentralized systems.
      </p>

      <div className="mt-16 space-y-12">
        {GROUPS.map((g) => (
          <article
            key={g.domain}
            className="rounded-2xl border border-border bg-card p-8 shadow-paper md:p-10"
          >
            <header className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <g.icon className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl text-ink md:text-3xl">{g.domain}</h2>
            </header>

            <div className="mt-8 space-y-6">
              {g.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-3 border-b border-border/60 pb-6 last:border-0 last:pb-0 md:grid-cols-[160px_1fr] md:gap-8"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-paper/60 px-3.5 py-1.5 text-sm text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {g.notes && (
              <div className="mt-8 rounded-xl bg-paper/80 p-5">
                <p className="eyebrow mb-3">Concepts</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {g.notes.map((n) => (
                    <li key={n}>— {n}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
