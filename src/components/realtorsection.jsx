import React from "react";
import mainImage from "../images/imagesformat/notyourimage1.svg";
import topRight from "../images/imagesformat/notyourimage2.svg";
import bottomRight from "../images/imagesformat/notyourimage3.svg";
import topleft from "../images/realtortopleft.svg";
const RealtorSection = () => {
  return (
    <div className="realtor-container">
      <div className="left-content">
        <img src={topleft}/>
        <h2>Not Your Average Realtor</h2>
        <p>
          Real estate has an eye for selling property, personal brand building design,
          and effective marketing to get homes seen by buyers online & offline.
        </p>
      </div>
      <div className="right-images">
        <div className="circle big">
          <img src={mainImage} alt="Realtor Main" />
        </div>
        <div className="circle small top-right">
          <img src={topRight} alt="Happy Client" />
        </div>
        <div className="circle small bottom-right">
          <img src={bottomRight} alt="Agent Presentation" />
        </div>
      </div>
    </div>
  );
};

export default RealtorSection;
