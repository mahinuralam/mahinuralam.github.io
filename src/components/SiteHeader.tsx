import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/publications", label: "Publications" },
  { to: "/awards", label: "Awards" },
  { to: "/skills", label: "Skills" },
  { to: "/moments", label: "Moments" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            Md Mahinur Alam
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            · Researcher
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-ink"
              activeProps={{ className: "text-ink font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/11Au8J9r7zXLoT97Jx1C631NJBTFX_y7R/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/80 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-primary-foreground"
          >
            CV ↗
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-ink"
                activeProps={{ className: "text-ink font-medium bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/11Au8J9r7zXLoT97Jx1C631NJBTFX_y7R/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md bg-ink px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              Download CV ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
