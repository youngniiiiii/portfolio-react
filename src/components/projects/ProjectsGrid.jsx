import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from '@/components/projects/ProjectSingle';
import { ProjectsContext } from '@/context/ProjectsContext';
import { Link } from 'react-router-dom';
import Button from '@/components/reusable/Button';

const ProjectsGrid = () => {
  const { projects, setSearchProject, searchProjectsByTitle } =
    useContext(ProjectsContext);
  return (
    <section className="mt-5 py-5 sm:mt-10 sm:py-10">
      {/* 제목 */}
      <div className="mt-30 text-center">
        <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-1 text-2xl sm:text-4xl">
          FRONTEND PROJECTS
        </p>
      </div>
      {/* 검색창 */}
      <div className="mt-10 sm:mt-16">
        <div
          className="
                        border-primary-light
                        dark:border-secondary-dark
                        flex justify-between
                        gap-3
                        border-b
                        pb-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                bg-primary-light
                                dark:bg-ternary-dark
                                hidden
                                cursor-pointer
                                rounded-xl
                                p-2.5
                                shadow-sm
                                sm:block
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light h-5 w-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                dark:border-secondary-dark
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark 
                            dark:text-ternary-light
                                rounded-lg
                                border
                                border-gray-200
                                py-2
                                pl-3
                                pr-1
                                text-sm
                                sm:px-4
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
        </div>
      </div>
      {/* 프로젝트 정보 */}
      <div className="mb-20 mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2">
        {
          // 'projects' 대신 'searchProjectsByTitle'을 사용하여 필터링된 프로젝트 목록을 보여줍니다.
          searchProjectsByTitle.map((project) => (
            <ProjectSingle
              title={project.title}
              image={project.img}
              href={project.href}
              alt={project.alt}
              intro={project.intro}
              details={project.details}
              technologies={project.technologies}
              github={project.github}
              key={project.id}
            />
          ))
        }
      </div>

      {/* 더보기버튼 */}
      <div className="mb-10 mt-10 flex justify-center sm:mt-10">
        <Link
          to="/projects"
          className="font-general-medium flex items-center rounded-lg bg-[#6A9E4C] px-6 py-3 text-lg text-white shadow-lg duration-300 hover:bg-[#4e7537] hover:shadow-xl focus:ring-1 focus:ring-indigo-900 sm:text-xl"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsGrid;
