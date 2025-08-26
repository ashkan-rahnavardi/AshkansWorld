import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import WayFinderCaseStudy from "@/app/_components/case-study_wayfinder";

export default function WayFinder() {
  return (
    <>
      <CustomCursor />

      <div id="project-view" className="container-fluid">
        <div className="row">
          <div className="project-info col-sm-12 col-md-8">
            <div className="project-banner">
              <Image
                src="/wayfinder/logo.png"
                alt="WayFinder-Logo"
                width={300}
                height={150}
              ></Image>
            </div>

            <div className="project-banner">
              <Image
                src="/wayfinder/main.png"
                alt="WayFinder-Main"
                width={1200}
                height={2586}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/wayfinder/buildingInfo.png"
                alt="WayFinder-BuildingInfo"
                width={1200}
                height={2586}
              ></Image>
            </div>
          </div>
          {WayFinderCaseStudy()}
        </div>
      </div>
    </>
  );
}
