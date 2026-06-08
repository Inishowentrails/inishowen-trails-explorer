import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy — Inishowen Trails",
  description:
    "How North West Community Development (NWCD) / Inishowen Trails uses cookies, and how you can control them.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="bg-white">
        <div className="legal-prose mx-auto max-w-3xl px-5 py-16">
          <div className="legal-meta">
            <strong>Last updated:</strong> June 2026
            <br />
            <strong>Organisation:</strong> North West Community Development (NWCD), trading as
            Inishowen Trails
            <br />
            <strong>Contact:</strong> inishowentrails@gmail.com
          </div>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are
            widely used to make websites work, remember your preferences, and provide information to
            website owners about how their site is being used.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for one purpose only: <strong>website analytics</strong>.
          </p>
          <p>
            We do not use cookies for advertising, profiling, or any purpose beyond understanding
            how our website is used so we can improve it.
          </p>
          <p>
            Analytics are not currently active on this website, and no analytics cookies are set. A
            cookie consent banner will be added before Google Analytics is activated, and analytics
            cookies will only be set if you accept them.
          </p>

          <h2>3. Cookies We Set</h2>
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function. They do not track you and do
            not require your consent.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cookie consent preference</td>
                <td>Remembers whether you have accepted or declined analytics cookies</td>
                <td>12 months</td>
              </tr>
            </tbody>
          </table>
          <h3>Analytics Cookies (Google Analytics) — only set with your consent</h3>
          <p>
            If you accept analytics cookies (once analytics are activated), Google Analytics will
            place the following cookies on your device:
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>_ga</code>
                </td>
                <td>Distinguishes unique users by assigning a randomly generated number</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>
                  <code>_ga_*</code>
                </td>
                <td>Used by Google Analytics 4 to persist session state</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>
                  <code>_gid</code>
                </td>
                <td>Distinguishes users — stores and updates a unique value for each page visited</td>
                <td>24 hours</td>
              </tr>
            </tbody>
          </table>
          <p>
            These cookies collect information about how you use our website — which pages you visit,
            how long you spend on each page, and how you arrived. This information is aggregated and
            anonymised; it does not identify you personally.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Google Analytics is operated by Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Ireland.
          </p>
          <p>
            Google may process data outside the European Economic Area (EEA). For more information
            on how Google handles data, see{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&rsquo;s Privacy Policy
            </a>
            .
          </p>
          <p>
            We have no control over third-party cookies set by Google beyond enabling or disabling
            Google Analytics entirely.
          </p>

          <h2>5. Your Choices</h2>
          <p>
            Before we activate Google Analytics, we will add a cookie consent banner.{" "}
            <strong>When the banner is in place</strong>, it will ask whether you accept analytics
            cookies the first time you visit the site. You will be able to:
          </p>
          <ul>
            <li>
              <strong>Accept</strong> — Google Analytics will be activated and the analytics cookies
              listed above will be set
            </li>
            <li>
              <strong>Decline</strong> — Google Analytics will not load and no analytics cookies
              will be set
            </li>
          </ul>
          <p>
            <strong>To change your mind at any time</strong>, you will be able to update your cookie
            preferences via a cookie settings link in the footer of our website, which will be added
            alongside the banner.
          </p>
          <p>
            You can also control cookies directly through your browser settings. Most browsers allow
            you to block or delete cookies. Note that blocking essential cookies may affect how the
            website functions.
          </p>
          <p>
            For more information on managing cookies, visit{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
              www.aboutcookies.org
            </a>
            .
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            If we change the cookies we use (for example, by adding a new service), we will update
            this policy and the &ldquo;Last updated&rdquo; date at the top of the page.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have any questions about how we use cookies, please contact us at{" "}
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
