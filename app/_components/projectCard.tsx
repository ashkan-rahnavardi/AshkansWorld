import Link from "next/link";
import Tilt from "react-parallax-tilt";

export interface Project {
  imageUrl: string;
  containerClass: string;
  bgSize: string;
  title1: string;
  title2: string;
  num: string;
  route: string;
  classes: string;
  dataCycleCount: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const {
    imageUrl,
    containerClass,
    bgSize,
    title1,
    title2,
    num,
    route,
    dataCycleCount,
  } = project;

  return (
    <Link
      className={containerClass}
      href={route}
      data-cycle-count={dataCycleCount}
    >
      <Tilt
        transitionSpeed={1500}
        // transitionEasing="cubic-bezier(0.5, 0.98, 0.52, 0.99)"
        tiltReverse={true}
        perspective={500}
        glareEnable={false}
        glareMaxOpacity={0.45}
        scale={1.02}
        className={`relative block z-10 parallax-effect ${bgSize}`}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute bottom-0 text-primary inner-element -left-14 md:-left-8 w-24">
          <h3 className="whitespace-nowrap text_work_project-title">
            {title1}
          </h3>
          {/* <h3>{title2 || "\u00A0"}</h3> */}
          <h3 className="whitespace-nowrap text_work_project-title">
            {title2}
          </h3>
          <div className=" bg-primary divider-line "></div>
          {/* <p className="text-primaryGray font-mono text-lg">{num}</p> */}
          <p className="text_work_project-number">{num}</p>
          <p className="text_work_project-number">→</p>
        </div>
      </Tilt>
    </Link>
  );
}
