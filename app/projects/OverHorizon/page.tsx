import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";

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
                    title="Next"
                  >
                    →
                  </a>
                </span>
              </p>
              <div className="my-4">
                <small className="tags">#Design, </small>
                <small className="tags">#WordPress, </small>
                <small className="tags">#PHP, </small>
                <small className="tags">#jQuery, </small>
                <small className="tags">#WebApp </small>
              </div>
              <h2 className="projectTitle-summary">Over Horizon Mariners</h2>
              <div className="projectDescription mb-8">
                As my second independent freelance project, I led the end-to-end
                management and development of Over Horizon, an HR-tech platform
                that matches internationally trained mariners with Canadian
                maritime employers. Built on WordPress with custom plugins and
                WooCommerce integrations, the MVP launched in three months and
                secured early paying subscribers.
              </div>
              <div className="projectDescription mb-8">
                <span className="projectDescription__highlight">
                  Features:{" "}
                </span>
                Multi-tier subscription & pay-per-post job listings, Custom
                WordPress plugin & theme, WooCommerce Subscriptions integration,
                Secure MD5-hashed resume retrieval system, Event-driven logging
                & monitoring, Responsive mobile-friendly interface
              </div>
              <div className="flex w-full justify-center">
                <a
                  className="btn"
                  href="https://over-horizon-mariners.com/"
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="divider-line text-primary mt-4">00</div>
          </div>
        </div>
      </div>
    </>
  );
}
