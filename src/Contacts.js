import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="linkedIn">
        <i class="bi bi-linkedin"></i>
        <a
          href="linkedin.com/in/martarfnogueira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="email">
        <i class="bi bi-envelope-at-fill"></i>
        <a
          href="mailto:martoocas.fn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          martoocas.fn@gmail.com
        </a>
      </div>
    </div>
  );
}
