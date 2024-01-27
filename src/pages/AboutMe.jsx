import AboutMeBio from '@/components/about/AboutMeBio';
import { AboutMeProvider } from '@/context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
