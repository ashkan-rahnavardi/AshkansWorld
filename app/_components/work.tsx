"use client";

import { ProjectCard, Project } from "./projectCard";

const professionalProjects: Project[] = [
  {
    imageUrl: "/overhorizon/projectCard2.png",
    containerClass: "overhorizon",
    bgSize: "project-image-h",
    title1: "OverHorizon",
    title2: "",
    num: "00",
    route: "#projects",
    classes: "col-sm-10 col-md-5",
    dataCycleCount: "5",
  },
  {
    imageUrl: "/rtb/projectCard2.png",
    containerClass: "rtb",
    bgSize: "project-image-h",
    title1: "RTB",
    title2: "",
    num: "01",
    route: "#projects",
    classes: "col-sm-10 col-md-4 mt-20",
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
    num: "00",
    route: "/projects/Plate-Grabber",
    classes: "col-sm-10 col-md-5",
    dataCycleCount: "3",
  },
  {
    imageUrl: "/sotby/projectCard.png",
    containerClass: "sotby",
    bgSize: "project-image-h",
    title1: "SotBy",
    title2: "",
    num: "01",
    route: "/projects/SotBy",
    classes: "col-sm-10 col-md-4",
    dataCycleCount: "1",
  },
  {
    imageUrl: "/wayfinder/projectCard.png",
    containerClass: "wayfinder",
    bgSize: "project-image-v",
    title1: "Way",
    title2: "Finder",
    num: "02",
    route: "/projects/WayFinder",
    classes: "col-sm-10 col-md-3",
    dataCycleCount: "2",
  },
];

export default function Work() {
  return (
    <div id="projects" className="w-screen relative container-fluid pb-10">
      <div className="row w-full self-top items-start justify-center">
        <div className="mx-auto pt-0 col-sm-7 col-md-7 col-9">
          <div className="timeline alt"></div>
          <small className="section-title bullet-title alt">
            Projects<span className="ml-1">/&gt;</span>
          </small>

          <div className="text-primaryGray">
            <h4>Freelance Portfolio</h4>
          </div>
        </div>
      </div>
      <div className="row self-top w-full pt-3 mt-3 projects-row">
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
          <div className="text-primaryGray">
            <h4>Independent Builds</h4>
          </div>
        </div>
      </div>
      <div className="row self-top w-full pt-3 mt-3 projects-row">
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
