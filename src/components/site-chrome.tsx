import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { club } from "@/lib/club";

const links = [
  { to: "/", label: "Home" },
  { to: "/safety", label: "Safety" },
  { to: "/events", label: "Events" },
  { to: "/new-shooters", label: "Try it free" },
  { to: "/gear", label: "Gear" },
  { to: "/blog", label: "Blog" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/membership", label: "Join" },
  { to: "/donate", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-parchment text-ink">
      <a
        href="#content"
        className="absolute left-4 top-4 z-50 -translate-y-24 bg-cream px-4 py-2 font-semibold text-forest focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <div id="content" className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="camp sticky top-0 z-40 border-b-4 border-double border-brass text-cream">
      <div className="wrap flex items-center justify-between gap-4 py-3.5">
        <Link to="/" className="min-h-12 shrink-0" onClick={() => setOpen(false)}>
          <span className="block text-xs font-bold uppercase tracking-[0.22em] text-brass-bright">Southern Idaho</span>
          <span className="font-display text-[1.7rem] leading-none text-cream">Muzzleloaders</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              className={
                link.to === "/safety"
                  ? "inline-flex min-h-11 items-center px-2.5 text-[0.92rem] font-semibold text-brass-bright hover:text-cream"
                  : "inline-flex min-h-11 items-center px-2.5 text-[0.92rem] font-semibold text-cream/80 hover:text-cream"
              }
              activeProps={{
                className:
                  link.to === "/safety"
                    ? "inline-flex min-h-11 items-center px-2.5 text-[0.92rem] font-semibold text-brass-bright underline decoration-brass-bright decoration-2 underline-offset-8"
                    : "inline-flex min-h-11 items-center px-2.5 text-[0.92rem] font-semibold text-cream underline decoration-brass-bright decoration-2 underline-offset-8",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${club.phoneTel}`} className="btn btn-rust hidden sm:inline-flex">
            <Phone className="size-4" aria-hidden />
            <span className="hidden lg:inline">Try it free: call Leon</span>
            <span className="lg:hidden">Call Leon</span>
          </a>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center border border-cream/40 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-cream/15 bg-forest-deep xl:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                className={
                  link.to === "/safety"
                    ? "flex min-h-12 items-center border-b border-cream/10 text-lg font-semibold text-brass-bright"
                    : "flex min-h-12 items-center border-b border-cream/10 text-lg font-semibold text-cream"
                }
                activeProps={{
                  className: "flex min-h-12 items-center border-b border-cream/10 text-lg font-semibold text-brass-bright",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${club.phoneTel}`} className="flex min-h-12 items-center text-lg font-semibold text-brass-bright">
              Try it free: {club.phoneDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="camp text-cream">
      <div className="wrap grid gap-12 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl leading-tight">Southern Idaho Muzzleloaders</p>
          <p className="mt-4 max-w-xs text-cream/80">{club.mission}</p>
          <p className="mt-4 text-sm text-cream/70">Magic Valley. Shoshone and Twin Falls.</p>
        </div>
        <div>
          <p className="kicker">Visit</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            <li><FooterLink to="/events">Next shoot</FooterLink></li>
            <li><FooterLink to="/new-shooters">Try a shot free</FooterLink></li>
            <li><FooterLink to="/gear">Basic kit</FooterLink></li>
            <li><FooterLink to="/blog">Blog</FooterLink></li>
            <li><FooterLink to="/newsletter">Newsletter</FooterLink></li>
            <li><FooterLink to="/membership">Membership</FooterLink></li>
            <li><FooterLink to="/about">About</FooterLink></li>
            <li><FooterLink to="/gallery">Gallery</FooterLink></li>
            <li><FooterLink to="/safety">Safety</FooterLink></li>
            <li><FooterLink to="/donate">Help the club</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
          </ul>
        </div>
        <div>
          <p className="kicker">Reach Leon Reed</p>
          <p className="mt-4">
            <a className="font-display text-3xl text-cream underline decoration-brass-bright decoration-2 underline-offset-4" href={`tel:${club.phoneTel}`}>
              {club.phoneDisplay}
            </a>
          </p>
          <p className="mt-3 text-cream/80">
            {club.mailing[0]}
            <br />
            {club.mailing[1]}
          </p>
          <p className="mt-4">
            <a
              className="font-semibold text-cream underline decoration-brass-bright underline-offset-4"
              href={club.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              {club.facebookName}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="wrap space-y-2 py-5 text-sm text-cream/75">
          <p>
            {club.legalName}. Affiliated with the Idaho State Rifle & Pistol Association. Dues and a street address are not published here. Ask Leon.
          </p>
          <p>Preview site. Prepared for the club to look over. Not the official live site.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to:
    | "/"
    | "/events"
    | "/new-shooters"
    | "/gear"
    | "/blog"
    | "/newsletter"
    | "/membership"
    | "/about"
    | "/gallery"
    | "/safety"
    | "/donate"
    | "/contact";
  children: React.ReactNode;
}) {
  return (
    <Link to={to} className="text-cream/80 underline decoration-brass/50 underline-offset-4 hover:text-cream">
      {children}
    </Link>
  );
}
