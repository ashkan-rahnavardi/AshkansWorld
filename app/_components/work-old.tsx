"use client";

import Link from "next/link";
import Tilt from "react-parallax-tilt";

function Work() {
  const ProjectCard = ({
    project,
  }: {
    project: {
      imageUrl: string;
      containerClass: string;
      bgSize: string;
      title1: string;
      title2: string;
      num: string;
      route: string;
    };
  }) => {
    const { imageUrl, containerClass, bgSize, title1, title2, num, route } =
      project;
    return (
      <Link className={containerClass} href={route}>
        <Tilt
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          className={`relative block z-10 parallax-effect ${bgSize}`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-0 text-primary inner-element -left-20 md:-left-8 w-24">
            <h3>{title1}</h3>
            <h3>{title2}</h3>
            <div className="h-1 bg-primary my-2"></div>
            <p className="text-primaryGray font-mono text-lg">{num}</p>
            <p className="text-primaryGray font-mono text-lg">→</p>
          </div>
        </Tilt>
      </Link>
    );
  };

  const plateGrabber = {
    imageUrl: "/plategrabber/projectCard.png",
    containerClass: "plate",
    bgSize: "project-image-h",
    title1: "Plate",
    title2: "Grabber",
    num: "00",
    route: "/projects/Plate-Grabber",
  };
  const sotBy = {
    imageUrl: "/sotby/projectCard.png",
    containerClass: "sotby",
    bgSize: "project-image-h",
    title1: "SotBy",
    title2: "",
    num: "01",
    route: "/projects/SotBy",
  };
  const wayFinder = {
    imageUrl: "/wayfinder/projectCard.png",
    containerClass: "wayfinder",
    bgSize: "project-image-v",
    title1: "Way",
    title2: "Finder",
    num: "02",
    route: "/projects/WayFinder",
  };

  return (
    <div id="work" className="w-screen relative container-fluid pb-10">
      <div className="row w-full self-top items-start justify-center">
        <div className="mx-auto pt-0 col-sm-7 col-md-7 col-9">
          <div className="timeline alt"></div>
          <small className="section-title bullet-title alt">
            Work<span className="ml-1">/&gt;</span>
          </small>

          <div className="text-primaryGray">
            <h2>Selected full-stack projects...</h2>
          </div>
        </div>
      </div>
      <div className="row self-top w-full pt-3 mt-3 projects-row">
        <div className="mx-auto pt-0 justify-center flex col-sm-10 col-md-5">
          <ProjectCard project={plateGrabber} />
        </div>
        <div className="mx-auto pt-0 justify-center flex col-sm-10 col-md-4">
          <ProjectCard project={sotBy} />
        </div>
        <div className="mx-auto pt-0 justify-center flex col-sm-10 col-md-3">
          <ProjectCard project={wayFinder} />
        </div>
      </div>
    </div>
  );
}

export default Work;
