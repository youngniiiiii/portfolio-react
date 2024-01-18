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
        <p className="font-general-medium text-2xl sm:text-4xl mb-2 text-ternary-dark dark:text-ternary-light mt-20 ">WEB DESIGN</p>
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        sm:text-md text-sm
                        mb-20
                        "
        >
          ( 배너 / 상세페이지 / 공지 / 보정 )
        </h3>
      </div>
      <div className="example-container">
        <WebDesignCarousel />
      </div>
      {/*  design */}
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-2 text-ternary-dark dark:text-ternary-light mt-30">EDITORIAL DESIGN</p>
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        sm:text-md text-sm
                        mb-20
                        "
        >
          ( 북커버 / 잡지 / 명함 / 리플랫 / 배너 )
        </h3>
      </div>
      <div className="example-container">
        <EditorialCarousel />
      </div>
    </div>
  )
}

export default Home
