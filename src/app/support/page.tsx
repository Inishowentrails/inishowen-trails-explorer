import type { Metadata } from "next";
import { Instagram, Facebook, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "./VolunteerForm";

export const metadata: Metadata = {
  title: "Support Us — Inishowen Trails",
  description:
    "Support Inishowen Trails — donate, volunteer, or sponsor a trail. Registered Irish charity 20206770.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero title="Support Inishowen Trails" />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="max-w-3xl text-lg text-black/85 leading-relaxed">
            We're a registered charity building something remarkable in one of Ireland's most
            overlooked corners. Every contribution — big or small — goes directly into trail
            development, maintenance, and community events.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-brand-cloud rounded-xl p-7 flex flex-col">
              <h3 className="font-bold uppercase tracking-tight text-brand-purple text-xl">
                Donate
              </h3>
              <p className="mt-3 text-black/80 flex-1">
                Support the trails directly. Every euro funds maintenance, new waymarking, and
                community events.
              </p>
              <a
                href="#donate"
                className="mt-6 inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-5 py-3 rounded-md hover:opacity-90"
              >
                Donate now
              </a>
            </div>

            <div className="bg-brand-cloud rounded-xl p-7 flex flex-col">
              <h3 className="font-bold uppercase tracking-tight text-brand-purple text-xl">
                Volunteer
              </h3>
              <p className="mt-3 text-black/80 flex-1">
                Join a trail maintenance day or help at one of our monthly events.
              </p>
              <VolunteerForm />
            </div>

            <div className="bg-brand-cloud rounded-xl p-7 flex flex-col">
              <h3 className="font-bold uppercase tracking-tight text-brand-purple text-xl">
                Sponsor a trail
              </h3>
              <p className="mt-3 text-black/80 flex-1">
                Local business or diaspora? Put your name to a trail. Get in touch to discuss
                sponsorship packages.
              </p>
              <a
                href="mailto:inishowentrails@gmail.com"
                className="mt-6 inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-5 py-3 rounded-md hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-purple text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold uppercase tracking-tight text-3xl">Get in touch</h2>
            <p className="mt-3 text-white/85">
              We'd love to hear from you — partners, supporters, walkers and friends.
            </p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-amber" />
              <a href="mailto:inishowentrails@gmail.com" className="hover:text-brand-amber">
                inishowentrails@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-brand-amber" />
              <a href="https://instagram.com/inishowentrails" className="hover:text-brand-amber">
                @inishowentrails
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook size={18} className="text-brand-amber" />
              <a href="https://facebook.com/inishowentrails" className="hover:text-brand-amber">
                /inishowentrails
              </a>
            </li>
            <li className="text-white/75 text-sm pt-2">Charity No: 20206770</li>
          </ul>
        </div>
      </section>
    </>
  );
}
