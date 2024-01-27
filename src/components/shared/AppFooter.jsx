import { FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

const socialLinks = [
  {
    id: 1,
    icon: <FiMessageCircle />,
    url: 'https://open.kakao.com/o/sJSOnvxd/',
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/youngniiiiii',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/young-ni-4a262a282/',
  },
];

const AppFooter = () => {
  return (
    <footer className="container mx-auto">
      <div className="sm:pt-30 border-primary-light dark:border-secondary-dark mt-20 border-t-2 pb-8 pt-20">
        {/* Footer social links */}
        <div className="font-general-regular mb-12 flex flex-col items-center justify-center sm:mb-28">
          <p className="text-primary-dark dark:text-primary-light mb-5 text-3xl sm:text-4xl">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="dark:bg-ternary-dark cursor-pointer rounded-lg bg-gray-50 p-4 text-gray-400 shadow-sm duration-300 hover:bg-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
