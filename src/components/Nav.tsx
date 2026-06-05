import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const links = [
  { to: "/trails", label: "Trails" },
  { to: "/events", label: "Events" },
  { to: "/inishowen", label: "Inishowen" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support Us" },
] as { to: string; label: string }[];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-purple">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
        <Link
          to="/"
          aria-label="inishowen trails"
          className="text-white lowercase whitespace-nowrap flex items-baseline gap-1 leading-none"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 700 }}
        >
          <span className="text-2xl md:text-3xl tracking-tight">inish</span>
          <span className="inline-block size-2 md:size-2.5 rounded-full bg-brand-amber" />
          <span className="text-2xl md:text-3xl tracking-tight">owen trails</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
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
                key={l.label}
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
