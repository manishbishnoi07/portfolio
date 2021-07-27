import React from "react";
import "./Skills.css";
import { skillList } from "../assets/skillsData";
import Header from "./Header";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <Header
        title="Skills"
        subHeading="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
      />
      <div className="skillsContainer">
        {skillList.map(({ skillName, skillUrl }, index) => (
          <SkillCard
            className={`grid${index}`}
            skillName={skillName}
            skillUrl={skillUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
