import React from "react";
import "./Projects.css";
import weatherApp from "./images/weatherApp.png";
import worldClock from "./images/worldClock.png";
import sheCodesChallenge from "./images/SheCodesChallenge.png";
import quoteGenerator from "./images/quoteGenerator.png";
import rockPaperScissor from "./images/rockPaperScissors.png";
import reactWeatherApp from "./images/reactWeatherApp.png";
import dictionary from "./images/dictionary.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card w-100 text-center">
            <img src={weatherApp} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img src={worldClock} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img src={sheCodesChallenge} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card w-100 text-center">
            <img src={quoteGenerator} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img src={rockPaperScissor} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img src={reactWeatherApp} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card w-100 text-center">
            <img src={dictionary} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
