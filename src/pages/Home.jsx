import AppBanner from "@/components/shared/AppBanner"
import ProjectsGrid from "@/components/projects/ProjectsGrid"
import { ProjectsProvider } from "@/context/ProjectsContext"
import { EditorialCarousel } from "@/components/projects/EditorialCarousel"
import { WebDesignCarousel } from "@/components/projects/WebDesignCarousel"
import "@/css/styles.css"

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner></AppBanner>

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>

      {/* web design */}
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">WEB DESIGN</p>
      </div>
      <div className="example-container">
        <WebDesignCarousel />
      </div>
      {/*  design */}
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">EDITORIAL DESIGN</p>
        {/* <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
         EDITORIAL DESIGN
        </h3> */}
      </div>
      <div className="example-container">
        <EditorialCarousel />
      </div>
    </div>
  )
}

export default Home
