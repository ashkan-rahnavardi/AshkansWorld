import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import RTBBrandsCaseStudy from "@/app/_components/case-study_rtb";

export default function RTBBrands() {
  return (
    <>
      <CustomCursor />

      <div id="project-view" className="container-fluid">
        <div className="row">
          <div className="project-info col-sm-12 col-md-8">
            <div className="project-banner">
              <Image
                src="/rtb/landing.png"
                alt="RTB-LandingPage"
                width={1886}
                height={2666}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/rtb/shop.png"
                alt="RTB-Shop"
                width={1886}
                height={1284}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/rtb/design.png"
                alt="RTB-Design"
                width={1886}
                height={1040}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/rtb/job-board.png"
                alt="RTB-JobBoard"
                width={1886}
                height={848}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/rtb/work-order.png"
                alt="RTB-WorkOrder"
                width={1886}
                height={2100}
              ></Image>
            </div>
          </div>
          {RTBBrandsCaseStudy()}
          {/* <div className="bd-sidebar col-sm-12 col-md-4"> */}
          {/*   <div> */}
          {/*     <p className="mt-0 mb-8"> */}
          {/*       <a className="goBack__button" href="/" title="Go back home"> */}
          {/*         ← */}
          {/*       </a> */}
          {/*       <span className="pull-right"> */}
          {/*         <a */}
          {/*           className="text-primaryGray" */}
          {/*           href="/projects/OverHorizon" */}
          {/*           title="Previous" */}
          {/*         > */}
          {/*           ← */}
          {/*         </a> */}
          {/*         <a className="text-primaryGray"> / </a> */}
          {/*         <a */}
          {/*           className="text-primaryGray" */}
          {/*           href="/projects/Plate-Grabber" */}
          {/*           title="Next" */}
          {/*         > */}
          {/*           → */}
          {/*         </a> */}
          {/*       </span> */}
          {/*     </p> */}
          {/**/}
          {/*     <h1 className=""> */}
          {/*       RTB Brands — B2B Wholesale Platform & 2‑D Quote Tool */}
          {/*     </h1> */}
          {/**/}
          {/*     <div className="projectDescription mb-8"> */}
          {/*       <ul> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold">Role:</strong> Freelance */}
          {/*           Full‑Stack Developer */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold">Engagement:</strong>{" "} */}
          {/*           May&nbsp;2024 → May&nbsp;2025 */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold"> */}
          {/*             Project Timeline: */}
          {/*           </strong>{" "} */}
          {/*           Phased rollout across 12 months */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </div> */}
          {/**/}
          {/*     <div className="chips" aria-label="Quick tags"> */}
          {/*       <span className="chip">B2B</span> */}
          {/*       <span className="chip">WooCommerce</span> */}
          {/*       <span className="chip">WordPress</span> */}
          {/*       <span className="chip">Konva.js</span> */}
          {/*       <span className="chip">AWS</span> */}
          {/*       <span className="chip">CI/CD</span> */}
          {/*       <span className="chip">QuickBooks</span> */}
          {/*       <span className="chip">inFlow</span> */}
          {/*     </div> */}
          {/**/}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold"> */}
          {/*         Project Overview */}
          {/*       </span> */}
          {/*       <br /> */}
          {/*       RTB Brands is a national cabinet &amp; countertop manufacturer. */}
          {/*       I delivered a wholesale e‑commerce portal with role‑based */}
          {/*       pricing, a 2‑D countertop&nbsp;designer with instant quotes, and */}
          {/*       production/installation workflows that connect sales to */}
          {/*       operations and finance. */}
          {/*     </section> */}
          {/**/}
          {/*     <section aria-label="Key results"> */}
          {/*       <div className="stats"> */}
          {/*         <div className="stat"> */}
          {/*           <div className="k">1000+</div> */}
          {/*           <div>Dealers supported nationwide</div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="stat"> */}
          {/*           <div className="k">$1M+</div> */}
          {/*           <div>Annual revenue of B2B sales</div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="stat"> */}
          {/*           <div className="k">90%</div> */}
          {/*           <div>Fewer invoice errors post‑integration</div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Problem</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           Distributors needed secure, role‑based wholesale pricing and */}
          {/*           account terms. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Sales quotes were manual and slow; drawings and specs caused */}
          {/*           repeated back‑and‑forth. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Operations used fragmented tools; finance struggled with */}
          {/*           invoice mismatch and late syncing. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Solution</span> */}
          {/*       <br />A centralized B2B WooCommerce portal with dealer‑level */}
          {/*       pricing, a Konva.js 2‑D design surface for instant quotes, */}
          {/*       integrated production/installation workflows, and */}
          {/*       accounting/inventory sync across QuickBooks and inFlow. */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-bold"> */}
          {/*         Core Product Capabilities */}
          {/*       </span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             Role‑based Wholesale Pricing: */}
          {/*           </strong>{" "} */}
          {/*           tiered price lists, terms, and tax rules per dealer group. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             2‑D Designer &amp; Instant Quote: */}
          {/*           </strong>{" "} */}
          {/*           Konva.js canvas tool generates dimensions, materials, and */}
          {/*           real‑time pricing. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             Order &amp; Installation Workflow: */}
          {/*           </strong>{" "} */}
          {/*           status tracking, document uploads, and automated */}
          {/*           notifications from sale to install. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             Inventory &amp; Accounting Sync: */}
          {/*           </strong>{" "} */}
          {/*           QuickBooks + inFlow integrations for invoices, stock, and */}
          {/*           customer records. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Admin Controls:</strong> RBAC, */}
          {/*           audit trails, and change logs for operations and finance. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-extrabold">My Contributions</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           Delivered the B2B WooCommerce store with dealer‑group */}
          {/*           pricing and custom checkout rules. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Built the Konva.js 2‑D designer and instant‑quote engine */}
          {/*           with pricing formulas and exportable specs. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Implemented QuickBooks &amp; inFlow sync for invoices, */}
          {/*           inventory, and customers; reduced errors by 90%. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Containerized the stack; set up AWS hosting and GitHub */}
          {/*           Actions CI/CD for safe, zero‑downtime releases. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Defined workflows, acceptance criteria, and ran stakeholder */}
          {/*           demos to iterate quickly. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="pt-4" aria-label="Architecture"> */}
          {/*       <div className="projectDescription_text"> */}
          {/*         <span className="text-2xl font-extrabold"> */}
          {/*           Architecture &amp; Stack */}
          {/*         </span> */}
          {/*         <ul> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Frontend:</strong>{" "} */}
          {/*             JavaScript, Konva.js&nbsp;(HTML5 Canvas), AJAX */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Backend &amp; CMS:</strong>{" "} */}
          {/*             PHP, WordPress, WooCommerce (custom plugins) */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Data:</strong> MySQL; REST */}
          {/*             integrations (QuickBooks, inFlow) */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Infra &amp; CI/CD:</strong>{" "} */}
          {/*             AWS, Docker, GitHub Actions */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Security:</strong> RBAC, */}
          {/*             per‑dealer pricing scopes, audit logs */}
          {/*           </li> */}
          {/*         </ul> */}
          {/*       </div> */}
          {/**/}
          {/*       <div className="projectDescription_text"> */}
          {/*         <span className="text-xl font-extrabold"> */}
          {/*           Why this approach? */}
          {/*         </span> */}
          {/*         <ul className="list-disc list-inside pl-4"> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Speed + Fit:</strong>{" "} */}
          {/*             WooCommerce + custom plugins let us meet complex wholesale */}
          {/*             needs quickly. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Operational Flow:</strong>{" "} */}
          {/*             Designer → quote → order → install is tracked end‑to‑end. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Source of Truth:</strong>{" "} */}
          {/*             Accounting and inventory stay in sync to prevent */}
          {/*             mismatches. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Reliability:</strong>{" "} */}
          {/*             Containerized services and CI/CD ensure frequent, safe */}
          {/*             releases. */}
          {/*           </li> */}
          {/*         </ul> */}
          {/*       </div> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Outcomes</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong>Nationwide dealer adoption</strong> with role‑based */}
          {/*           pricing and terms. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong>Quote time cut to minutes</strong> via the 2‑D */}
          {/*           designer and instant pricing. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong>90% fewer invoice errors</strong> with automated */}
          {/*           finance & inventory sync. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong>Zero‑downtime deployments</strong> through CI/CD and */}
          {/*           blue‑green style releases. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-extrabold"> */}
          {/*         Process Notes &amp; Lessons */}
          {/*       </span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Dealer discovery:</strong>{" "} */}
          {/*           mapped price tiers, account terms, and exceptions early to */}
          {/*           avoid rework. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Quote fidelity:</strong>{" "} */}
          {/*           canvas tooling + parameterized pricing eliminated spec */}
          {/*           ambiguity. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Integrations first:</strong>{" "} */}
          {/*           aligning QuickBooks/inFlow schemas up front prevented */}
          {/*           downstream data drift. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Release hygiene:</strong>{" "} */}
          {/*           CI/CD with previews kept stakeholders in the loop and */}
          {/*           reduced cycle time. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/*   </div> */}
          {/**/}
          {/*   <div className="flex w-full justify-center py-8"> */}
          {/*     <a className="btn" href="https://rtbbrands.com/" target="_blank"> */}
          {/*       Visit Live Site */}
          {/*     </a> */}
          {/*   </div> */}
          {/*   <div className="divider-line text-primary mt-4">01</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
