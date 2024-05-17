import WorkExperience from "./WorkExperience";

interface WorkExperienceContainerProps {
  workExperiences: any[];
}

const WorkExperienceContainer = ({
  workExperiences,
}: WorkExperienceContainerProps) => {
  return (
    <div className="workExperience-container">
      {workExperiences.map((workExperience, index) => (
        <WorkExperience
          key={index}
          workExperienceName={workExperience.name}
          tags={workExperience.tags}
          image={workExperience.image}
          time={workExperience.project_time}
          description={workExperience.description}
          links={workExperience.links}
          company={workExperience.company}
        ></WorkExperience>
      ))}
    </div>
  );
};

export default WorkExperienceContainer;
