import { Mail, Github, Linkedin, GraduationCap, FileText } from "lucide-react";

const LINKS = [
  { href: "mailto:mahinuralam213@gmail.com", label: "Email", icon: Mail },
  { href: "https://www.linkedin.com/in/mahinur-alam/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/mahinuralam", label: "GitHub", icon: Github },
  { href: "https://scholar.google.com/citations?user=E9OClTAAAAAJ&hl=en", label: "Scholar", icon: GraduationCap },
  { href: "https://www.researchgate.net/profile/Md-Alam-454/publications", label: "ResearchGate", icon: FileText },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-paper/60">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="eyebrow">Get in touch</p>
            <h3 className="mt-2 font-display text-2xl text-ink">
              Open to research collaborations & PhD discussions.
            </h3>
            <a
              href="mailto:mahinuralam213@gmail.com"
              className="mt-4 inline-block text-sm text-ink link-underline"
            >
              mahinuralam213@gmail.com
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Statesboro, Georgia · USA</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Md Mahinur Alam. All rights reserved.</p>
          <p>Researcher & Programmer</p>
        </div>
      </div>
    </footer>
  );
}
