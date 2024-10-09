import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import img1 from "./images/img3.png";
import img2 from "./images/img2.png";
import img3 from "./images/img1.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";
import img11 from "./images/img11.png";
import img12 from "./images/img12.png";
import img13 from "./images/img13.png";
import img14 from "./images/img14.png";
import img15 from "./images/img15.png";
import img16 from "./images/img16.png";
import img17 from "./images/img17.png";
import img18 from "./images/img18.png";
import { useInView } from "react-intersection-observer";

const Grid = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const arr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];
  const galleryRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      const galleryTop = galleryRef.current.offsetTop;
      const galleryBottom = galleryTop + galleryRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= galleryTop && scrollPosition <= galleryBottom) {
        const images = document.querySelectorAll(".gall-img img");
        images.forEach((img, index) => {
          img.style.animation = `fadeIn 1s ${index * 0.1}s forwards`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openFullscreenImage = (imgSrc, index) => {
    setFullscreenImage(imgSrc);
    setCurrentIndex(index);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % arr.length;
    setCurrentIndex(nextIndex);
    setFullscreenImage(arr[nextIndex]);
  };

  const goToPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + arr.length) % arr.length;
    setCurrentIndex(previousIndex);
    setFullscreenImage(arr[previousIndex]);
  };

  return (
    <>
      <div
        ref={galleryRef}
        className="flex justify-center items-center h-full my-8"
      >
        <div ref={ref} className="grid grid-cols-3 gap-4 p-4 mx-auto">
          {arr.map((img, index) => (
            <div
              key={index}
              id={`img-${index}`}
              className={`gall-img ${
                inView ? "fade-in" : ""
              } pb-2 border-8 border-white rounded-lg`}
              onClick={() => openFullscreenImage(img, index)}
            >
              <img
                src={img}
                alt="click"
                className="w-full rounded h-full object-cover"
                style={{ opacity: 0 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Fullscreen Image */}
      {fullscreenImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 backdrop-blur-lg">
          <div className="relative">
            <button
              onClick={closeFullscreenImage}
              className="absolute top-4 right-4 text-white text-xl focus:outline-none"
            >
              &times;
            </button>
            <button
              onClick={goToPreviousImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
            >
              &#8249;
            </button>
            <button
              onClick={goToNextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
            >
              &#8250;
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
