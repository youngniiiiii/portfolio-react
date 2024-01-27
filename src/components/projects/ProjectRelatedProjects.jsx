import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="border-primary-light dark:border-secondary-dark mt-10 border-t-2 pt-10 sm:mt-20 sm:pt-14">
      <p className="font-general-regular text-primary-dark dark:text-primary-light mb-10 text-left text-3xl font-bold sm:mb-14">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
        {singleProjectData.RelatedProject.Projects.map((project) => {
          return (
            <img
              src={project.img}
              className="cursor-pointer rounded-xl"
              alt={project.title}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
