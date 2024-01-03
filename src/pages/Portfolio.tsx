import { useEffect, useState } from "react";
import ToolContainer from "../components/ToolContainer";
import "../css/Portfolio.css";
import AnimationFadeIn from "../components/AnimationFadeIn";
import ProjectContainer from "../components/ProjectContainer";

interface PortfolioProps {
  data: any;
}

const Portfolio = ({ data }: PortfolioProps) => {
  const [tags, setTags] = useState<string[]>();
  const technicalSkills = data.content.portfolio.technical_skills;
  const projects = data.content.portfolio.projects;

  // getting tags from skills
  useEffect(() => {
    let allTags = new Set<string>();
    allTags.add("All");
    technicalSkills.forEach((technicalSkill: { tags: string[] }) => {
      technicalSkill.tags.forEach((tag: string) => {
        allTags.add(tag);
      });
    });
    setTags(Array.from(allTags));
  }, []);
  return (
    <AnimationFadeIn>
      {tags !== undefined && (
        <div className="container">
          <div className="stats">
            <br />
            <h2>
              <u>Technical Skills</u>
            </h2>
            <br />
            <ToolContainer tags={tags} tools={technicalSkills}></ToolContainer>
          </div>
          <div className="stats">
            <br />
            <h2>
              <u>Projects</u>
            </h2>
            <br />
            <ProjectContainer projects={projects}></ProjectContainer>
          </div>
        </div>
      )}
    </AnimationFadeIn>
  );
};

export default Portfolio;
