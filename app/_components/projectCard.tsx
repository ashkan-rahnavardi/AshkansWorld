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
}

export function ProjectCard({ project }: { project: Project }) {
  const { imageUrl, containerClass, bgSize, title1, title2, num, route } =
    project;

  return (
    <Link className={containerClass} href={route}>
      <Tilt
        perspective={500}
        glareEnable={false}
        glareMaxOpacity={0.45}
        scale={1.02}
        className={`relative block z-10 parallax-effect ${bgSize}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 text-primary inner-element -left-20 md:-left-8 w-24">
          <h3>{title1}</h3>
          {/* <h3>{title2 || "\u00A0"}</h3> */}
          <h3>{title2}</h3>
          <div className="h-1 bg-primary my-2"></div>
          <p className="text-primaryGray font-mono text-lg">{num}</p>
          <p className="text-primaryGray font-mono text-lg">→</p>
        </div>
      </Tilt>
    </Link>
  );
}
