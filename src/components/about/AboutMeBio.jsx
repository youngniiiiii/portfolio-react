import profileImage from '@/assets/images/profile.webp';
// import { useContext } from "react"
// import AboutMeContext from "@/context/AboutMeContext"

const AboutMeBio = () => {
  // const { aboutMe } = useContext(AboutMeContext)

  return (
    <div className="mt-10 block sm:mt-20 sm:flex sm:gap-10">
      <div className="mb-7 w-full sm:mb-0 sm:w-1/4">
        <img src={profileImage} className="w-96 rounded-lg" alt="" />
      </div>

      <div className="font-general-regular flex w-full gap-10 text-left sm:w-3/4 ">
        <div>
          <h3 className="text-ternary-dark dark:text-ternary-light mb-4 text-2xl font-bold">
            Development Skills
          </h3>
          <p className="text-ternary-dark dark:text-ternary-light mb-4 text-lg">
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
          <h3 className="text-ternary-dark dark:text-ternary-light mb-4 text-2xl font-bold">
            Design Skills{' '}
          </h3>
          <p className="text-ternary-dark dark:text-ternary-light mb-4 text-lg">
            + Figma
            <br /> + Photoshop GTQ 1급
            <br /> + Illustrator
            <br /> + InDesign
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;
