import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import web1 from '@/assets/images/project-web/web-1.webp';
import web2 from '@/assets/images/project-web/web-2.webp';
import web3 from '@/assets/images/project-web/web-3.webp';
const web4 = 'https://bongtwoad.cafe24.com/auction/2021/book-6.jpg';
const web5 = 'https://bongtwoad.cafe24.com/auction/2021/book-13.jpg';
const web6 = 'https://bongtwoad.cafe24.com/auction/2021/book-14.jpg';

const images = [web1, web2, web3, web4, web5, web6];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export function WebDesignCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="next" onClick={() => paginate(1)}>
        {'⭢'}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {'⭢'}
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="editorialImg shadow-cover bg-secondary-light dark:bg-ternary-dark mb-10 cursor-pointer rounded-xl hover:shadow-xl sm:mb-0"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </>
  );
}
