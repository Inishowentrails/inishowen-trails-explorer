import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-1 leading-none mb-4">
            <span className="font-bold uppercase tracking-tight text-2xl">inish</span>
            <span className="inline-block size-2 rounded-full bg-brand-amber" />
            <span className="font-bold uppercase tracking-tight text-2xl">owen trails</span>
          </div>
          <p className="text-sm text-white/85">inishowentrails@gmail.com</p>
          <p className="text-sm text-white/85">inishowentrails.ie</p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://instagram.com/inishowentrails"
              aria-label="Instagram"
              className="size-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-amber hover:border-brand-amber hover:text-black transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com/inishowentrails"
              aria-label="Facebook"
              className="size-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-amber hover:border-brand-amber hover:text-black transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-tight text-sm mb-4">Quick links</h4>
          <ul className="space-y-2 text-sm text-white/85">
            <li><Link to="/trails" className="hover:text-brand-amber">Trails</Link></li>
            <li><Link to="/#events" className="hover:text-brand-amber">Events</Link></li>
            <li><Link to="/inishowen" className="hover:text-brand-amber">Inishowen</Link></li>
            <li><Link to="/about" className="hover:text-brand-amber">About</Link></li>
            <li><Link to="/support" className="hover:text-brand-amber">Support Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-brand-purple font-bold text-sm lowercase">nw</span>
            </div>
            <span className="text-sm font-normal lowercase">
              north west community development
            </span>
          </div>
          <p className="text-xs text-white/75 mb-1">Charity No: 20206770</p>
          <p className="text-xs text-white/75">
            Supported by Sport Ireland &amp; Donegal County Council
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-white/65 text-center">
          © 2025 Inishowen Trails / North West Community Development. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
