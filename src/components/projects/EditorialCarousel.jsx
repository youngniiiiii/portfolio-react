import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

const images = [
  "https://bongtwoad.cafe24.com/auction/2021/book-1.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-2.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-3.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-4.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-5.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-6.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-7.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-8.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-9.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-10.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-11.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-12.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-13.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-14.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-15.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-16.jpg",
  "https://bongtwoad.cafe24.com/auction/2021/book-17.jpg",
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
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
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export function EditorialCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  )
}
