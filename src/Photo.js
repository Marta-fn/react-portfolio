import React from "react";
import photo from "./images/photo.jpg";
import "./Photo.css";

export default function Photo() {
  return (
    <div className="Photo">
      <img src={photo} alt="Profile" className="img-fluid" />
    </div>
  );
}
