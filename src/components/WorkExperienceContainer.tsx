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
          time={workExperience.time}
          company={workExperience.company}
          description={workExperience.description}
        ></WorkExperience>
      ))}
    </div>
  );
};

export default WorkExperienceContainer;
