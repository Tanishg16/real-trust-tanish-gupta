import React from "react";
import img1 from "../images/imagesformat/imagegallery1.svg";
import img2 from "../images/imagesformat/imagegallery2.svg"; 
import img3 from "../images/imagesformat/imagegallery1.svg"; 
import organebottom from "../images/gallerybottom.svg";

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        <div className="gallery-item gallery-topleft">
          <img src={img1} alt="Handshake" />
          <div className="corner-icon" />
        </div>
        <div className="gallery-item gallery-center">
          <img src={img2} alt="Agent Tour" />
          <div className="corner-icon" />
        </div>
        <div className="gallery-item gallery-bottomright">
          <img src={img3} alt="Consultation" />
          <div className="corner-icon" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
