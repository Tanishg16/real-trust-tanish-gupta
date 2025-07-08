import React from "react";
import home from "../images/icons/home.svg";
import dollarsign from "../images/icons/circle-dollar-sign.svg";
import paintbrush from "../images/icons/paintbrush-2.svg";
 

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <h2 className="why-title">Why Choose Us?</h2>
      <div className="underline" />
      <div className="why-features">
        <div className="feature-box">
          <div className="icon-circle"> 
            <img src={home}/>
          </div>
          <h3>Potential ROI</h3>
          <p>
            Whether you're looking to buy a new property or renovate your current home for resale, we will walk you through powerful return-on-investment processes.
          </p>
        </div>
        <div className="feature-box">
          <div className="icon-circle">
            <img src={paintbrush}/>
          </div>
          <h3>Design</h3>
          <p>
            Our designers and in-house design process are here to guide through your design options and award-winning architecture to streamline the home upgrade.
          </p>
        </div>
        <div className="feature-box">
          <div className="icon-circle">
            <img src={dollarsign}/>
          </div>
          <h3>Marketing</h3>
          <p>
            Creating your identity, professional photos and a sophisticated digital marketing plan accompany every listing to match today's buyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
