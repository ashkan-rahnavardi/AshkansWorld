import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import OverHorizonCaseStudy from "@/app/_components/case-study_overhorizon";

export default function OverHorizon() {
  return (
    <>
      <CustomCursor />

      <div id="project-view" className="container-fluid">
        <div className="row">
          <div className="project-info col-sm-12 col-md-8">
            <div className="project-banner">
              <Image
                src="/overhorizon/landing.png"
                alt="OverHorizon-LandingPage"
                width={1886}
                height={2517}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/overhorizon/mariner.png"
                alt="OverHorizon-Mariner"
                width={1886}
                height={675}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/overhorizon/all-jobs.png"
                alt="OverHorizon-AllJobs"
                width={1886}
                height={1546}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/overhorizon/employer.png"
                alt="OverHorizon-Employer"
                width={1886}
                height={885}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/overhorizon/all-mariners.png"
                alt="OverHorizon-AllMariners"
                width={1886}
                height={1612}
              ></Image>
            </div>
          </div>
          {OverHorizonCaseStudy()}
          {/* <div className="bd-sidebar col-sm-12 col-md-4"> */}
          {/*   <div> */}
          {/*     <p className="mt-0 mb-8"> */}
          {/*       <a className="goBack__button" href="/" title="Go back home"> */}
          {/*         ← */}
          {/*       </a> */}
          {/*       <span className="pull-right"> */}
          {/*         <a */}
          {/*           className="text-primaryGray" */}
          {/*           href="/projects/RTBBrands" */}
          {/*           title="Next" */}
          {/*         > */}
          {/*           → */}
          {/*         </a> */}
          {/*       </span> */}
          {/*     </p> */}
          {/*     <h1 className=""> */}
          {/*       Over Horizon - Vetted HR Platform for Mariners */}
          {/*     </h1> */}
          {/*     <div className="projectDescription mb-8"> */}
          {/*       <ul> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold">Role:</strong> Freelance */}
          {/*           Full-Stack Developer */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold">Engagement:</strong>{" "} */}
          {/*           Sep&nbsp;2024 → Present */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-extrabold">MVP Timeline:</strong>{" "} */}
          {/*           ~12 weeks to launch */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </div> */}
          {/*     {/* <p className="projectDescription_text"> */} */}
          {/*     {/*   A centralized job platform connecting skilled immigrant mariners */} */}
          {/*     {/*   (e.g., from Ukraine and abroad) with verified Canadian shipping */} */}
          {/*     {/*   employers. Built and launched as a revenue-generating MVP in 3 */} */}
          {/*     {/*   months. */} */}
          {/*     {/* </p> */} */}
          {/*     <div className="chips" aria-label="Quick tags"> */}
          {/*       <span className="chip">MVP</span> */}
          {/*       <span className="chip">WordPress</span> */}
          {/*       <span className="chip">PHP</span> */}
          {/*       <span className="chip">Startup</span> */}
          {/*       <span className="chip">AWS</span> */}
          {/*     </div> */}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold"> */}
          {/*         Project Overview */}
          {/*       </span> */}
          {/*       <br /> */}
          {/*       Over Horizon solves a visibility and trust problem: experienced */}
          {/*       mariners struggle to discover Canadian job openings unless they */}
          {/*       already know which companies to approach, and employers have */}
          {/*       limited confidence in applicant legitimacy. The platform */}
          {/*       centralizes vetted job postings and provides a verified */}
          {/*       candidate pool, creating a faster and safer hiring experience */}
          {/*       for both sides. */}
          {/*     </section> */}
          {/*     <section aria-label="Key results"> */}
          {/*       <div className="stats"> */}
          {/*         <div className="stat"> */}
          {/*           <div className="k">90 Days</div> */}
          {/*           <div>from concept to revenue</div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="stat"> */}
          {/*           <div className="k">50+</div> */}
          {/*           <div>Paying users in Q1</div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="stat"> */}
          {/*           <div className="k">83%</div> */}
          {/*           <div>Weekly active retention</div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </section> */}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Problem</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           No central, industry-specific job board for mariners seeking */}
          {/*           Canadian roles. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Employers lacked confidence in applicant authenticity and */}
          {/*           credentials. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Fragmented processes for posting jobs, managing applicants, */}
          {/*           and collecting payments. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/**/}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Solution</span> */}
          {/*       <br />A centralized, vetted HR platform with role-specific */}
          {/*       onboarding, secure resume handling, and built-in monetization. */}
          {/*       The product supports three main user groups—mariners, employers, */}
          {/*       and operations/admin—each with the tools they need to move from */}
          {/*       discovery to hire. */}
          {/*     </section> */}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-bold"> */}
          {/*         Core Product Capabilities */}
          {/*       </span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Vetted Talent Pool:</strong>{" "} */}
          {/*           Resume verification workflow by the Over Horizon team to */}
          {/*           ensure employer trust. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             Centralized Job Postings: */}
          {/*           </strong>{" "} */}
          {/*           Employers publish openings and review verified candidates in */}
          {/*           one place. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold"> */}
          {/*             Secure Resume Delivery: */}
          {/*           </strong>{" "} */}
          {/*           Token-based links prevent unauthorized access or sharing of */}
          {/*           candidate data. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Monetization:</strong>{" "} */}
          {/*           Subscriptions and pay-per-post options tailored to each user */}
          {/*           group. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Billing Automation:</strong>{" "} */}
          {/*           Recurring payments via WooCommerce Subscriptions and custom */}
          {/*           plugins. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-extrabold">My Contributions</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           Led discovery, scoping, and delivery from concept to AWS */}
          {/*           production in ~12 weeks. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Implemented the multi-tier monetization model (subscriptions */}
          {/*           + pay-per-post) across 3 user groups. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Built the secure, token-based resume delivery mechanism and */}
          {/*           verification workflow. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Developed a custom WordPress theme and plugins; integrated */}
          {/*           WooCommerce Subscriptions for recurring billing. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Set up CI/CD and cloud infrastructure; ran weekly */}
          {/*           stakeholder demos to accelerate iteration. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/*     <section className="pt-4" aria-label="Architecture"> */}
          {/*       <div className="projectDescription_text"> */}
          {/*         <span className="text-2xl font-extrabold"> */}
          {/*           Architecture &amp; Stack */}
          {/*         </span> */}
          {/*         <ul> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Frontend:</strong>{" "} */}
          {/*             JavaScript, AJAX, jQuery */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Backend &amp; CMS:</strong>{" "} */}
          {/*             PHP, WordPress, custom plugins */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Payments:</strong>{" "} */}
          {/*             WooCommerce + Subscriptions */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Data:</strong> MySQL, REST */}
          {/*             APIs */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Infra &amp; CI/CD:</strong>{" "} */}
          {/*             AWS, Docker, GitHub Actions */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Security:</strong>{" "} */}
          {/*             Role-based access control, tokenized resume delivery */}
          {/*           </li> */}
          {/*         </ul> */}
          {/*       </div> */}
          {/*       <div className="projectDescription_text"> */}
          {/*         <span className="text-xl font-extrabold"> */}
          {/*           Why this approach? */}
          {/*         </span> */}
          {/*         <ul className="list-disc list-inside pl-4"> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Speed to market:</strong>{" "} */}
          {/*             MVP shipped quickly with a stack that balances velocity */}
          {/*             and maintainability. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold"> */}
          {/*               Built-in monetization: */}
          {/*             </strong>{" "} */}
          {/*             WooCommerce Subscriptions provides reliable recurring */}
          {/*             billing. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Operational trust:</strong>{" "} */}
          {/*             Verification workflows + secure delivery address employer */}
          {/*             concerns. */}
          {/*           </li> */}
          {/*           <li> */}
          {/*             <strong className="font-bold">Scalability:</strong>{" "} */}
          {/*             Containerized services and CI/CD enable safe, frequent */}
          {/*             releases. */}
          {/*           </li> */}
          {/*         </ul> */}
          {/*       </div> */}
          {/*     </section> */}
          {/*     <section className="projectDescription_text pt-4"> */}
          {/*       <span className="text-2xl font-extrabold">Outcomes</span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong>Revenue-generating MVP</strong> delivered in 3 */}
          {/*           months. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong>50+ paying users</strong> within the first quarter */}
          {/*           after launch. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Facilitated <strong>investor demo meetings</strong> for the */}
          {/*           founding team. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           Faster iteration cycles through weekly stakeholder demos and */}
          {/*           feedback loops. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/*     <section className="projectDescription_text"> */}
          {/*       <span className="text-xl font-extrabold"> */}
          {/*         Process Notes &amp; Lessons */}
          {/*       </span> */}
          {/*       <ul className="list-disc list-inside pl-4"> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Discovery to scope:</strong>{" "} */}
          {/*           early workshops clarified user roles (mariner, employer, */}
          {/*           admin) and the verification requirement. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Risk reduction:</strong>{" "} */}
          {/*           tokenized resume links + verification workflows addressed */}
          {/*           core trust issues from day one. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Monetization design:</strong>{" "} */}
          {/*           offering both subscriptions and pay-per-post lowered */}
          {/*           adoption friction for different user types. */}
          {/*         </li> */}
          {/*         <li> */}
          {/*           <strong className="font-bold">Delivery rhythm:</strong>{" "} */}
          {/*           weekly demos reduced turnaround time for priority features */}
          {/*           by ~30%. */}
          {/*         </li> */}
          {/*       </ul> */}
          {/*     </section> */}
          {/*     <div className="flex w-full justify-center py-8"> */}
          {/*       <a */}
          {/*         className="btn" */}
          {/*         href="https://over-horizon-mariners.com/" */}
          {/*         target="_blank" */}
          {/*       > */}
          {/*         Visit Live Site */}
          {/*       </a> */}
          {/*     </div> */}
          {/*   </div> */}
          {/*   <div className="divider-line text-primary mt-4">00</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
