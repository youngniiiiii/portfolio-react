const AboutMeBio = () => {
  return (
    <>
      <div className="mt-10 block flex-col px-10 sm:mt-20 sm:flex sm:gap-10">
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Frontend Developer & <br /> Web Designer
            </span>
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 lg:pr-40 lg:text-xl">
            사용자 경험에 관심이 많은 웹디자이너 출신 프론트엔드 개발자입니다.
            리액트를 활용한 프로젝트 경험과 UI/UX에 대한 깊은 관심을 가지고
            있습니다. 웹디자이너로 근무 및 쇼핑몰 운영 경력을 바탕으로 다양한
            실무 경험이 있습니다.
          </p>
        </div>
        <div className="font-general-regular mt-10 flex w-full gap-10 text-left sm:w-3/4 ">
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
              Design Skills
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
    </>
  );
};

export default AboutMeBio;
