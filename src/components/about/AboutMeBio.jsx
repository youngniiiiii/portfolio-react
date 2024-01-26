import profileImage from "@/assets/images/profile.webp"
// import { useContext } from "react"
// import AboutMeContext from "@/context/AboutMeContext"

const AboutMeBio = () => {
  // const { aboutMe } = useContext(AboutMeContext)

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left flex gap-10 ">
        <div>
          <h3 className="mb-4 text-ternary-dark dark:text-ternary-light text-2xl font-bold">Development Skills</h3>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            + Javascript <br />+ HTML
            <br /> + CSS / Sass / Tailwind
            <br /> + framer-motion
            <br /> + React
            <br /> + React Query
            <br /> + PocketBase
            <br /> + Zustand
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-ternary-dark dark:text-ternary-light text-2xl font-bold">Design Skills </h3>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            + Figma
            <br /> + Photoshop GTQ 1급
            <br /> + Illustrator
            <br /> + InDesign
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMeBio
