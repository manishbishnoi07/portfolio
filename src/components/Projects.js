import React from "react";
import Header from "./Header";
import { projectsData } from "../assets/projectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <Header
        title="Projects"
        subHeading="Here are a few cool things I've worked on, do check them out!"
      />
      {projectsData.map(
        (
          { imageUrl, projectName, projectDescription, projectUrl, sourceCode },
          index
        ) => (
          <ProjectCard
            imageUrl={imageUrl}
            projectName={projectName}
            projectDescription={projectDescription}
            projectUrl={projectUrl}
            sourceCode={sourceCode}
            key={index}
            index={index}
          />
        )
      )}
    </div>
  );
};

export default Projects;
