"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/trails", label: "Trails" },
  { href: "/events", label: "Events" },
  { href: "/inishowen", label: "Inishowen" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-purple">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
        <Link href="/" aria-label="inishowen trails" className="flex items-center">
          <img src="/logo.jpeg" alt="inishowen trails" style={{ height: 64, width: "auto" }} />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
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
                href={l.href}
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
