export default function WayFinderCaseStudy() {
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
              href="/projects/SotBy"
              title="Previous"
            >
              ←
            </a>
          </span>
        </p>

        <h1 className="">BCIT WayFinder — Campus Navigation App</h1>

        <div className="projectDescription mb-8">
          <ul>
            <li>
              <span className="font-bold">Role:</span> Student Developer
              (Frontend)
            </li>
            <li>
              <span className="font-bold">Engagement:</span> Team project —
              4&nbsp;weeks
            </li>
            <li>
              <span className="font-bold">Project Timeline:</span> Single 4-week
              sprint (3-person team)
            </li>
          </ul>
        </div>

        <div className="chips" aria-label="Quick tags">
          <span className="chip">🎓 BCIT</span>
          <span className="chip">🗺️ Campus Maps</span>
          <span className="chip">⚛️ React</span>
          <span className="chip">Material&nbsp;UI</span>
          <span className="chip">📍 Geolocation</span>
          <span className="chip">🔎 Autocomplete</span>
          <span className="chip">🧮 Dijkstra</span>
          <span className="chip">🐍 Python</span>
        </div>

        <section className="projectDescription_text pt-4">
          <span className="text-2xl font-extrabold">📖 Project Overview</span>
          <br />
          BCIT WayFinder is a campus navigation app for the BCIT Burnaby campus.
          It helps students, staff, and visitors navigate footpaths and
          buildings where Google Maps lacks coverage. I led the React frontend
          while teammates handled data extraction and backend integrations.
        </section>

        <section aria-label="Key results">
          <div className="stats">
            <div className="stat">
              <div className="k">30+</div>
              <div>🏢 Buildings & Accomodations</div>
            </div>

            <div className="stat">
              <div className="k">1</div>
              <div>🏛️ Summit presentation (Digital Twin)</div>
            </div>

            <div className="stat">
              <div className="k">1</div>
              <div>💡 MVP that catalyzed funding</div>
            </div>
          </div>
        </section>

        <section className="projectDescription_text pt-4">
          <span className="text-2xl font-extrabold">❌ Problem</span>
          <ul className="list-disc list-inside pl-4">
            <li>Google Maps lacks BCIT’s internal footpath network.</li>
            <li>
              New students and visitors struggle to route between classes,
              including through buildings.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text pt-4">
          <span className="text-2xl font-extrabold">💡 Solution</span>
          <br />A React web app with a familiar mapping UI, geolocation to show
          current position, an autocomplete search for buildings and amenities,
          and custom routing based on a campus PDF converted into nodes and
          intersections. We computed shortest paths with Dijkstra’s algorithm
          and rendered routes with building info and color-coded markers.
        </section>

        <section className="projectDescription_text">
          <span className="text-xl font-bold">
            ⚙️ Core Product Capabilities
          </span>
          <ul className="list-disc list-inside pl-4">
            <li>
              <span className="font-bold">Geolocation:</span> display current
              user position on campus.
            </li>
            <li>
              <span className="font-bold">Search & Autocomplete:</span>{" "}
              buildings and amenities with instant suggestions.
            </li>
            <li>
              <span className="font-bold">Routing:</span> shortest path using
              preprocessed footpath graph.
            </li>
            <li>
              <span className="font-bold">POI Details:</span> building info
              cards and markers.
            </li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <span className="text-xl font-extrabold">🙋 My Contributions</span>
          <ul className="list-disc list-inside pl-4">
            <li>
              Implemented the React frontend (layout, components, Material UI).
            </li>
            <li>
              Integrated map view, geolocation, and destination search UX.
            </li>
            <li>
              Hooked frontend to JSON route data and rendered paths/markers.
            </li>
            <li>Coordinated UI with teammates’ data extraction and APIs.</li>
          </ul>
        </section>

        <section className="pt-4" aria-label="Architecture">
          <div className="projectDescription_text">
            <span className="text-2xl font-extrabold">
              🏗️ Architecture & Stack
            </span>
            <ul>
              <li>
                <span className="font-bold">Frontend:</span> React, Material UI
              </li>
              <li>
                <span className="font-bold">APIs:</span> Google Maps API
                (geolocation, coordinates)
              </li>
              <li>
                <span className="font-bold">Backend/Data:</span> Python for
                footpath extraction, Dijkstra shortest path, JSON generation
              </li>
              <li>
                <span className="font-bold">Hosting:</span> Free static hosting
                (prototype demo)
              </li>
            </ul>
          </div>

          <div className="projectDescription_text">
            <span className="text-xl font-extrabold">
              🤔 Why this approach?
            </span>
            <ul className="list-disc list-inside pl-4">
              <li>Leverages familiar map UX to reduce onboarding friction.</li>
              <li>
                Custom footpath graph enables accurate on-campus routing that
                Google lacks.
              </li>
              <li>Lightweight prototype stack fit a 4-week delivery window.</li>
              <li>
                Separation of concerns (data processing ➡️ JSON; UI ➡️ React)
                eased iteration.
              </li>
            </ul>
          </div>
        </section>

        <section className="projectDescription_text pt-4">
          <span className="text-2xl font-extrabold">🏆 Outcomes</span>
          <ul className="list-disc list-inside pl-4">
            <li>Deployed and demoed live (prototype; link later disabled).</li>
            <li>
              Presented at BCIT’s Digital Transformation / Digital Twin Summit.
            </li>
            <li>
              Helped spark funding interest for a commercial-grade navigation
              app.
            </li>
            <li>Validated feasibility with a 3-student, 4-week MVP.</li>
          </ul>
        </section>

        <section className="projectDescription_text">
          <span className="text-xl font-extrabold">
            📓 Process Notes & Lessons
          </span>
          <ul className="list-disc list-inside pl-4">
            <li>First substantial use of React with component architecture.</li>
            <li>
              Project organization and directory structure matter for
              scalability.
            </li>
            <li>
              Small-team collaboration: coordinated independent features with
              shared data.
            </li>
            <li>
              If rebuilt: cleaner app structure, real-time route data
              collection, and turn-by-turn navigation.
            </li>
          </ul>
        </section>
      </div>

      <div className="flex w-full justify-center py-8">
        <span className="btn opacity-60 pointer-events-none">
          Not live — Google Maps API disabled
        </span>
      </div>

      <div className="pt-4">
        <a
          className="social-link flex items-end"
          href="https://github.com/ashkan-rahnavardi/BCIT-WayFinder"
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
        <div className="divider-line text-primary">04</div>
      </div>
    </div>
  );
}
