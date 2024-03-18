// Import images
import project1 from '@/assets/images/project-front/port-1.webp';
import project2 from '@/assets/images/project-front/port-2.webp';
import project3 from '@/assets/images/project-front/port-3.webp';
import project4 from '@/assets/images/project-front/port-4.webp';

export const projectsData = [
  {
    id: 1,
    title: 'CAFE JIJO',
    img: project2,
    href: 'https://cafe-jijo.vercel.app/',
    intro: '메가커피를 모티브한 카페 웹사이트',
    details: '반응형 디자인, 게시판 구현 ',
    technologies: 'React, Tailwind, React-Query, PocketBase',
    github: 'https://github.com/FRONTENDSCHOOL6/JIJO-cafe',
    description: '',
    alt: '프로젝트',
  },
  {
    id: 2,
    title: 'LUMIÉRE DE LAUBE',
    img: project3,
    href: 'https://seobinbang7.github.io/lumieleu/',
    intro: '전시장에 작품을 감상하는 듯한 포스터 판매 사이트',
    details: '로그인, 카카오로그인, 회원가입, 로그아웃 구현',
    technologies: 'React, Tailwind, Kakao-api, Figma, Zustand',
    github: 'https://github.com/youngniiiiii/lumieleu-?tab=readme-ov-file',
    description: '',
    alt: '프로젝트',
  },
  {
    id: 3,
    title: 'MARKET KARLY',
    img: project1,
    href: 'https://karly-css3.netlify.app/',
    intro: "마켓 컬리를 클론 코딩한 '마켓칼리' ",
    details: 'SASS로 클론코딩 후, Tailwind로 리팩토링',
    description: '- mixin 구성과 장바구니 기능 개발',
    technologies: 'SASS, Tailwind, html, Javascript, json-server',
    github: 'https://github.com/youngniiiiii/sayho-karly',
    alt: '프로젝트',
  },
  {
    id: 3,
    title: 'YOUNGNI PORTFOLIO',
    img: project4,
    href: 'https://portfolio-youngni.vercel.app/',
    intro: '반응형 디자인(모바일,태블릿,데스크탑), 다크모드 ',
    details: '클론후 css수정, Framer-motion, 캐러셀 추가',
    description: '',
    technologies: 'Tailwind, html, react, Javascript, framer-motion',
    github: 'https://github.com/youngniiiiii/portfolio-react',
    alt: '프로젝트',
  },
];
