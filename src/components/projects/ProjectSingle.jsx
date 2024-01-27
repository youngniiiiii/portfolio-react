import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const ProjectSingle = ({
  title,
  image,
  href,
  alt,
  technologies,
  intro,
  details,
  github,
}) => {
  const navigateToProject = () => {
    window.location.href = href;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div onClick={navigateToProject} aria-label={alt}>
        <div className="bg-secondary-light dark:bg-ternary-dark mb-10 cursor-pointer rounded-xl shadow-lg hover:shadow-xl sm:mb-0">
          <div>
            <img src={image} className="rounded-t-xl border-none" alt={alt} />
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
            <div className="_flex-center mb-1 gap-1">
              <h3 className="font-general-medium text-ternary-dark dark:text-ternary-light text-lg md:text-xl ">
                {title}
              </h3>
              <a href={github}>
                <FiGithub className="text-ternary-dark dark:text-ternary-light dark:bg-ternary-dark h-7 w-7 cursor-pointer rounded-xl bg-gray-200 p-1 hover:bg-gray-100 dark:bg-[#181739] "></FiGithub>
              </a>
            </div>
            <p className="dark:text-ternary-light mb-2 w-fit rounded-xl bg-[#d9e8d6] px-3 py-[2px] text-sm dark:bg-[#181739]">
              {technologies}
            </p>
            <p className="text-md text-ternary-dark dark:text-ternary-light">
              - {intro}
            </p>
            <p className="text-md text-ternary-dark dark:text-ternary-light">
              - {details}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
