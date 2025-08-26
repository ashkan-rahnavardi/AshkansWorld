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
        </div>
      </div>
    </>
  );
}
