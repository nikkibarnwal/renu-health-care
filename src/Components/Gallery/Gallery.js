import React, { useEffect } from "react";
import "./Gallery.css";
import Herosection from "./herosection";
import Grid from "./grid";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []); // Runs only once after initial render

  return (
    <>
      <div className="sm:w-11/12 bg-[#E1F0DA] m-auto">
        <Herosection />
        <Grid />
      </div>
    </>
  );
};

export default Gallery;
