export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-purple pt-32 pb-14 px-5">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-white font-light uppercase tracking-tight text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white/85 text-base md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
