import { useContext } from 'react';
import SingleProjectContext from '@/context/SingleProjectContext';

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
      {singleProjectData.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="cursor-pointer rounded-xl shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
