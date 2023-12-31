import Project from "./Project";
import "../css/ProjectContainer.css";

interface ProjectContainerProps {
  projects: any[];
}

/**
 * This function returns a project container component for the website
 * @param projects the list of projects
 * @returns the tool container component
 */
const ProjectContainer = ({ projects }: ProjectContainerProps) => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <Project
          key={index}
          projectName={project.name}
          tags={project.tags}
          image={project.image}
          time={project.project_time}
          description={project.description}
          links={project.links}
        ></Project>
      ))}
    </div>
  );
};

export default ProjectContainer;
