import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Hexagon } from "./hexagon.svg";
const iconTwitter = "./assets/icon-twitter.svg";
const iconGithub = "./assets/icon-github.svg";
const iconCodepen = "./assets/icon-codepen.svg";
const iconYoutube = "./assets/icon-youtube.svg";
const iconLinkedin = "./assets/icon-linkedin.svg";
const iconMedium = "./assets/icon-medium.svg";

const bees = [
  {
    title: "Twitter",
    url: "https://twitter.com/edalgrin",
    icon: <img src={iconTwitter} alt="" />,
  },
  {
    title: "Github",
    url: "https://github.com/edalgrin",
    icon: <img src={iconGithub} alt="" />,
  },
  {
    title: "Codepen",
    url: "https://codepen.com/edalgrin",
    icon: <img src={iconCodepen} alt="" />,
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/edalgrin/",
    icon: <img src={iconLinkedin} alt="" />,
  },
  {
    title: "Medium",
    url: "https://medium.com/@edalgrin",
    icon: <img src={iconMedium} alt="" />,
  },
  {
    title: "Youtube",
    url: "https://youtube.com/channel/UCkz8V_-rSVY19BcXk-gQRuA/featured",
    icon: <img src={iconYoutube} alt="" />,
  },
];

const Page = () => {
  const [awake, setAwake] = useState(false);

  return (
    <div className="page">
      <h1 className="neon">
        ed<span>uardo</span> al<span>le</span>grin<span>i</span>
      </h1>

      <div className={"hive" + (awake ? " awake" : "")}>
        <button
          className="bee queen"
          onClick={() => setAwake(!awake)}
          title="Open navigation"
        >
          <div className="icon">
            <Logo />
          </div>
        </button>

        <ul className="super">
          {bees.map((bee, i) => {
            return (
              <li key={i} className="cell">
                <a
                  href={bee.url}
                  target="_blank"
                  rel="noopener"
                  className="bee worker"
                  // rel="noopener noreferrer"
                  title={bee.title}
                >
                  <div className="icon">
                    <Hexagon />
                    {bee.icon}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
