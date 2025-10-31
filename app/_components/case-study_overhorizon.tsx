export default function OverHorizonCaseStudy() {
  return (
    <div className="bd-sidebar col-sm-12 col-md-4">
      <div>
        <p className="mt-0 mb-8">
          <a className="goBack__button" href="/" title="Go back home">
            ←
          </a>
          <span className="pull-right">
            <a
              className="text-primaryGray font-bold text-lg"
              href="/projects/RTBBrands"
              title="Next"
            >
              →
            </a>
          </span>
        </p>

        <h1 className="text-display-md mb-4">
          Over Horizon — Vetted HR Platform for Mariners
        </h1>

        <div className=" mb-4 text-body">
          <ul>
            <li>
              <span className="font-bold">Role:</span> Freelance Full-Stack
              Developer
            </li>
            <li>
              <span className="font-bold">Engagement:</span> Sep&nbsp;2024 →
              Present
            </li>
            <li>
              <span className="font-bold">MVP Timeline:</span> ~12 weeks to
              launch
            </li>
          </ul>
        </div>

        <div className="chips" aria-label="Quick tags">
          <span className="chip">🚀 MVP</span>
          <span className="chip">🌐 WordPress</span>
          <span className="chip">🐘 PHP</span>
          <span className="chip">🧩 Startup</span>
          <span className="chip">☁️ AWS</span>
        </div>

        <section className="projectDescription_text pt-8">
          {/* <span className="text-2xl font-extrabold">📖 Project Overview</span> */}
          <h2 className="text-h2 mb-2">📖 Project Overview</h2>
          <p className="text-body">
            Over Horizon solves a visibility and trust problem: experienced
            mariners struggle to discover Canadian job openings unless they
            already know which companies to approach, and employers have limited
            confidence in applicant legitimacy. The platform centralizes vetted
            job postings and provides a verified candidate pool, creating a
            faster and safer hiring experience for both sides.
          </p>
        </section>

        <section aria-label="Key results">
          <div className="stats">
            <div className="stat">
              <div className="k">90 Days</div>
              <div>🚀 from concept to revenue</div>
            </div>

            <div className="stat">
              <div className="k">50+</div>
              <div>💳 Paying users in Q1</div>
            </div>

            <div className="stat">
              <div className="k">83%</div>
              <div>📈 Weekly active retention</div>
            </div>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          {/* <span className="text-2xl font-extrabold">❌ Problem</span> */}
          <h2 className="text-h2 mb-2">❌ Problem</h2>
          {/* <ul className="list-disc list-inside pl-4"> */}
          <ul className="list-disc list-inside text-body pl-2">
            <li className="mb-1">
              No central, industry-specific job board for mariners seeking
              Canadian roles.
            </li>
            <li className="mb-1">
              Employers lacked confidence in applicant authenticity and
              credentials.
            </li>
            <li className="mb-1">
              Fragmented processes for posting jobs, managing applicants, and
              collecting payments.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text pt-8">
          {/* <span className="text-2xl font-extrabold">💡 Solution</span> */}
          <h2 className="text-h2 mb-2">💡 Solution</h2>
          <p className="text-body">
            A centralized, vetted HR platform with role-specific onboarding,
            secure resume handling, and built-in monetization. The product
            supports three main user groups—mariners, employers, and
            operations/admin—each with the tools they need to move from
            discovery to hire.
          </p>
        </section>

        <section className="projectDescription_text">
          {/* <span className="text-xl font-bold"> */}
          <h3 className="text-h3 mb-2">⚙️ Core Product Capabilities</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Vetted Talent Pool:</span> Resume
              verification workflow by the Over Horizon team to ensure employer
              trust.
            </li>
            <li className="mb-1">
              <span className="font-bold">Centralized Job Postings:</span>{" "}
              Employers publish openings and review verified candidates in one
              place.
            </li>
            <li className="mb-1">
              <span className="font-bold">Secure Resume Delivery:</span>{" "}
              Token-based links prevent unauthorized access or sharing of
              candidate data.
            </li>
            <li className="mb-1">
              <span className="font-bold">Monetization:</span> Subscriptions and
              pay-per-post options tailored to each user group.
            </li>
            <li className="mb-1">
              <span className="font-bold">Billing Automation:</span> Recurring
              payments via WooCommerce Subscriptions and custom plugins.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          {/* <span className="text-xl font-extrabold">🙋 My Contributions</span> */}
          <h3 className="text-h3 mb-2">🙋 My Contributions</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Led discovery, scoping, and delivery from concept to AWS
              production in ~12 weeks.
            </li>
            <li className="mb-1">
              Implemented the multi-tier monetization model (subscriptions +
              pay-per-post) across 3 user groups.
            </li>
            <li className="mb-1">
              Built the secure, token-based resume delivery mechanism and
              verification workflow.
            </li>
            <li className="mb-1">
              Developed a custom WordPress theme and plugins; integrated
              WooCommerce Subscriptions for recurring billing.
            </li>
            <li className="mb-1">
              Set up CI/CD and cloud infrastructure; ran weekly stakeholder
              demos to accelerate iteration.
            </li>
          </ul>
        </section>

        <section className="pt-8" aria-label="Architecture">
          <div className="projectDescription_text">
            {/* <span className="text-2xl font-extrabold"> */}
            <h2 className="text-h2 mb-2">🏗️ Architecture &amp; Stack</h2>
            <ul className="text-caption">
              <li>
                <span className="font-bold text-body">Frontend:</span>{" "}
                JavaScript, AJAX, jQuery
              </li>
              <li>
                <span className="font-bold text-body">Backend &amp; CMS:</span>{" "}
                PHP, WordPress, custom plugins
              </li>
              <li>
                <span className="font-bold text-body">Payments:</span>{" "}
                WooCommerce + Subscriptions
              </li>
              <li>
                <span className="font-bold text-body">Data:</span> MySQL, REST
                APIs
              </li>
              <li>
                <span className="font-bold text-body">Infra &amp; CI/CD:</span>{" "}
                AWS, Docker, GitHub Actions
              </li>
              <li>
                <span className="font-bold text-body">Security:</span>{" "}
                Role-based access control, tokenized resume delivery
              </li>
            </ul>
          </div>
          <div className="projectDescription_text">
            {/* <span className="text-xl font-extrabold"> */}
            <h3 className="text-h3 mb-2">🤔 Why this approach?</h3>
            <ul className="list-disc list-inside pl-2 text-body">
              <li className="mb-1">
                <span className="font-bold">Speed to market:</span> MVP shipped
                quickly with a stack that balances velocity and maintainability.
              </li>
              <li className="mb-1">
                <span className="font-bold">Built-in monetization:</span>{" "}
                WooCommerce Subscriptions provides reliable recurring billing.
              </li>
              <li className="mb-1">
                <span className="font-bold">Operational trust:</span>{" "}
                Verification workflows + secure delivery address employer
                concerns.
              </li>
              <li className="mb-1">
                <span className="font-bold">Scalability:</span> Containerized
                services and CI/CD enable safe, frequent releases.
              </li>
            </ul>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          {/* <span className="text-2xl font-extrabold">🏆 Outcomes</span> */}
          <h2 className="text-h2 mb-2">🏆 Outcomes</h2>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Revenue-generating MVP</span>{" "}
              delivered in 3 months.
            </li>
            <li className="mb-1">
              <span className="font-bold">50+ paying users</span> within the
              first quarter after launch.
            </li>
            <li className="mb-1">
              Facilitated{" "}
              <span className="font-bold">investor demo meetings</span> for the
              founding team.
            </li>
            <li className="mb-1">
              Faster iteration cycles through weekly stakeholder demos and
              feedback loops.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          {/* <span className="text-xl font-extrabold"> */}
          <h3 className="text-h3">📓 Process Notes &amp; Lessons</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Discovery to scope:</span> early
              workshops clarified user roles (mariner, employer, admin) and the
              verification requirement.
            </li>
            <li className="mb-1">
              <span className="font-bold">Risk reduction:</span> tokenized
              resume links + verification workflows addressed core trust issues
              from day one.
            </li>
            <li className="mb-1">
              <span className="font-bold">Monetization design:</span> offering
              both subscriptions and pay-per-post lowered adoption friction for
              different user types.
            </li>
            <li className="mb-1">
              <span className="font-bold">Delivery rhythm:</span> weekly demos
              reduced turnaround time for priority features by ~30%.
            </li>
          </ul>
        </section>

        <div className="flex w-full justify-center py-8">
          <a
            className="btn"
            href="https://over-horizon-mariners.com/"
            target="_blank"
          >
            Visit Live Site
          </a>
        </div>
      </div>

      <div className="divider-line text-primary mt-4">00</div>
    </div>
  );
}
