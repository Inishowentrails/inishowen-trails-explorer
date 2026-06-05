"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold uppercase tracking-tight">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-black/70">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md bg-brand-amber px-5 py-2.5 text-sm font-bold uppercase tracking-tight text-black hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-brand-purple px-5 py-2.5 text-sm font-bold uppercase tracking-tight text-brand-purple hover:bg-brand-purple hover:text-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
