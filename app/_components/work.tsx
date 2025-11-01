"use client";

import { ProjectCard, Project } from "./projectCard";

const professionalProjects: Project[] = [
  {
    imageUrl: "/overhorizon/projectCard2.png",
    containerClass: "overhorizon",
    bgSize: "project-image-h",
    title1: "Over Horizon",
    title2: "Mariners",
    num: "00",
    route: "/projects/OverHorizon",
    classes: "col-sm-10 col-md-5",
    dataCycleCount: "5",
  },
  {
    imageUrl: "/rtb/projectCard2.png",
    containerClass: "rtb",
    bgSize: "project-image-h",
    title1: "RTB",
    title2: "Brands",
    num: "01",
    route: "/projects/RTBBrands",
    classes: "col-sm-10 col-md-4 mt-4 md:mt-20",
    dataCycleCount: "4",
  },
];

const personalProjects: Project[] = [
  {
    imageUrl: "/plategrabber/projectCard.png",
    containerClass: "plate",
    bgSize: "project-image-h",
    title1: "Plate",
    title2: "Grabber",
    num: "02",
    route: "/projects/Plate-Grabber",
    classes: "col-sm-10 col-md-5 mt-2",
    dataCycleCount: "3",
  },
  {
    imageUrl: "/sotby/projectCard.png",
    containerClass: "sotby",
    bgSize: "project-image-h",
    title1: "SotBy",
    title2: "",
    num: "03",
    route: "/projects/SotBy",
    classes: "col-sm-10 col-md-4 mt-2",
    dataCycleCount: "1",
  },
  {
    imageUrl: "/wayfinder/projectCard.png",
    containerClass: "wayfinder",
    bgSize: "project-image-v",
    title1: "Way",
    title2: "Finder",
    num: "04",
    route: "/projects/WayFinder",
    classes: "col-sm-10 col-md-3 mt-2",
    dataCycleCount: "2",
  },
];

export default function Work() {
  return (
    <div
      id="projects"
      className="w-screen relative container-fluid pb-6 md:pb-10"
    >
      <div className="row w-full self-top items-start justify-center">
        <div className="mx-auto pt-0 col-sm-7 col-md-7 col-9">
          <div className="timeline alt"></div>
          <small className="text_timeline-title bullet-title alt">
            Projects<span className="ml-1">/&gt;</span>
          </small>

          <div className="text_work_title pb-8 md:pb-4">
            <h4>Freelance Portfolio</h4>
          </div>
        </div>
      </div>
      <div className="row self-top w-full pt-2 md:pt-3 mt-2 md:mt-3 projects-row">
        {professionalProjects.map((p) => (
          <div
            key={p.route}
            className={`mx-auto pt-0 justify-center flex ${p.classes}`}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
      <div className="row w-full self-top items-start justify-center">
        <div className="mx-auto pt-0 col-sm-7 col-md-7 col-9">
          <div className="text_work_title mt-5 mb-1">
            <h4 className="text-right">Independent Builds</h4>
          </div>
        </div>
      </div>
      <div className="row self-top w-full pt-3 projects-row mb-12">
        {personalProjects.map((p) => (
          <div
            key={p.route}
            className={`mx-auto pt-0 justify-center flex ${p.classes}`}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
