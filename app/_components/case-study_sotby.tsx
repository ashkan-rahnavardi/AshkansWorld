export default function SotByCaseStudy() {
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
              href="/projects/Plate-Grabber"
              title="Previous"
            >
              ←
            </a>
            <a className="text-primaryGray font-bold text-lg"> / </a>
            <a
              className="text-primaryGray"
              href="/projects/WayFinder"
              title="Next"
            >
              →
            </a>
          </span>
        </p>

        <h1 className="text-display-md mb-4">
          SotBy — Resource &amp; Schedule Management for BCIT Automotive
        </h1>

        <div className="mb-4 text-body">
          <ul>
            <li>
              <span className="font-bold">Role:</span> Student Developer
              (Frontend &amp; Realtime)
            </li>
            <li>
              <span className="font-bold">Engagement:</span> Team project —
              4&nbsp;weeks
            </li>
            <li>
              <span className="font-bold">Project Timeline:</span> Single 4-week
              sprint (second cohort extending prior backend)
            </li>
          </ul>
        </div>

        <div className="chips" aria-label="Quick tags">
          <span className="chip">🎓 BCIT</span>
          <span className="chip">⚙️ Education</span>
          <span className="chip">⚛️ React</span>
          <span className="chip">🎨 Bootstrap</span>
          <span className="chip">🟩 Node.js</span>
          <span className="chip">🚀 Express</span>
          <span className="chip">🐘 PostgreSQL</span>
          <span className="chip">⚡ Socket.IO</span>
          <span className="chip">🔑 JWT</span>
          <span className="chip">🌐 REST APIs</span>
          <span className="chip">🌀 Agile</span>
        </div>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">📖 Project Overview</h2>
          <p className="text-body">
            SotBy replaces a chaotic single-user Google Doc with a multi-user
            web app for the BCIT Automotive Department. It adds authentication,
            role-based permissions, real-time concurrent editing, drag-and-drop
            scheduling, and auditable change history.
          </p>
        </section>

        <section aria-label="Key results">
          <div className="stats">
            <div className="stat">
              <div className="k">3</div>
              <div>👨‍👩‍👦 Students on the team</div>
            </div>

            <div className="stat">
              <div className="k">4</div>
              <div>⏳ Weeks from start to MVP</div>
            </div>

            <div className="stat">
              <div className="k">1</div>
              <div>🎤 Demo to department head</div>
            </div>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">❌ Problem</h2>
          <ul className="list-disc list-inside text-body pl-2">
            <li className="mb-1">
              Single shared Google Doc → only one editor at a time.
            </li>
            <li className="mb-1">No audit trail of changes.</li>
            <li className="mb-1">
              Frequent conflicts with resources & schedules.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">💡 Solution</h2>
          <p className="text-body">
            A multi-user web application with secure login and roles, real-time
            updates via Socket.IO, drag-and-drop schedule editing, resource
            request/approval workflows, and a clear audit log of all changes.
          </p>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">⚙️ Core Product Capabilities</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              <span className="font-bold">Auth & RBAC:</span> admin vs regular
              permissions.
            </li>
            <li className="mb-1">
              <span className="font-bold">Realtime:</span> concurrent edits via
              Socket.IO.
            </li>
            <li className="mb-1">
              <span className="font-bold">Scheduling UI:</span> drag-and-drop
              calendar.
            </li>
            <li className="mb-1">
              <span className="font-bold">Workflows:</span> resource & vacation
              requests.
            </li>
            <li className="mb-1">
              <span className="font-bold">Auditability:</span> change history &
              transparency.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3 mb-2">🙋 My Contributions</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">Built frontend auth flow + RBAC.</li>
            <li className="mb-1">Implemented Socket.IO realtime editing.</li>
            <li className="mb-1">
              Designed drag-and-drop scheduling interface.
            </li>
            <li className="mb-1">
              Reverse-engineered inherited backend endpoints.
            </li>
          </ul>
        </section>

        <section className="pt-8" aria-label="Architecture">
          <div className="projectDescription_text">
            <h2 className="text-h2 mb-2">🏗️ Architecture &amp; Stack</h2>
            <ul className="text-caption">
              <li>
                <span className="font-bold text-body">Frontend:</span> React,
                Bootstrap
              </li>
              <li>
                <span className="font-bold text-body">Backend:</span> Node.js,
                Express
              </li>
              <li>
                <span className="font-bold text-body">Database:</span>{" "}
                PostgreSQL
              </li>
              <li>
                <span className="font-bold text-body">Realtime:</span> Socket.IO
              </li>
              <li>
                <span className="font-bold text-body">Auth:</span> JWT, bcrypt
              </li>
              <li>
                <span className="font-bold text-body">Other:</span> REST APIs
              </li>
            </ul>
          </div>

          <div className="projectDescription_text">
            <h3 className="text-h3 mb-2">🤔 Why this approach?</h3>
            <ul className="list-disc list-inside pl-2 text-body">
              <li className="mb-1">
                Concurrency ➡️ real-time collab replaces single-editor doc.
              </li>
              <li className="mb-1">
                Clarity ➡️ RBAC + audit logs reduce conflicts.
              </li>
              <li className="mb-1">
                Speed ➡️ React + Express enabled 4-week MVP.
              </li>
              <li className="mb-1">
                Extensibility ➡️ clean handoff for next cohort.
              </li>
            </ul>
          </div>
        </section>

        <section className="projectDescription_text pt-8">
          <h2 className="text-h2 mb-2">🏆 Outcomes</h2>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">Delivered MVP demoed to faculty head.</li>
            <li className="mb-1">Documented for future cohorts.</li>
            <li className="mb-1">
              Next steps: hosting, accounts, staged rollout.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <h3 className="text-h3">📓 Process Notes &amp; Lessons</h3>
          <ul className="list-disc list-inside pl-2 text-body">
            <li className="mb-1">
              Inherited codebase ➡️ solved via endpoint exploration.
            </li>
            <li className="mb-1">Weekly sprints kept us on track.</li>
            <li className="mb-1">
              UX hindsight ➡️ simplify calendar UI + accessibility.
            </li>
          </ul>
        </section>
      </div>

      <div className="flex w-full justify-center py-8">
        <span className="btn opacity-60 pointer-events-none">
          Not live — local deployment only
        </span>
      </div>

      <div className="pt-4">
        <a
          className="social-link flex items-end"
          href="https://github.com/ashkan-rahnavardi/SotBy"
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
              fill="#5918df"
            ></path>
            <path
              data-name="layer1"
              d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
              fill="#5918df"
            ></path>
          </svg>
          <span className="ml-2">View on Github</span>
        </a>
        <div className="divider-line-proj text-primary">03</div>
      </div>
    </div>
  );
}
