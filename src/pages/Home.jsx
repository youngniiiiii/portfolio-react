import AppBanner from "@/components/shared/AppBanner"
import ProjectsGrid from "@/components/projects/ProjectsGrid"
import { ProjectsProvider } from "@/context/ProjectsContext"
import { EditorialCarousel } from "@/components/projects/EditorialCarousel"
import "@/css/styles.css"

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner></AppBanner>

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>
      <div className="example-container">
        <EditorialCarousel />
      </div>
    </div>
  )
}

export default Home
