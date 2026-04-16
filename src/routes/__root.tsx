import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-3 font-display text-6xl text-ink">Page not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-ink bg-ink px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-transparent hover:text-ink"
          >
            ← Back home
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Md Mahinur Alam — Researcher & Programmer" },
      {
        name: "description",
        content:
          "PhD student at Georgia Southern University. Research in Machine/Deep Learning, Computer Vision, Federated Learning, LLMs, and Security & Privacy.",
      },
      { name: "author", content: "Md Mahinur Alam" },
      { property: "og:title", content: "Md Mahinur Alam — Researcher & Programmer" },
      {
        property: "og:description",
        content:
          "PhD student at Georgia Southern University. Researcher in Deep Learning, Computer Vision, Federated Learning, and LLMs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Md Mahinur Alam — Researcher & Programmer" },
      { name: "description", content: "Recreates Google Sites into modern, dynamic academic portfolios with custom styling and SEO-optimized routes." },
      { property: "og:description", content: "Recreates Google Sites into modern, dynamic academic portfolios with custom styling and SEO-optimized routes." },
      { name: "twitter:description", content: "Recreates Google Sites into modern, dynamic academic portfolios with custom styling and SEO-optimized routes." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
