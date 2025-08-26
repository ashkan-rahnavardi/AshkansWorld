import Image from "next/image";
import CustomCursor from "../../../app/_components/_cursor/index";
import SotByCaseStudy from "@/app/_components/case-study_sotby";

export default function SotBy() {
  return (
    <>
      <CustomCursor />

      <div id="project-view" className="container-fluid">
        <div className="row ">
          <div className="project-info col-sm-12 col-md-8">
            <div className="project-banner">
              <Image
                src="/sotby/logo.png"
                alt="SotBy-Logo"
                width={300}
                height={150}
              ></Image>
            </div>

            <div className="project-banner">
              <Image
                src="/sotby/login.png"
                alt="SotBy-Login"
                width={1200}
                height={700}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/sotby/home.png"
                alt="SotBy-Home"
                width={1200}
                height={700}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/sotby/createUser.png"
                alt="SotBy-CreateUser"
                width={1200}
                height={700}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/sotby/createCourse.png"
                alt="SotBy-CreateCourse"
                width={1200}
                height={700}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/sotby/requestVacation.png"
                alt="SotBy-RequestVacation"
                width={1200}
                height={700}
              ></Image>
            </div>
            <div className="project-banner">
              <Image
                src="/sotby/approveVacation.png"
                alt="SotBy-ApproveVacation"
                width={1200}
                height={700}
              ></Image>
            </div>
          </div>
          {SotByCaseStudy()}
        </div>
      </div>
    </>
  );
}
