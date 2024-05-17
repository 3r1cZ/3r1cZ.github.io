interface WorkExperienceProps {
  workExperienceName: string;
  tags: string[];
  image: string;
  time: string;
  description: string;
  links: string[];
  company: string;
}

const WorkExperience = ({
  workExperienceName,
  tags,
  image,
  time,
  description,
  links,
  company,
}: WorkExperienceProps) => {
  return <div>WorkExperience</div>;
};

export default WorkExperience;
