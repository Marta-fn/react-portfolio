import React from "react";
import photo from "./images/photo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Photo.css";

export default function Photo() {
  return (
    <div className="Photo">
      <img src={photo} alt="Profile" className="img-fluid" />
      <div className="profileButton">
        <a
          href="https://www.linkedin.com/in/martarfnogueira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
