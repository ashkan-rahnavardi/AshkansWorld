export default function RTBBrandsCaseStudy() {
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
              href="/projects/OverHorizon"
              title="Previous"
            >
              ←
            </a>
            <a className="text-primaryGray font-bold text-lg"> / </a>
            <a
              className="text-primaryGray font-bold text-lg"
              href="/projects/Plate-Grabber"
              title="Next"
            >
              →
            </a>
          </span>
        </p>

        <h1 className="text-display-md mb-4">
          RTB Brands — B2B Wholesale Platform & 2-D Quote Tool
        </h1>

        <div className="mb-4 text-body">
          <ul>
            <li>
              <span className="font-bold">Role:</span> Freelance Full-Stack
              Developer
            </li>
            <li>
              <span className="font-bold">Engagement:</span> May&nbsp;2024 →
              May&nbsp;2025
            </li>
            <li>
              <span className="font-bold">Project Timeline:</span> Phased
              rollout across 12 months
            </li>
          </ul>
        </div>

        <div className="chips" aria-label="Quick tags">
          <span className="chip">🛒 WooCommerce</span>
          <span className="chip">🌐 WordPress</span>
          <span className="chip">🖼️ Konva.js</span>
          <span className="chip">☁️ AWS</span>
          <span className="chip">🔁 CI/CD</span>
          <span className="chip">📘 QuickBooks</span>
          <span className="chip">📦 inFlow</span>
          <span className="chip">⚡ Zapier</span>
        </div>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">📖 Project Overview</h2>
          <p className="text-body">
            RTB Brands is a national cabinet &amp; countertop manufacturer. I
            delivered a wholesale e-commerce portal with role-based pricing, a
            2-D countertop&nbsp;designer with instant quotes, and
            production/installation workflows that connect sales to operations
            and finance.
          </p>
        </section>

        <section aria-label="Key results">
          <div className="stats">
            <div className="stat">
              <div className="k">1000+</div>
              <div>🌎 Dealers supported nationwide</div>
            </div>

            <div className="stat">
              <div className="k">$1M+</div>
              <div>💵 Annual revenue of B2B sales</div>
            </div>

            <div className="stat">
              <div className="k">90%</div>
              <div>✅ Fewer invoice errors post-integration</div>
            </div>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">❌ Problem</h2>
          <ul className="list-disc list-inside text-body pl-2">
            <li className="mb-1">
              Distributors needed secure, role-based wholesale pricing and
              account terms.
            </li>
            <li className="mb-1">
              Sales quotes were manual and slow; drawings and specs caused
              repeated back-and-forth.
            </li>
            <li className="mb-1">
              Operations used fragmented tools; finance struggled with invoice
              mismatch and late syncing.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">💡 Solution</h2>
          <p className="text-body">
            A centralized B2B WooCommerce portal with dealer-level pricing, a
            Konva.js 2-D design surface for instant quotes, integrated
            production/installation workflows, and accounting/inventory sync
            across QuickBooks and inFlow.
          </p>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">⚙️ Core Product Capabilities</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Role-based Wholesale Pricing:</span>{" "}
              tiered price lists, terms, and tax rules per dealer group.
            </li>
            <li className="mb-1">
              <span className="font-bold">
                2-D Designer &amp; Instant Quote:
              </span>{" "}
              Konva.js canvas tool generates dimensions, materials, and
              real-time pricing.
            </li>
            <li className="mb-1">
              <span className="font-bold">
                Order &amp; Installation Workflow:
              </span>{" "}
              status tracking, document uploads, and automated notifications
              from sale to install.
            </li>
            <li className="mb-1">
              <span className="font-bold">
                Inventory &amp; Accounting Sync:
              </span>{" "}
              QuickBooks + inFlow integrations for invoices, stock, and customer
              records.
            </li>
            <li className="mb-1">
              <span className="font-bold">Admin Controls:</span> RBAC, audit
              trails, and change logs for operations and finance.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">🙋 My Contributions</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Delivered the B2B WooCommerce store with dealer-group pricing and
              custom checkout rules.
            </li>
            <li className="mb-1">
              Built the Konva.js 2-D designer and instant-quote engine with
              pricing formulas and exportable specs.
            </li>
            <li className="mb-1">
              Implemented QuickBooks &amp; inFlow sync for invoices, inventory,
              and customers; reduced errors by 90%.
            </li>
            <li className="mb-1">
              Containerized the stack; set up AWS hosting and GitHub Actions
              CI/CD for safe, zero-downtime releases.
            </li>
            <li className="mb-1">
              Defined workflows, acceptance criteria, and ran stakeholder demos
              to iterate quickly.
            </li>
          </ul>
        </section>

        <section className="pt-8" aria-label="Architecture">
          <div className="projectDescription_text">
            <h2 className="text-h2 mb-2">🏗️ Architecture &amp; Stack</h2>
            <ul className="text-caption">
              <li>
                <span className="font-bold text-body">Frontend:</span>{" "}
                JavaScript, Konva.js&nbsp;(HTML5 Canvas), AJAX
              </li>
              <li>
                <span className="font-bold text-body">Backend &amp; CMS:</span>{" "}
                PHP, WordPress, WooCommerce (custom plugins)
              </li>
              <li>
                <span className="font-bold text-body">Data:</span> MySQL; REST
                integrations (QuickBooks, inFlow)
              </li>
              <li>
                <span className="font-bold text-body">Infra &amp; CI/CD:</span>{" "}
                AWS, Docker, GitHub Actions
              </li>
              <li>
                <span className="font-bold text-body">Security:</span> RBAC,
                per-dealer pricing scopes, audit logs
              </li>
            </ul>
          </div>

          <div className="projectDescription_text">
            <h3 className="text-h3 mb-2">🤔 Why this approach?</h3>
            <ul className="list-disc list-inside pl-2 text-body">
              <li className="mb-1">
                <span className="font-bold">Speed + Fit:</span> WooCommerce +
                custom plugins let us meet complex wholesale needs quickly.
              </li>
              <li className="mb-1">
                <span className="font-bold">Operational Flow:</span> Designer →
                quote → order → install is tracked end-to-end.
              </li>
              <li className="mb-1">
                <span className="font-bold">Source of Truth:</span> Accounting
                and inventory stay in sync to prevent mismatches.
              </li>
              <li className="mb-1">
                <span className="font-bold">Reliability:</span> Containerized
                services and CI/CD ensure frequent, safe releases.
              </li>
            </ul>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">🏆 Outcomes</h2>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Nationwide dealer adoption</span> with
              role-based pricing and terms.
            </li>
            <li className="mb-1">
              <span className="font-bold">Quote time cut to minutes</span> via
              the 2-D designer and instant pricing.
            </li>
            <li className="mb-1">
              <span className="font-bold">90% fewer invoice errors</span> with
              automated finance &amp; inventory sync.
            </li>
            <li className="mb-1">
              <span className="font-bold">Zero-downtime deployments</span>{" "}
              through CI/CD and blue-green style releases.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3">📓 Process Notes &amp; Lessons</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Dealer discovery:</span> mapped price
              tiers, account terms, and exceptions early to avoid rework.
            </li>
            <li className="mb-1">
              <span className="font-bold">Quote fidelity:</span> canvas tooling
              + parameterized pricing eliminated spec ambiguity.
            </li>
            <li className="mb-1">
              <span className="font-bold">Integrations first:</span> aligning
              QuickBooks/inFlow schemas up front prevented downstream data
              drift.
            </li>
            <li className="mb-1">
              <span className="font-bold">Release hygiene:</span> CI/CD with
              previews kept stakeholders in the loop and reduced cycle time.
            </li>
          </ul>
        </section>
      </div>

      <div className="flex w-full justify-center py-8">
        <a className="btn" href="https://rtbbrands.com/" target="_blank">
          Visit Live Site
        </a>
      </div>

      <div className="divider-line-proj text-primary mt-4">01</div>
    </div>
  );
}
