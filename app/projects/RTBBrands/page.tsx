import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import RTBBrandsCaseStudy from "@/app/_components/case-study_rtb";

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
          {RTBBrandsCaseStudy()}
        </div>
      </div>
    </>
  );
}
