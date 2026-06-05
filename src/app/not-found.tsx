import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-purple">404</h1>
        <h2 className="mt-4 text-xl font-bold uppercase tracking-tight">Page not found</h2>
        <p className="mt-2 text-sm text-black/70">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-amber px-5 py-2.5 text-sm font-bold uppercase tracking-tight text-black hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
