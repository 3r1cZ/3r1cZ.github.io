import { useEffect, useState } from "react";
import ToolContainer from "../components/ToolContainer";
import "../css/Portfolio.css";
import AnimationFadeIn from "../components/AnimationFadeIn";
import ProjectContainer from "../components/ProjectContainer";
import { motion } from "framer-motion";
import Loading from "../components/Loading";

interface PortfolioProps {
  data: any;
}

const Portfolio = ({ data }: PortfolioProps) => {
  const [tags, setTags] = useState<string[]>();
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  }, []);
  return (
    <AnimationFadeIn>
      {loading && <Loading />}
      {!loading && tags !== undefined && (
        <div className="container">
          <div className="stats">
            <br />
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="header-text"
            >
              Projects
            </motion.h2>
            <br />
            <ProjectContainer projects={projects}></ProjectContainer>
          </div>
          <div className="stats">
            <br />
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="header-text"
            >
              Technical Skills
            </motion.h2>
            <br />
            <ToolContainer tags={tags} tools={technicalSkills}></ToolContainer>
          </div>
        </div>
      )}
    </AnimationFadeIn>
  );
};

export default Portfolio;
