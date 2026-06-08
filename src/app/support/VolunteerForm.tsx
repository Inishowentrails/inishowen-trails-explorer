"use client";

import Link from "next/link";
import { useState } from "react";

export function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", interest: "", consent: false });
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p className="mt-6 text-brand-purple font-bold">Thanks — we'll be in touch.</p>;
  }

  return (
    <form
      className="mt-6 flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        required
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="px-3 py-2 rounded-md border border-black/15 bg-white text-sm"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="px-3 py-2 rounded-md border border-black/15 bg-white text-sm"
      />
      <input
        placeholder="Interest (e.g. trail maintenance)"
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
        className="px-3 py-2 rounded-md border border-black/15 bg-white text-sm"
      />
      <label className="flex items-start gap-2 text-sm text-black/75">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-1 shrink-0"
        />
        <span>
          I agree to be contacted about my enquiry and have read the{" "}
          <Link
            href="/privacy-policy"
            className="text-brand-purple font-bold underline hover:text-brand-amber"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-brand-purple text-white font-bold uppercase tracking-tight px-5 py-3 rounded-md hover:opacity-90"
      >
        Sign up to volunteer
      </button>
    </form>
  );
}
