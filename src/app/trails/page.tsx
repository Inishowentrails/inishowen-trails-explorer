import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TrailsExplorer } from "./TrailsExplorer";

export const metadata: Metadata = {
  title: "Trails — Inishowen Trails",
  description:
    "Explore 9 trail clusters across the Inishowen peninsula — 80km of traffic-free walking and cycling.",
};

const MAP_SRC = "https://www.google.com/maps/d/embed?mid=14GGFzn3vQMFy3Rr-RRfE7EeGEMI5EEg";

export default function TrailsPage() {
  return (
    <>
      <PageHero title="Explore the Trails" subtitle="9 trail clusters · 80km · 100% off-road" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div
            className="w-full rounded-xl overflow-hidden border"
            style={{ borderColor: "#504087" }}
          >
            <iframe
              title="Inishowen Trails map"
              src={MAP_SRC}
              className="w-full block"
              style={{ height: 500, border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-black/70 text-center">
            Click any trail on the map for location details
          </p>

          <TrailsExplorer />
        </div>
      </section>
    </>
  );
}
