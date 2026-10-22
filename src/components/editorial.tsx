import { Link } from "@tanstack/react-router";
import { club } from "@/lib/club";

export function Rule({ light = false }: { light?: boolean }) {
  return (
    <div className={light ? "rule rule-light mt-6" : "rule mt-6"} aria-hidden="true">
      <span />
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  lede,
  children,
  tone = "light",
}: {
  kicker: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <header className={dark ? "camp border-b-4 border-double border-brass" : undefined}>
      <div className="wrap py-16 md:py-24">
        <p className="kicker">{kicker}</p>
        <h1 className={dark ? "display mt-4 max-w-4xl text-cream" : "display mt-4 max-w-4xl text-forest"}>
          {title}
        </h1>
        <Rule light={dark} />
        <p className={dark ? "mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl" : "mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"}>
          {lede}
        </p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}

export function CallLeon({
  title = "Try it free. Call Leon first.",
  body = "A first visit is free when you call before you come. The shooting is in Shoshone. The mail is in Twin Falls. Both towns are the Magic Valley.",
  children,
}: {
  title?: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="camp">
      <div className="wrap grid items-center gap-8 py-14 md:grid-cols-[1.4fr_auto] md:py-16">
        <div>
          <p className="kicker">Try it free</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-cream md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{body}</p>
          {children ? <div className="mt-5 flex flex-wrap gap-4">{children}</div> : null}
        </div>
        <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
          Try it free: call Leon
        </a>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line last:border-b-0">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-3 font-display text-2xl leading-tight text-forest">
            {item.q}
            <span aria-hidden className="text-brass-deep text-xl group-open:hidden">
              +
            </span>
            <span aria-hidden className="text-brass-deep hidden text-xl group-open:inline">
              –
            </span>
          </summary>
          <p className="max-w-2xl pb-5 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: "/" | "/events" | "/new-shooters" | "/gear" | "/blog" | "/newsletter" | "/membership" | "/about" | "/gallery" | "/safety" | "/donate" | "/contact";
  children: React.ReactNode;
}) {
  return (
    <Link to={to} className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4 hover:text-leather">
      {children}
    </Link>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4 hover:text-leather"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
