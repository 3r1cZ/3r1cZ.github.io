import { useState } from "react";
import "../css/Project.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface ProjectProps {
  projectName: string;
  tags: string[];
  image: string;
  time: string;
  description: string;
  links: string[];
}
/**
 * This function returns a project component for the website.
 * The information displayed at the front is the project name, image, and tag icons.
 * The information displayed at the back is the project time and description.
 * @param projectName the name of the project
 * @param tags the tag names for the project
 * @param image the image of the project
 * @param time the time of the project
 * @param description the description of the project
 * @param links the links of the project
 * @returns the project component
 */
const Project = ({
  projectName,
  tags,
  image,
  time,
  description,
  links,
}: ProjectProps) => {
  const [isFlipped, setFlipped] = useState(false);
  const [toRotate, setRotate] = useState(false);

  return (
    <motion.div
      className="project"
      onClick={() => [setFlipped(!isFlipped), setRotate(!toRotate)]}
      whileHover={{ y: -10 }}
      animate={{ rotate: toRotate ? 360 : 0 }}
    >
      {isFlipped ? (
        <div>
          <p>
            Time: {time}
            <br />
            <br />
            Description: {description}
            <br />
            <br />
            <u>Links:</u>
            <br />
          </p>
          {links.map((link, index) => (
            <Link to={link} key={index}>
              {link}
              <br />
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <img className="projectImage" src={image} />
          <p>{projectName}</p>
          {tags.map((tag, index) => (
            <img
              key={index}
              className="tagImage"
              src={"/assets/" + tag.toLowerCase().replace(" ", "_") + ".png"}
            ></img>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Project;
