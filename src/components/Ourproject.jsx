import React from "react";
import img1 from "../images/imagesformat/imagegallery1.svg";
import img2 from "../images/imagesformat/imagegallery2.svg";
import img3 from "../images/imagesformat/imagegallery3.svg";
import img4 from "../images/imagesformat/imagegallery4.svg";
import img5 from "../images/imagesformat/imagegallery5.svg";

const projects = [
  { title: "Consultation", image: img1 },
  { title: "Design", image: img2 },
  { title: "Marketing & Design", image: img3 },
  { title: "Consultation & Marketing", image: img4 },
  { title: "Consultation", image: img5 },
];

const OurProjects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-subtitle">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>Project Name • Location</p>
            <button>READ MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
