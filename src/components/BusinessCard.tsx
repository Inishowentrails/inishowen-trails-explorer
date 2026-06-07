"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import type { Business } from "@/data/businesses";

export function BusinessCard({ business }: { business: Business }) {
  // If a real image path is set but the file is missing (404), fall back to the
  // branded placeholder instead of a broken-image icon. `onError` covers loads
  // that fail after hydration; the mount check below covers images that already
  // 404'd during the static-rendered load, before React attached `onError`.
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, []);

  const imageSrc = imageFailed ? null : business.image;
  const { linkUrl } = business;
  const showLocation = business.location !== "" && business.location !== "TBC";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <div className="aspect-[4/3] overflow-hidden">
        {imageSrc ? (
          <img
            ref={imgRef}
            src={imageSrc}
            alt={business.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-brand-purple px-4 text-center"
            style={{
              backgroundImage:
                "radial-gradient(rgba(226,181,63,0.28) 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          >
            <span className="text-sm font-bold uppercase tracking-tight text-brand-amber">
              {business.name}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        {linkUrl ? (
          <a
            href={linkUrl}
            className="text-lg font-bold leading-tight text-brand-purple hover:text-brand-amber"
          >
            {business.name}
          </a>
        ) : (
          <h3 className="text-lg font-bold leading-tight text-brand-purple">
            {business.name}
          </h3>
        )}

        <p className="flex-1 text-sm text-black/80">{business.description}</p>

        {showLocation && (
          <p className="flex items-center gap-1 text-xs text-brand-muted-purple">
            <MapPin size={12} /> {business.location}
          </p>
        )}

        {linkUrl && (
          <a
            href={linkUrl}
            className="mt-1 inline-flex self-start rounded-full bg-brand-amber px-4 py-2 text-sm font-bold text-black transition hover:brightness-95"
          >
            {business.linkLabel}
          </a>
        )}
      </div>
    </article>
  );
}
