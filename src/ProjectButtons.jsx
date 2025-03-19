import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ProjectButtons.css";

export default function ProjectButtons(props) {
  const gitMap = {
    weatherApp: "https://github.com/Marta-fn/meteorology-app",
    worldClock: "https://github.com/Marta-fn/World-clock",
    quoteGenerator: "https://github.com/Marta-fn/quote_generator",
    rockPaperScissor: "https://github.com/Marta-fn/rock-paper-scissors",
    reactWeatherApp: "https://github.com/Marta-fn/react-weather-app",
    dictionary: "https://github.com/Marta-fn/react-dictionary-project",
    pomodoroTimer: "https://github.com/Marta-fn/pomodoro-timer",
    pawfectMatch: "https://github.com/Marta-fn/most-loved-pet",
  };

  const websiteMap = {
    weatherApp: "https://marta-meteorology-app.netlify.app/",
    worldClock: "https://martafn-world-clock.netlify.app/",
    quoteGenerator: "https://martafn-quote-generator.netlify.app/",
    reactWeatherApp: "https://martafn-react-weather-app.netlify.app/",
    dictionary: "https://martafn-dictionary-app.netlify.app/",
    pomodoroTimer: "https://t-pomodoro.netlify.app/",
    pawfectMatch: "https://pawfectmatching.netlify.app/",
  };

  return (
    <div className="ProjectButtons">
      {gitMap[props.project] && (
        <a
          href={gitMap[props.project]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      )}

      {websiteMap[props.project] && (
        <a
          href={websiteMap[props.project]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-arrow-up-right-circle-fill"></i>
        </a>
      )}
    </div>
  );
}
