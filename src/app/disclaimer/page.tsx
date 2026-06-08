import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Trail Safety Disclaimer — Inishowen Trails",
  description:
    "Important safety information for using the Inishowen Trails network. Use of all trails is entirely at your own risk.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Trail Safety Disclaimer" />
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

          <div className="legal-note">
            <p>
              ⚠️ <strong>NOTE FOR KEVIN &amp; CATHERINE:</strong> This page must be reviewed and
              approved by you before the website goes live. Please check that all safety guidance,
              emergency information, and trail descriptions accurately reflect conditions on the
              ground. Contact: inishowentrails@gmail.com
            </p>
          </div>

          <h2>Your Safety Is Your Responsibility</h2>
          <p>
            The trails managed by Inishowen Trails are open to the public and free to use. Trail
            information on this website — including distances, difficulty ratings, surface
            conditions, and waymarking — is provided in good faith to help you plan your visit.
          </p>
          <p>
            <strong>Use of all trails is entirely at your own risk.</strong>
          </p>
          <p>
            North West Community Development (NWCD) / Inishowen Trails accepts no liability for any
            injury, loss, or damage suffered as a result of using the trails.
          </p>

          <h2>Before You Go</h2>
          <p>
            <strong>Know your ability.</strong> Our trails are graded Easy, Moderate, and
            Challenging. Choose a trail that matches your fitness level and experience. Difficulty
            ratings are a general guide only — sections of any trail may be harder than the overall
            grade suggests, particularly in wet or winter conditions.
          </p>
          <p>
            <strong>Check the weather.</strong> Donegal weather can change quickly. Mountain trails
            such as Sliabh Sneacht (615m) require particular care in low visibility, high wind, or
            icy conditions. Do not attempt exposed or elevated routes in severe weather.
          </p>
          <p>
            <strong>Tell someone your plan.</strong> Always let a responsible person know where you
            are going and when you expect to return.
          </p>
          <p>
            <strong>Bring the right gear.</strong> Even on short routes, we recommend:
          </p>
          <ul>
            <li>Sturdy footwear appropriate to the terrain (walking boots for mountain and hill trails)</li>
            <li>Waterproof and windproof outer layers</li>
            <li>Sufficient food and water</li>
            <li>A fully charged mobile phone</li>
            <li>A map or downloaded route if you are unfamiliar with the area</li>
          </ul>
          <p>
            <strong>Children and dogs.</strong> All our trails are off-road and traffic-free, making
            them suitable for families and dogs. Young children and dogs should be supervised at all
            times, particularly near water, steep sections, or uneven ground.
          </p>

          <h2>Trail Conditions</h2>
          <p>Trail surfaces, waymarking, access points, and facilities can change due to:</p>
          <ul>
            <li>Seasonal weather and ground conditions</li>
            <li>Maintenance and improvement works</li>
            <li>Unforeseen damage or closures</li>
          </ul>
          <p>
            We do our best to keep the website up to date, but we cannot guarantee that conditions
            will match what is described at any given time.{" "}
            <strong>Always exercise caution and turn back if conditions are unsafe.</strong>
          </p>

          <h2>In an Emergency</h2>
          <p>If you or someone in your group requires emergency assistance:</p>
          <p>
            <strong>Call 999 or 112</strong>
          </p>
          <p>
            Request the appropriate emergency service — Mountain Rescue, Ambulance, or Coastguard.
          </p>
          <p>When calling from a remote location, try to provide:</p>
          <ul>
            <li>Your name and the number of people in your group</li>
            <li>A description of your location — trail name, nearest landmark, grid reference if available</li>
            <li>The nature of the emergency</li>
          </ul>
          <p>
            Donegal Mountain Rescue Team covers the Inishowen Peninsula and responds to incidents in
            the upland areas including Sliabh Sneacht.
          </p>
          <p>
            <strong>Mobile coverage</strong> can be limited in some remote sections of the trails.
            Inform someone of your route before setting out.
          </p>

          <h2>Limitations of Our Liability</h2>
          <p>North West Community Development (NWCD) / Inishowen Trails:</p>
          <ul>
            <li>Does not warrant that trails are free from hazards at all times</li>
            <li>Does not accept responsibility for accidents, injuries, or losses arising from trail use</li>
            <li>Does not accept responsibility for third-party information, maps, or links provided on this website</li>
          </ul>
          <p>
            Nothing in this disclaimer limits liability for death or personal injury caused by our
            negligence, or for any other liability that cannot be excluded under Irish law.
          </p>

          <h2>Reporting a Hazard</h2>
          <p>
            If you encounter a safety hazard, damaged waymarking, or a blocked path, please let us
            know so we can address it.
          </p>
          <p>
            <strong>Contact:</strong> inishowentrails@gmail.com
          </p>
          <p>We take all reports seriously and will follow up as quickly as possible.</p>

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
