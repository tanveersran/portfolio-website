import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="relative w-full h-[50vh] max-h-[600px] ">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex flex-col items-center justify-center"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 50) goToPrevious();
            if (info.offset.x < -50) goToNext();
          }}
        >
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(slides[currentIndex].image)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        {slides[currentIndex].caption && (
          <p className="text-center text-white text-lg font-semibold">
            {slides[currentIndex].caption}
          </p>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
      >
        ❯
      </button>


      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-screen max-h-screen object-fill rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
