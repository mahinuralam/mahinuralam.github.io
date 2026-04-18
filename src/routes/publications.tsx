import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Database } from "lucide-react";

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
  /** Paper / publisher link */
  link?: string;
  /** GitHub repository link */
  code?: string;
  /** Dataset link */
  dataset?: string;
};

const JOURNALS: Pub[] = [
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Taesoo Jun",
    title: "Stable Diffusion-Augmented Industrial Anomaly Detection Using Attention-Enhanced Multi-CNN Transformer Fusion",
    venue: "IEEE Access",
    link: "https://ieeexplore.ieee.org/document/11361039",
    code: "https://github.com/mahinuralam/Manufacturing-Execution-Systems-MES-",
  },
  {
    authors: "Md Mahinur Alam, Mohamed A. Dini, Taesoo Jun",
    title: "TMNet: Transformer-Fused Multimodal Framework for Emotion Recognition via EEG and Speech",
    venue: "ICT Express",
    meta: "SCIE · IF 4.2 · Q1",
    link: "https://www.sciencedirect.com/science/article/pii/S2405959525000517",
    code: "https://github.com/mahinuralam/TMNet",
  },
  {
    authors: "Md Mahinur Alam, Reimbaev Azizbek Nurkat Ugli, Kanita Jerin Tanha, Taesoo Jun",
    title: "AI-Enhanced Digital Twin Systems for Warehouse Logistics Optimization: A Review of Challenges, Solutions, and Future Directions",
    venue: "ICT Express",
    meta: "SCIE · IF 4.2 · Q1",
    link: "https://www.sciencedirect.com/science/article/pii/S2405959526000093",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Taesoo Jun",
    title: "FMACNN: Federated Multi-Attention CNN Framework for Artificial Image Detection",
    venue: "Journal of Information Security and Applications",
    meta: "SCIE · IF 3.7 · Q2 · Accepted",
    code: "https://github.com/mahinuralam/FMACNN",
    dataset: "https://dx.doi.org/10.21227/0da4-g645",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Mohtasin Golam, Taesoo Jun",
    title: "Blockchain-Aided Intrusion Detection in Marine Tactical Network Using Reinforcement Learning",
    venue: "The Journal of the Korean Institute of Communications and Information Sciences",
    link: "https://journal.kics.or.kr/digital-library/105210",
  },
  {
    authors: "M. A. I. Khan, Md Mahinur Alam, M. S. Islam, A. S. Mahmoud, T. R. Sheltami",
    title: "Adaptive Quantum-Resistant Deep Reinforcement Learning Framework for 6G Healthcare IoMT Security",
    venue: "Health and Technology",
    meta: "2nd Revision",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Reimbaev Azizbek Nurkat Ugli, Taesoo Jun",
    title: "Deep Q-Network Agent-Driven Dynamic Slotting Optimization in FlexSim Digital Twin for Smart Warehouse Logistics",
    venue: "Computers and Industrial Engineering",
    meta: "Submitted",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Md Facklasur Rahman, Dong-Seong Kim, Jae-Min Lee",
    title: "BELL-IDS: Blockchain-Empowered Large Language Model-Aided Context-Aware IDS in IoFT",
    venue: "IEEE Transactions on Network and Service Management",
    meta: "Under Review",
  },
];

const INT_CONFERENCES: Pub[] = [
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Digital Twin-Driven Semi-Supervised Knowledge Distillation for HMI Monitoring on Edge Device",
    venue: "IEEE ICTC 2025",
    link: "https://drive.google.com/file/d/1vMmlvGevSJcnU0G8HqnafLjOd7ROq5q-/view",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Md Raihan Subhan, Dong-Seong Kim, Taesoo Jun",
    title: "Federated Semi-Supervised Digital Twin for Enhanced Human-Machine Interaction in Industry 5.0",
    venue: "IEEE ICTC 2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10827164",
  },
  {
    authors: "Md Mahinur Alam, Md Sakibul Islam, Sidratul Muntaha, Tanjin Alam, Kanita Jerin Tanha",
    title: "A Secure and Optimized Healthcare Data Governance Framework Leveraging Hyperledger Fabric Blockchain",
    venue: "IEEE ICCIT 2023",
    link: "https://ieeexplore.ieee.org/document/10441320",
  },
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "RealAIGI: An Innovative Dataset for Enhanced Detection of Real and AI-Generated Images",
    venue: "IEEE ICMIC 2025",
    link: "https://drive.google.com/file/d/1qaFfFqLep0aUFzwkcIBlrA9tSlnLsdyZ/view",
    dataset: "https://ieee-dataport.org/documents/realaigi-realistic-ai-generated-image-dataset",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Md Raihan Subhan, Dong-Seong Kim, Jae-Min Lee",
    title: "BLIND-Twin: Blockchain-Assisted LLM-Based CDS for Digital Twin-Enhanced Industrial AIoT",
    venue: "IEEE ICC 2025",
    link: "https://ieeexplore.ieee.org/abstract/document/11161313/",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "Deep Reinforcement Learning Approach with Digital Twin Toward Smarter Warehouse",
    venue: "IEEE ICAIIC 2026",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Lightweight Hybrid Deep Learning Model with Digital Twin for Industrial Energy Optimization",
    venue: "IEEE ICMIC 2025",
  },
  {
    authors: "A. I. Khan, Md Mahinur Alam, Kanita Jerin Tanha, S. Islam",
    title: "Safety-Critical IoMT Security: A Lightweight, Cost-Aware Approach at the Network Edge",
    venue: "IEEE ICCIT 2025",
    link: "https://ieeexplore.ieee.org/document/11257756",
    code: "https://github.com/mahinuralam/-IoMT-Security",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "Digital Twin-Driven Federated Learning for Intrusion Detection under Simulated Adversarial Conditions",
    venue: "IEEE ICTC 2025",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim, Jae-Min Lee",
    title: "BLM-Chain: AI-Driven Blockchain for UAV Threat Resistance in IoBT",
    venue: "IEEE ICTC 2024",
    link: "https://ictc.org/media?key=site/ictc2024/abs/E6-6.pdf",
  },
  {
    authors: "M. M. Rakibul Hasan, Md Mahinur Alam, Kanita Jerin Tanha",
    title: "Decentralized Blockchain-Based Land Deed Verification and Reservation System in Bangladesh",
    venue: "IEEE ICCIT 2022",
    link: "https://ieeexplore.ieee.org/document/10054857",
  },
  {
    authors: "Md Raihan Subhan, Mohtasin Golam, Md Facklasur Rahaman, Md Mahinur Alam, Dong-Seong Kim, Taesoo Jun",
    title: "A Blockchain-Based System for Efficient, Traceable, and Transparent Maritime Logistics",
    venue: "IEEE ICTC 2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10827619",
  },
];

const DOM_CONFERENCES: Pub[] = [
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, M. Kim, Taesoo Jun",
    title: "Multi-modal Real-time Hazard Detection for Autonomous Driving Systems",
    venue: "KICS Fall Conference 2025",
  },
  {
    authors: "Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "Novel Zero-Day Zero-Touch Intrusion Detection System Using Generative-AI and Large Language Model",
    venue: "KICS Summer Conference 2025",
  },
  {
    authors: "Md Mahinur Alam, Mohtasin Golam, Esmot Ara Tuli, Taesoo Jun",
    title: "DCFL-Chain: Digital-Twin-Based Collaborative FL-Integrated Energy Consumption Prediction for Smart Factory",
    venue: "KICS Fall Conference 2024",
    meta: "Best Paper",
    code: "https://github.com/mahinuralam/Gumi-Industiral-Enegy-Consumption-Competition",
  },
  {
    authors: "Md Mahinur Alam, Md Javed Ahmed Shanto, Dong-Seong Kim, Taesoo Jun",
    title: "Token-based e-Learning System Harnessing Hyperledger Besu",
    venue: "KICS Summer Conference 2024",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11906372",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Taesoo Jun",
    title: "FlexSim-Based Digital Twin Framework for Smart Warehouse Monitoring and Performance Optimization",
    venue: "KICS Fall Conference 2025",
  },
  {
    authors: "Md Raihan Subhan, Md Mahinur Alam, Kanita Jerin Tanha, Taesoo Jun",
    title: "XAI-Powered Digital Twin for Industrial Energy Prediction and Optimization",
    venue: "KICS Summer Conference 2025",
  },
  {
    authors: "Kanita Jerin Tanha, Md Mahinur Alam, Md Raihan Subhan, Taesoo Jun",
    title: "Detecting Threats in Edge IoT Networks Using Federated Learning and Digital Twin",
    venue: "KICS Summer Conference 2025",
    meta: "Best Paper",
  },
  {
    authors: "Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim, Jae-Min Lee",
    title: "BFL-Net: Blockchain-Assisted Energy Prediction Based on FL-Integrated LLM for Industry 4.0",
    venue: "KICS Fall Conference 2024",
  },
  {
    authors: "Adnan Md Tayeb, Md Mahinur Alam, M. A. Khatun, M. J. A. Shanto, Dong-Seong Kim, Jae-Min Lee",
    title: "PureParking: A Decentralized, Secure Framework for Parking Space Sharing Using Blockchain",
    venue: "KICS Summer Conference 2024",
  },
  {
    authors: "Md Javed Ahmed Shanto, Md Mahinur Alam, Mohtasin Golam, Dong-Seong Kim, Taesoo Jun",
    title: "A Blockchain-Based Framework for Distributing and Managing CNN-Derived Brain Tumor Detection Models",
    venue: "KICS Summer Conference 2024",
  },
  {
    authors: "Esmot Ara Tuli, Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim",
    title: "Quantum Encrypted Collaborative Energy Consumption Demand Response Management for Smart Industrial System",
    venue: "KICS Fall Conference 2024",
  },
  {
    authors: "Md Raihan Subhan, Mohtasin Golam, Md Mahinur Alam, Dong-Seong Kim, Taesoo Jun",
    title: "Energy-Twin: Explainable AI-Driven Energy Optimization using Digital-Twin for Smart Industry",
    venue: "KICS Fall Conference 2024",
    meta: "Best Paper",
    link: "https://www.researchgate.net/publication/390921228_Energy-Twin_Explainable_AI-Driven_Energy_Optimization_using_Digital-Twin_for_Smart_Industry",
  },
  {
    authors: "Md Raihan Subhan, Mohtasin Golam, Md Facklasur Rahaman, Md Mahinur Alam, Dong-Seong Kim, Taesoo Jun",
    title: "An Efficient, Traceable, and Transparent Maritime Logistic System Based on Blockchain",
    venue: "KICS Summer Conference 2024",
  },
];

function LinkChip({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: typeof ExternalLink;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-gold hover:bg-gold/10 hover:text-ink"
    >
      <Icon className="h-3 w-3" />
      {label}
    </a>
  );
}

function PublicationItem({ pub, index }: { pub: Pub; index: number }) {
  return (
    <li className="grid gap-3 border-b border-border/60 py-6 last:border-0 md:grid-cols-[60px_1fr] md:gap-6">
      <span className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-display text-lg leading-snug text-ink">{pub.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="italic text-foreground">{pub.venue}</span>
          {pub.meta && (
            <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-accent-foreground">
              {pub.meta}
            </span>
          )}
          {pub.link && <LinkChip href={pub.link} label="Paper" Icon={ExternalLink} />}
          {pub.code && <LinkChip href={pub.code} label="Code" Icon={Github} />}
          {pub.dataset && <LinkChip href={pub.dataset} label="Dataset" Icon={Database} />}
        </div>
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
