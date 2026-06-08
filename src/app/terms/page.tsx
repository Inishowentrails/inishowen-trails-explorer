import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions — Inishowen Trails",
  description:
    "The terms governing your use of the Inishowen Trails website, operated by North West Community Development (NWCD).",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
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

          <h2>1. About These Terms</h2>
          <p>
            These terms and conditions govern your use of the Inishowen Trails website
            (inishowentrails.ie), operated by North West Community Development (NWCD), a registered
            Irish charity (Charity Number: 20206770).
          </p>
          <p>
            By using this website, you agree to these terms. If you do not agree, please do not use
            the site.
          </p>

          <h2>2. Use of This Website</h2>
          <p>
            You may use this website for personal, non-commercial purposes — for example, to find
            information about trails, events, and local businesses on the Inishowen Peninsula.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site in any way that breaches applicable Irish or EU law</li>
            <li>Copy, reproduce, or redistribute our content without permission</li>
            <li>Attempt to gain unauthorised access to any part of the site or its infrastructure</li>
            <li>
              Use the site to transmit spam, harmful software, or any content that could damage,
              disable, or impair the site
            </li>
          </ul>

          <h2>3. Accuracy of Information</h2>
          <p>
            We make every effort to ensure that the information on this website is accurate and up
            to date. However, trail conditions, business details, event dates, distances, and other
            information can change without notice.
          </p>
          <p>
            <strong>
              We provide all information in good faith but make no warranty — express or implied —
              as to its accuracy, completeness, or suitability for any particular purpose.
            </strong>
          </p>
          <p>
            You should always verify critical information (such as trail conditions, business
            opening hours, or event details) before making plans.
          </p>

          <h2>4. Trail Information</h2>
          <p>
            Information about trails — including distances, difficulty ratings, waymarking, and
            access points — is provided to help you plan your visit. It does not replace sound
            judgement, appropriate preparation, or personal responsibility when using the trails.
          </p>
          <p>
            Trail conditions can change due to weather, maintenance, seasonal access, or other
            factors. We do not guarantee that trails will be open, passable, or in the condition
            described on the site at any given time.
          </p>
          <p>
            Please read our <Link href="/disclaimer">Trail Safety Disclaimer</Link> before using the
            trails.
          </p>

          <h2>5. Links to Third-Party Websites</h2>
          <p>
            Our website contains links to third-party websites, including local businesses listed on
            our /inishowen page. These links are provided for your convenience only.
          </p>
          <p>
            We do not control those websites and are not responsible for their content, accuracy, or
            availability. A link from our site does not imply endorsement of any business, product,
            or service.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website — including text, photography, the Inishowen Trails brand,
            logo, and trail data — is the property of North West Community Development (NWCD) or used
            with permission from rights holders.
          </p>
          <p>
            You may not reproduce, distribute, or use our content for commercial purposes without
            our prior written consent. Personal and non-commercial sharing (such as sharing a link
            or screenshot for social media) is welcome.
          </p>

          <h2>7. Volunteer Enquiries</h2>
          <p>
            Information submitted via our volunteer form is used solely to respond to your enquiry.
            See our <Link href="/privacy-policy">Privacy Policy</Link> for full details of how we
            handle personal data.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by Irish law, NWCD / Inishowen Trails shall not be liable
            for:
          </p>
          <ul>
            <li>Any loss or damage arising from your use of, or inability to use, this website</li>
            <li>Any inaccuracy in trail, event, or business information provided on the site</li>
            <li>Any loss or injury incurred while using the trails</li>
          </ul>
          <p>
            Nothing in these terms limits our liability for fraud, death, or personal injury caused
            by our negligence.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of Ireland. Any disputes arising
            from your use of this website will be subject to the exclusive jurisdiction of the Irish
            courts.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the
            top of this page will reflect the most recent version. Continued use of the site after
            changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any questions about these terms, contact us at{" "}
            <strong>inishowentrails@gmail.com</strong>.
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
