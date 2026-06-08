import Image from "next/image";
import { instagramPosts } from "@/data/social";

export default function InstagramGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#504087" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="#504087" stroke="none"/>
          </svg>
          <span className="font-ubuntu font-bold text-[#504087] text-lg tracking-wide">
            @inishowentrails
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 300px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#504087]/0 group-hover:bg-[#504087]/30 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="https://www.instagram.com/inishowentrails"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#504087] font-ubuntu font-bold hover:text-[#E2B53F] transition-colors duration-200"
          >
            Follow us on Instagram →
          </a>
        </div>

      </div>
    </section>
  );
}
