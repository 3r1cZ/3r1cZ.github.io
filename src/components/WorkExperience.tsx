import { motion } from "framer-motion";
import "../css/WorkExperience.css";

interface WorkExperienceProps {
  workExperienceName: string;
  tags: string[];
  time: string;
  description: string;
  company: string;
}

const WorkExperience = ({
  workExperienceName,
  tags,
  time,
  company,
  description,
}: WorkExperienceProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="work-experience">
        <h1 className="heading-text">{workExperienceName}</h1>
        <h2 className="subheading-text">
          {company} | {time}
        </h2>
        <h2 className="subheading-text">
          <i>{tags}</i>
        </h2>
        <p className="paragraph-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
