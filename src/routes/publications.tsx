import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Md Mahinur Alam" },
      {
        name: "description",
        content:
          "Peer-reviewed journals and conference papers in Deep Learning, Federated Learning, Digital Twin, Blockchain, and Computer Vision.",
      },
      { property: "og:title", content: "Publications — Md Mahinur Alam" },
      {
        property: "og:description",
        content:
          "Journals and conferences in DL, Federated Learning, Digital Twin, and Blockchain.",
      },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  authors: string;
  title: string;
  venue: string;
  meta?: string;
  link?: string;
};

const JOURNALS: Pub[] = [
  {
    authors: "Md Mahinur Alam, Mohamed A. Dini, Dong-Seong Kim, Taesoo Jun",
    title: "TMNet: Transformer-fused multimodal framework for emotion recognition via EEG and speech",
    venue: "ICT Express",
    meta: "IF 4.2 · CS 10.2",
    link: "https://www.sciencedirect.com/science/article/pii/S2405959525000517",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Taesoo Jun",
    title: "Stable Diffusion-Augmented Industrial Anomaly Detection Using Attention-Enhanced Multi-CNN Transformer Fusion",
    venue: "IEEE Access",
    meta: "Minor revision · resubmission",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Kanita Jerin Tanha, Taesoo Jun",
    title: "FMACNN: Federated Multi-Attention CNN Framework for Artificial Image Detection",
    venue: "Journal of Information Security and Applications",
    meta: "IF 3.7 · Q1 · Minor revision",
  },
  {
    authors: "Md Mahinur Alam, Reimbaev Azizbek Nurkat Ugli, Kanita Jerin Tanha, Taesoo Jun",
    title: "AI for Digital Twin-Based Warehouse Logistics Optimization: A Review",
    venue: "ICT Express",
    meta: "Major revision",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Md Facklasur Rahman, Dong-Seong Kim, Jae-Min Lee",
    title: "BELL-IDS: Blockchain-Empowered LLM-Aided Context-Aware IDS in IoFT",
    venue: "IEEE Transactions on Vehicular Technology",
    meta: "Under review",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Taesoo Jun",
    title: "Blockchain-Aided Intrusion Detection in Marine Tactical Network Using Reinforcement Learning",
    venue: "Journal of the Korean Institute of Communications and Information Sciences",
    meta: "Accepted",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Taesoo Jun",
    title: "Enhancing Quality Control in MES Using Optimized Deep Learning",
    venue: "Journal of the Korean Institute of Communications and Information Sciences",
    meta: "Accepted",
  },
];

const INT_CONFERENCES: Pub[] = [
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Digital Twin-Enabled Semi-Supervised Knowledge Distillation for HMC Monitoring on Edge Device",
    venue: "ICTC 2025",
  },
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "RealAIGI: A Novel Dataset for Enhanced Detection of Real and AI-Generated Images",
    venue: "ICMIC 2025",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Md Raihan Subhan, Dong-Seong Kim, Taesoo Jun",
    title: "Federated Semi-Supervised Digital Twin for Enhanced Human-Machine Interaction in Industry 5.0",
    venue: "ICTC 2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10827164",
  },
  {
    authors: "Md Mahinur Alam, Md Sakibul Islam, Sidratul Muntaha, Tanjin Alam, Kanita Jerin Tanha",
    title: "A Secure and Optimized Healthcare Data Governance Framework Leveraging Hyperledger Fabric Blockchain",
    venue: "ICCIT 2023",
    link: "https://ieeexplore.ieee.org/document/10441320",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Md Raihan Subhan, Dong-Seong Kim, Jae-Min Lee",
    title: "BLIND-Twin: Blockchain-Assisted LLM-Based CDS for Digital Twin-Enhanced Industrial AIoT",
    venue: "IEEE ICC 2025",
  },
  {
    authors: "Ashraful Islam Khan, Md Mahinur Alam, Kanita Jerin Tanha, Md Sakibul Islam",
    title: "Safety-Critical IoMT Security: A Lightweight, Cost-Aware Approach at the Network Edge",
    venue: "ICCIT 2025",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim, Jae-Min Lee",
    title: "BLM-Chain: AI-Driven Blockchain for UAV Threat Resistance in IoBT",
    venue: "ICTC 2024",
    link: "https://ictc.org/media?key=site/ictc2024/abs/E6-6.pdf",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "Digital Twin-Driven Federated Learning for Intrusion Detection under Simulated Adversarial Conditions",
    venue: "ICTC 2025",
  },
  {
    authors: "M. M. Rakibul Hasan, Md Mahinur Alam, Kanita Jerin Tanha",
    title: "Decentralized Blockchain-Based Land Deed Verification and Reservation System in Bangladesh",
    venue: "ICCIT 2022",
    link: "https://ieeexplore.ieee.org/document/10054857",
  },
  {
    authors: "Md Raihan Subhan, Mohtasin Golam, Md Facklasur Rahaman, Md Mahinur Alam, Dong-Seong Kim, Taesoo Jun",
    title: "A Blockchain-Based System for Efficient, Traceable, and Transparent Maritime Logistics",
    venue: "ICTC 2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10827619",
  },
];

const DOM_CONFERENCES: Pub[] = [
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Multi-modal Real-time Hazard Detection for Autonomous Driving Systems",
    venue: "KICS Fall 2025",
  },
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Novel Zero-Day Zero-Touch Intrusion Detection System Using Generative AI and LLMs",
    venue: "KICS Summer 2025",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Esmot Ara Tuli, Md Raihan Subhan, Dong-Seong Kim, Taesoo Jun",
    title: "DCFL-Chain: Digital-Twin-Based Collaborative FL-Integrated Energy Consumption Prediction for Smart Factory",
    venue: "KICS Fall 2024",
    meta: "Best Paper",
  },
  {
    authors: "Md Mahinur Alam, Md Javed Ahmed Shanto, Dong-Seong Kim, Taesoo Jun",
    title: "Token-based e-Learning System Harnessing Hyperledger Besu",
    venue: "KICS Summer 2024",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11906372",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "FlexSim-Based Digital Twin Framework for Smart Warehouse Monitoring and Performance Optimization",
    venue: "KICS Fall 2025",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "Detecting Threats in Edge IoT Networks Using Federated Learning and Digital Twin",
    venue: "KICS Summer 2025",
    meta: "Best Paper",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "XAI-Powered Digital Twin for Industrial Energy Prediction and Optimization",
    venue: "KICS Summer 2025",
  },
  {
    authors: "Adnan Md Tayeb, Md Mahinur Alam, et al.",
    title: "PureParking: A Decentralized, Secure Framework for Parking Space Sharing Using Blockchain",
    venue: "KICS Summer 2024",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Md Raihan Subhan, Dong-Seong Kim, Jae-Min Lee",
    title: "BFL-Net: Blockchain-Assisted Energy Prediction Based on FL-Integrated LLM for Industry 4.0",
    venue: "KICS Fall 2024",
  },
  {
    authors: "Md Raihan Subhan, Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim, Taesoo Jun",
    title: "Energy-Twin: Explainable AI-Driven Energy Optimization using Digital-Twin for Smart Industry",
    venue: "KICS Fall 2024",
    meta: "Best Paper",
  },
];

function PublicationItem({ pub, index }: { pub: Pub; index: number }) {
  return (
    <li className="grid gap-3 border-b border-border/60 py-6 last:border-0 md:grid-cols-[60px_1fr] md:gap-6">
      <span className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-display text-lg leading-snug text-ink">
          {pub.title}
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-gold hover:underline"
              aria-label="External link"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
        <p className="mt-2 text-sm">
          <span className="italic text-foreground">{pub.venue}</span>
          {pub.meta && (
            <span className="ml-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-accent-foreground">
              {pub.meta}
            </span>
          )}
        </p>
      </div>
    </li>
  );
}

function Section({ title, items }: { title: string; items: Pub[] }) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="display-lg">{title}</h2>
        <span className="font-mono text-xs text-muted-foreground">{items.length} entries</span>
      </div>
      <div className="gold-rule mt-4" />
      <ul className="mt-2">
        {items.map((p, i) => (
          <PublicationItem key={p.title} pub={p} index={i} />
        ))}
      </ul>
    </section>
  );
}

function PublicationsPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Research</p>
      <h1 className="display-xl mt-3">Publications.</h1>
      <div className="gold-rule mt-6" />
      <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
        Peer-reviewed work spanning Deep Learning, Federated Learning, Digital Twin, Blockchain, and
        Computer Vision — across IEEE, Elsevier, and KICS venues.
      </p>

      <Section title="International Journals" items={JOURNALS} />
      <Section title="International Conferences" items={INT_CONFERENCES} />
      <Section title="Domestic Conferences" items={DOM_CONFERENCES} />
    </section>
  );
}
