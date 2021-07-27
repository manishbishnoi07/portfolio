import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({
  imageUrl,
  projectName,
  projectDescription,
  projectUrl,
  sourceCode,
  index,
}) => {
  return (
    <div className={`projectCard ${index % 2 === 1 && "projectCard--modify"}`}>
      <div className="projectCard__img">
        <img src={imageUrl} alt="project pic" />
      </div>
      <div className="projectCard__info">
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        {index !== 3 && (
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
