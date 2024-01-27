import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import logoLight from '@/assets/images/logo-light.png';
import logoDark from '@/assets/images/logo-dark.png';
import { motion } from 'framer-motion';

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 block max-w-screen-lg py-6 sm:flex sm:items-center sm:justify-between xl:max-w-screen-xl">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex items-center justify-between px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === 'dark' ? (
                <img src={logoDark} className="" alt="Dark Logo" />
              ) : (
                <img src={logoLight} className="" alt="Dark Logo" />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="bg-primary-light dark:bg-ternary-dark ml-0 block cursor-pointer rounded-xl p-3 shadow-sm sm:hidden"
          >
            {activeTheme === 'dark' ? (
              <FiMoon className="text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light text-xl hover:text-gray-400" />
            ) : (
              <FiSun className="text-xl text-gray-200 hover:text-gray-50" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-secondary-dark dark:text-ternary-light h-7 w-7 fill-current"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'm-0 mt-5 block items-center justify-center bg-fuchsia-200 p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none'
              : 'hidden'
          }
        >
          <Link
            to="/projects"
            className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 block text-left  text-lg sm:mx-4 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light border-primary-light dark:border-secondary-dark mb-2  block border-t-2 pt-3 text-left text-lg sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
            aria-label="About Me"
          >
            About Me
          </Link>
        </div>

        {/* Header links large screen */}
        <div
          className="font-general-medium m-0 mt-5 hidden items-center justify-center p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none"
          style={{ marginLeft: 'auto' }}
        >
          <Link
            to="/projects"
            className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 block text-right  text-lg sm:mx-4 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 block text-right  text-lg sm:mx-4 sm:py-2"
            aria-label="About Me"
          >
            About Me
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className="hidden flex-col items-center justify-between sm:flex md:flex-row">
          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="bg-primary-light dark:bg-ternary-dark ml-8 cursor-pointer rounded-xl p-3 shadow-sm"
          >
            {activeTheme === 'dark' ? (
              <FiMoon className="text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light text-xl hover:text-gray-400" />
            ) : (
              <FiSun className="text-xl text-gray-200 hover:text-gray-50" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
