import {React, useState} from "react";
import BackgrondImage from "../images/imagesformat/contactimage.svg"
const ContactForm = () => {
   const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:\n' + JSON.stringify(formData, null, 2));
  };
   return (
    <div className="contactform-container"
     style={{
        paddingTop: "120px",
        backgroundImage: `url(${BackgrondImage})`,
      }}>
      {/* Left Section */}
      <div className="contactform-left">
        <h1 className="contactform-subtitle">Consultation,<br/>Design,<br/>& Marketing,</h1>
      </div>

      {/* Right Section */}
      <div className="contactform-features">
        <form onSubmit={handleSubmit} className="contact-form">
        <h2>Get a Free Consultation</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Area City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Get Quick Quote</button>
      </form>
      </div>
    </div>
  );
};
 export default ContactForm ;