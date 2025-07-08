import React from "react";
import bgImage from "../images/imagesformat/footerimage.svg";
import Logo from '../images/imagesformat/logo.svg';
import facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import Instagram from "../images/icons/instagramicon.svg";
import Linkedin from "../images/icons/Linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Top CTA Background Section */}
      <div className="footer-banner" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="banner-content">
          <h2>
            Learn more about our listing process, as well as our<br />
            additional staging and design work.
          </h2>
          <button className="cta-btn">LEARN MORE</button>
        </div>
      </div>

      {/* Middle Navigation and Subscribe Section */}
      <div className="footer-mid">
        <ul className="footer-nav">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Subscribe to</li>
        </ul>
        <div className="footer-subscribe">
          <input type="email" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="footer-bottom">
        <p>All Rights Reserved 2025</p>
        <div className="footer-branding">
          <img src={Logo}/>
        </div>
        <div className="social-icons">
            <img Src={facebook}/>
            <img Src={Instagram}/>
            <img Src={Twitter}/>
            <img Src={Linkedin}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

