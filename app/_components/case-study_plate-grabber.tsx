export default function PlateGrabberCaseStudy() {
  return (
    <div className="bd-sidebar col-sm-12 col-md-4">
      <div>
        <p className="mt-0 mb-8">
          <a className="goBack__button" href="/" title="Go back home">
            ←
          </a>
          <span className="pull-right">
            <a
              className="text-primaryGray"
              href="/projects/RTBBrands"
              title="Previous"
            >
              ←
            </a>
            <a className="text-primaryGray font-bold text-lg"> / </a>
            <a className="text-primaryGray" href="/projects/SotBy" title="Next">
              →
            </a>
          </span>
        </p>

        <h1 className="text-display-md mb-4">
          PlateGrabber — License Plate Extraction Tool for City Workflows
        </h1>

        <div className="mb-4 text-body">
          <ul>
            <li>
              <span className="font-bold">Role:</span> Solo Developer
            </li>
            <li>
              <span className="font-bold">Engagement:</span> Internal initiative
              while at City of Vancouver
            </li>
            <li>
              <span className="font-bold">Project Timeline:</span> Two sprints
              (MVP → prototype)
            </li>
          </ul>
        </div>

        <div className="chips" aria-label="Quick tags">
          <span className="chip">⚛️ React</span>
          <span className="chip">Next.js&nbsp;14</span>
          <span className="chip">ShadCN&nbsp;UI</span>
          <span className="chip">🔐 NextAuth&nbsp;v5</span>
          <span className="chip">🧠 OCR</span>
          <span className="chip">📍 Geolocation</span>
          <span className="chip">📸 Camera</span>
          <span className="chip">🗄️ MongoDB</span>
        </div>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">📖 Project Overview</h2>
          <p className="text-body">
            PlateGrabber is a web app designed for the City of Vancouver Traffic
            Department to capture parked-vehicle photos and automatically
            extract license plate numbers and geolocation data, replacing manual
            pen-and-paper workflows. I initiated and built the project after
            observing inefficiencies in the existing process.
          </p>
        </section>

        <section aria-label="Key results">
          <div className="stats">
            <div className="stat">
              <div className="k">2</div>
              <div>🧭 Sprints from idea to prototype</div>
            </div>

            <div className="stat">
              <div className="k">1</div>
              <div>🏛️ Department demo (superintendent & assistant)</div>
            </div>

            <div className="stat">
              <div className="k">3</div>
              <div>⚙️ Core automations (photo, OCR, geo)</div>
            </div>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">❌ Problem</h2>
          <ul className="list-disc list-inside text-body pl-2">
            <li className="mb-1">
              Traffic staff installing No Parking signs had to record all parked
              vehicles.
            </li>
            <li className="mb-1">
              Plates were written manually on paper, causing slow, error-prone,
              duplicate data entry.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">💡 Solution</h2>
          <p className="text-body">
            A streamlined capture flow that lets staff take photos in-app,
            extracts plate numbers via OCR, attaches photo geolocation metadata
            to auto-fill forms, and keeps the system modular for future
            assignment workflows.
          </p>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">⚙️ Core Product Capabilities</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Photo capture:</span> in-app camera
              with capture preview.
            </li>
            <li className="mb-1">
              <span className="font-bold">Plate extraction:</span> OCR pipeline
              to parse license numbers.
            </li>
            <li className="mb-1">
              <span className="font-bold">Geo tagging:</span> read location
              metadata and attach to records.
            </li>
            <li className="mb-1">
              <span className="font-bold">Auto-fill:</span> populate traffic
              forms from extracted data.
            </li>
            <li className="mb-1">
              <span className="font-bold">Security (planned):</span> encrypted,
              on-prem storage.
            </li>
            <li className="mb-1">
              <span className="font-bold">Assignments (planned):</span> daily
              dashboard for staff tasks.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">🙋 My Contributions</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Built the React/Next.js frontend and ShadCN UI flows.
            </li>
            <li className="mb-1">
              Integrated camera capture (React Camera Pro, custom
              modifications).
            </li>
            <li className="mb-1">
              Connected OCR plate recognition and geolocation metadata to form
              auto-fill.
            </li>
            <li className="mb-1">
              Prototyped auth with NextAuth and scoped security for on-prem
              requirements.
            </li>
            <li className="mb-1">
              Ran discovery with the department superintendent and iterated
              across two sprints.
            </li>
          </ul>
        </section>

        <section className="pt-8" aria-label="Architecture">
          <div className="projectDescription_text">
            <h2 className="text-h2 mb-2">🏗️ Architecture &amp; Stack</h2>
            <ul className="text-caption">
              <li>
                <span className="font-bold text-body">Frontend:</span> React,
                Next.js&nbsp;14, ShadCN UI
              </li>
              <li>
                <span className="font-bold text-body">Authentication:</span>{" "}
                NextAuth v5
              </li>
              <li>
                <span className="font-bold text-body">Database:</span> MongoDB
                (prototype stage)
              </li>
              <li>
                <span className="font-bold text-body">APIs:</span> Plate
                Recognition (OCR), geolocation metadata
              </li>
              <li>
                <span className="font-bold text-body">Camera:</span> React
                Camera Pro (custom-modified)
              </li>
            </ul>
          </div>

          <div className="projectDescription_text">
            <h3 className="text-h3 mb-2">🤔 Why this approach?</h3>
            <ul className="list-disc list-inside pl-2 text-body">
              <li className="mb-1">
                Direct photo capture and OCR eliminate manual, duplicate entry.
              </li>
              <li className="mb-1">
                Geolocation metadata ties evidence to place and time with
                minimal effort.
              </li>
              <li className="mb-1">
                Modular design keeps a path open for secure, on-prem deployment
                and future workflows.
              </li>
              <li className="mb-1">
                Modern React/Next stack sped up iteration while keeping the
                prototype maintainable.
              </li>
            </ul>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">🏆 Outcomes</h2>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Demonstrated the MVP to the department superintendent and
              assistant with strong interest.
            </li>
            <li className="mb-1">
              Identified adoption hurdles around IT policy compliance and
              procurement.
            </li>
            <li className="mb-1">
              Project paused before commercial rollout, but validated automation
              feasibility.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3">📓 Process Notes &amp; Lessons</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Applied OCR and geolocation APIs in a real-world municipal
              workflow.
            </li>
            <li className="mb-1">
              Architecture planning is crucial for scalability and compliance.
            </li>
            <li className="mb-1">
              Stakeholder discovery with non-technical managers guided scope and
              roadmap.
            </li>
            <li className="mb-1">
              If rebuilding today: define a 2-year roadmap, build modular from
              day one, and prioritize on-prem encryption.
            </li>
          </ul>
        </section>
      </div>

      <div className="flex w-full justify-center py-8">
        <a
          className="btn"
          href="https://main.d2zroxwrh5ormt.amplifyapp.com/"
          target="_blank"
        >
          Demo (Not Maintained)
        </a>
      </div>

      <div className="pt-4">
        <a
          className="social-link flex items-end"
          href="https://github.com/ashkan-rahnavardi/plate-grabber"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="36px"
            height="36px"
            viewBox="0 0 64 64"
          >
            <title>Github</title>
            <desc>A solid styled icon from Orion Icon Library.</desc>
            <path
              data-name="layer2"
              d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
              fill="currentColor"
            ></path>
            <path
              data-name="layer1"
              d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="ml-2">View on Github</span>
        </a>
        <div className="divider-line-proj text-primary">02</div>
      </div>
    </div>
  );
}
