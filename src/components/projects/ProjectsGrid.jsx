import { useContext } from "react"
import { FiSearch } from "react-icons/fi"
import ProjectSingle from "@/components/projects/ProjectSingle"
import { ProjectsContext } from "@/context/ProjectsContext"
import { Link } from "react-router-dom"
import Button from "@/components/reusable/Button"

const ProjectsGrid = () => {
  const { projects, setSearchProject } = useContext(ProjectsContext)
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      {/* 제목 */}
      <div className="text-center mt-30">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">FRONTEND PROJECTS</p>
      </div>
      {/* 검색창 */}
      <div className="mt-10 sm:mt-16">
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value)
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10 mb-20">
        {projects.map((project) => (
          <ProjectSingle title={project.title} image={project.img} href={project.href} alt={project.alt} description={project.description} key={project.id} />
        ))}
      </div>

      {/* 더보기버튼 */}
      <div className="mt-10 mb-10 sm:mt-10 flex justify-center">
        <Link to="/projects" className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-[#6A9E4C] hover:bg-[#4e7537] focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300" aria-label="More Projects">
          <Button title="More Projects" />
        </Link>
      </div>
    </section>
  )
}

export default ProjectsGrid
