import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import PlateGrabberCaseStudy from "@/app/_components/case-study_plate-grabber";

export default function PlateGrabber() {
  return (
    <>
      <CustomCursor />

      <div id="project-view" className="container-fluid">
        <div className="row">
          <div className="project-info col-sm-12 col-md-8">
            <div className="project-banner">
              <Image
                src="/plategrabber/logo.png"
                alt="PlateGrabber-Logo"
                width={300}
                height={150}
              ></Image>
            </div>

            <div className="project-banner">
              <Image
                src="/plategrabber/form.jpg"
                alt="PlateGrabber-Form"
                width={1200}
                height={2643}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/plategrabber/camera.jpg"
                alt="PlateGrabber-Form"
                width={1200}
                height={2643}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/plategrabber/saved.jpg"
                alt="PlateGrabber-Form"
                width={1200}
                height={2643}
              ></Image>
            </div>
          </div>
          {PlateGrabberCaseStudy()}
        </div>
      </div>
    </>
  );
}
