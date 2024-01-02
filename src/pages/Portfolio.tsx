import Tool from "../components/Tool";
import ToolContainer from "../components/ToolContainer";
import "../css/Portfolio.css";

interface PortfolioProps {
  data: any;
}

const Portfolio = ({ data }: PortfolioProps) => {
  const technicalSkills = data.content.portfolio.technical_skills;
  const projects = data.content.portfolio.projects;

  // getting tags from skills
  let allTags = new Set<string>();
  allTags.add("All");
  technicalSkills.forEach((technicalSkill: { tags: string[] }) => {
    technicalSkill.tags.forEach((tag: string) => {
      allTags.add(tag);
    });
  });
  let tags = Array.from(allTags);

  return (
    <div className="container">
      <div className="stats">
        <br />
        <h2>
          <u>Technical Skills</u>
        </h2>
        <br />
        <ToolContainer tags={tags} tools={technicalSkills}></ToolContainer>
      </div>
    </div>
  );
};

export default Portfolio;
