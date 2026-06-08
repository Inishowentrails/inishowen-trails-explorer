import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility Statement — Inishowen Trails",
  description:
    "Our commitment to making the Inishowen Trails website accessible to everyone, aiming for WCAG 2.1 Level AA.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="Accessibility Statement" />
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

          <h2>Our Commitment</h2>
          <p>
            North West Community Development (NWCD) / Inishowen Trails is committed to making this
            website accessible to everyone, including people with disabilities. We want everyone to
            be able to find information about our trails, events, and local businesses without
            barriers.
          </p>
          <p>
            As a grant-funded charity supported by Sport Ireland, Donegal County Council, and the
            Government of Ireland, we recognise the importance of meeting public accessibility
            standards.
          </p>
          <p>
            We aim to meet the{" "}
            <strong>Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>.
          </p>

          <h2>How Accessible This Website Is</h2>
          <p>
            We have designed this website with accessibility in mind. The following features are in
            place:
          </p>
          <ul>
            <li>All pages use semantic HTML to support screen readers and assistive technologies</li>
            <li>Colour contrast ratios are designed to meet WCAG 2.1 AA minimum standards</li>
            <li>Text can be resized without loss of functionality</li>
            <li>The site is navigable using a keyboard</li>
            <li>The site is responsive and works on mobile, tablet, and desktop devices</li>
            <li>All external links are clearly labelled</li>
          </ul>

          <h2>Known Limitations</h2>
          <p>We are aware of the following areas where accessibility could be improved:</p>
          <ul>
            <li>
              <strong>Trail photography:</strong> Some images currently do not have descriptive alt
              text. We are working to address this.
            </li>
            <li>
              <strong>PDF downloads:</strong> Where trail information is available as PDF, these may
              not be fully accessible to screen readers. We will address this as trail PDFs are added
              to the site.
            </li>
            <li>
              <strong>Interactive map:</strong> A trail map is planned for a future version of the
              site. When built, we will ensure it includes accessible alternatives for users who
              cannot interact with a map interface.
            </li>
          </ul>

          <div className="legal-note">
            <p>
              ⚠️ <strong>NOTE FOR KEVIN &amp; CATHERINE — REVIEW NEEDED:</strong> The line below
              describes the team as &ldquo;unfunded&rdquo; — but given NWCD receives grants from
              Sport Ireland and Donegal County Council, this may be inaccurate and could contradict
              your charity&rsquo;s public funding position. Please confirm whether to replace with
              &ldquo;small community team&rdquo; or another description before this page goes live.
            </p>
          </div>

          <p>
            We are an unfunded volunteer team and are working to address these issues as resources
            allow.
          </p>

          <h2>Feedback and Contact</h2>
          <p>
            We welcome feedback on the accessibility of this website. If you experience any barriers,
            or if there is content you cannot access, please let us know and we will do our best to
            help.
          </p>
          <p>
            <strong>Email:</strong> inishowentrails@gmail.com
          </p>
          <p>We aim to respond to accessibility queries within 5 working days.</p>

          <h2>Enforcement</h2>
          <p>
            If you are not satisfied with our response, you can contact the relevant enforcement body
            in Ireland:
          </p>
          <p>
            <strong>Irish Human Rights and Equality Commission (IHREC)</strong>
            <br />
            16–22 Green Street, Dublin 7, D07 CR20
            <br />
            <a href="https://www.ihrec.ie" target="_blank" rel="noopener noreferrer">
              www.ihrec.ie
            </a>
          </p>

          <h2>Technical Information</h2>
          <p>
            This website is built using Next.js 15 and deployed on Vercel. It uses standard HTML,
            CSS, and JavaScript. No plugins are required to access any content on the site.
          </p>
          <p>This statement was prepared in June 2026.</p>

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
