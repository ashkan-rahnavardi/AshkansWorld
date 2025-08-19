import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";

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
          <div className="bd-sidebar col-sm-12 col-md-4">
            <div>
              <p className="mt-0 mb-8">
                <a className="goBack__button" href="/" title="Go back home">
                  ←
                </a>
                <span className="pull-right">
                  <a
                    className="text-primaryGray"
                    href="/projects/OverHorizon"
                    title="Previous"
                  >
                    ←
                  </a>
                  <a className="text-primaryGray"> / </a>
                  <a
                    className="text-primaryGray"
                    href="/projects/Plate-Grabber"
                    title="Next"
                  >
                    →
                  </a>
                </span>
              </p>
              <div className="my-4">
                <small className="tags">#Design, </small>
                <small className="tags">#WooCommerce, </small>
                <small className="tags">#PHP, </small>
                <small className="tags">#Konva, </small>
                <small className="tags">#WebApp </small>
              </div>
              <h2 className="projectTitle-summary">RTB Brands</h2>
              <div className="projectDescription mb-8">
                As my first independent freelance engagement, I architected and
                implemented RTB Brands’ nationwide B2B e-commerce platform on
                WordPress—building a custom theme and suite of plugins to
                fulfill exact client specifications. I engineered an interactive
                countertop estimate tool to streamline sales, a job-board to
                manage installation workflows, and integrated the WooCommerce
                store with inFlow Inventory and QuickBooks for seamless
                order-to-billing automation.
              </div>
              <div className="projectDescription mb-8">
                <span className="projectDescription__highlight">
                  Features:{" "}
                </span>
                Variable wholesale pricing, Different user roles, Dockerized AWS
                deployment with CI/CD pipelines.
              </div>

              <div className="flex w-full justify-center mb-8">
                <a
                  className="btn"
                  href="https://rtbbrands.com/"
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>

            <div className="divider-line text-primary mt-4">01</div>
          </div>
        </div>
      </div>
    </>
  );
}
