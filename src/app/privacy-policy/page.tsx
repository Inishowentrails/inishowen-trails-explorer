import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — Inishowen Trails",
  description:
    "How North West Community Development (NWCD) / Inishowen Trails collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="bg-white">
        <div className="legal-prose mx-auto max-w-3xl px-5 py-16">
          <div className="legal-meta">
            <strong>Last updated:</strong> June 2026
            <br />
            <strong>Organisation:</strong> North West Community Development (NWCD), trading as
            Inishowen Trails
            <br />
            <strong>Charity Number:</strong> 20206770
            <br />
            <strong>Contact:</strong> inishowentrails@gmail.com
          </div>

          <h2>1. Who We Are</h2>
          <p>
            Inishowen Trails is operated by North West Community Development (NWCD), a registered
            Irish charity (Charity Number: 20206770). We manage a community walking and cycling
            trail network on the Inishowen Peninsula, County Donegal, Ireland.
          </p>
          <p>
            When this policy refers to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;, it
            means NWCD / Inishowen Trails.
          </p>
          <p>
            For data protection purposes, NWCD is the data controller for personal data collected
            through this website.
          </p>

          <h2>2. What Data We Collect and Why</h2>
          <h3>Volunteer Form</h3>
          <p>When you submit our volunteer enquiry form, we collect:</p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Any additional information you choose to include in your message</li>
          </ul>
          <p>
            <strong>Why:</strong> To respond to your enquiry and, where relevant, to contact you
            about volunteering opportunities with Inishowen Trails.
          </p>
          <p>
            <strong>Legal basis:</strong> Legitimate interest (Article 6(1)(f) GDPR) — we have a
            legitimate interest in responding to people who contact us to offer their support.
          </p>
          <h3>Website Analytics (Google Analytics)</h3>
          <p>
            We plan to use Google Analytics to collect anonymised information about how visitors use
            this website. This would include:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>How you arrived at the site (e.g. search engine, social media, direct)</li>
            <li>General location data (country/region level only — not precise location)</li>
            <li>Device type and browser</li>
          </ul>
          <p>
            Google Analytics would set cookies on your device to collect this information, and only
            if you accept analytics cookies. It does not identify you personally.
          </p>
          <p>
            <strong>Why:</strong> To understand how people find and use the site so we can improve
            it.
          </p>
          <p>
            <strong>Legal basis:</strong> Consent (Article 6(1)(a) GDPR) — Google Analytics is not
            currently active. We will only activate it after you have accepted analytics cookies via
            a cookie consent banner, which will be added before any analytics are switched on.
          </p>

          <h2>3. How Long We Keep Your Data</h2>
          <ul>
            <li>
              <strong>Volunteer form submissions:</strong> We retain your contact details for as
              long as is reasonably necessary to manage our volunteer programme. If you ask us to
              delete your information at any time, we will do so promptly.
            </li>
            <li>
              <strong>Google Analytics data:</strong> Retained for 26 months by default within
              Google Analytics, after which it is automatically deleted.
            </li>
          </ul>

          <h2>4. Who We Share Your Data With</h2>
          <p>We do not sell, rent, or trade your personal data to any third party.</p>
          <p>Your data may be processed by the following services on our behalf:</p>
          <ul>
            <li>
              <strong>Google Analytics (Google Ireland Limited):</strong> Website usage data. Google
              may transfer data outside the EEA in accordance with its own privacy terms. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&rsquo;s Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p>We do not share your volunteer enquiry data with any third parties.</p>

          <h2>5. Your Rights</h2>
          <p>Under Irish and EU data protection law, you have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> — request a copy of the personal data we hold about you
            </li>
            <li>
              <strong>Correction</strong> — ask us to correct inaccurate or incomplete data
            </li>
            <li>
              <strong>Erasure</strong> — ask us to delete your personal data (&ldquo;right to be
              forgotten&rdquo;)
            </li>
            <li>
              <strong>Restriction</strong> — ask us to limit how we use your data
            </li>
            <li>
              <strong>Objection</strong> — object to our processing of your data
            </li>
            <li>
              <strong>Withdrawal of consent</strong> — where we rely on consent (e.g. Google
              Analytics), you will be able to withdraw it at any time via our cookie settings once
              they are available
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <strong>inishowentrails@gmail.com</strong>. We will respond within one month.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies on this website. For full details of the cookies we set and how to
            control them, please see our <Link href="/cookie-policy">Cookie Policy</Link>.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable steps to protect any personal data you share with us. Volunteer form
            submissions are transmitted over HTTPS (encrypted). We do not store card or payment data
            of any kind.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
            top of this page will always reflect the most recent version. We encourage you to check
            back periodically.
          </p>

          <h2>9. How to Complain</h2>
          <p>
            If you have concerns about how we handle your personal data, please contact us first at{" "}
            <strong>inishowentrails@gmail.com</strong> and we will do our best to resolve the issue.
          </p>
          <p>
            You also have the right to lodge a complaint with the Irish Data Protection Commission
            (DPC):
          </p>
          <p>
            <strong>Data Protection Commission</strong>
            <br />
            21 Fitzwilliam Square South, Dublin 2, D02 RD28
            <br />
            <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">
              www.dataprotection.ie
            </a>
            <br />
            Phone: +353 (0)1 765 0100
          </p>

          <p>
            <em>
              North West Community Development (NWCD) | Charity No. 20206770 |
              inishowentrails@gmail.com
            </em>
          </p>
        </div>
      </section>
    </>
  );
}
