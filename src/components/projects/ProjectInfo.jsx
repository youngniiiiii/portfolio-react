import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-14 block gap-0 sm:flex sm:gap-10">
      <div className="w-full text-left sm:w-1/3">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-secondary-dark dark:text-secondary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleProjectData.ProjectInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href="https://stoman.me"
                    className={
                      info.title === 'Website' || info.title === 'Phone'
                        ? 'cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400'
                        : ''
                    }
                    aria-label="Project Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.SocialSharingHeading}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {singleProjectData.ProjectInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="__blank"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark hover:text-primary-dark dark:hover:text-primary-light rounded-lg p-2 text-gray-400 shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
        <p className="font-general-regular text-primary-dark dark:text-primary-light mb-7 text-2xl font-bold">
          {singleProjectData.ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular text-ternary-dark dark:text-ternary-light mb-5 text-lg"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
