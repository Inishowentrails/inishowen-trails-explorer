import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/trails", label: "Trails", hash: undefined },
  { to: "/", label: "Events", hash: "events" },
  { to: "/inishowen", label: "Inishowen", hash: undefined },
  { to: "/about", label: "About", hash: undefined },
  { to: "/support", label: "Support Us", hash: undefined },
] as { to: string; label: string; hash?: string }[];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-brand-purple" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1 leading-none">
          <span className="text-white font-bold uppercase tracking-tight text-xl">
            inish
          </span>
          <span className="inline-block size-2 rounded-full bg-brand-amber" />
          <span className="text-white font-bold uppercase tracking-tight text-xl">
            owen trails
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-white text-sm font-normal hover:text-brand-amber transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-purple border-t border-white/10">
          <div className="flex flex-col p-5 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white text-base font-normal py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
