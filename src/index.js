import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import logo from "./logo.svg";
import logoTwitter from "./logo-twitter.svg";
import logoGithub from "./logo-github.svg";
import logoCodepen from "./logo-codepen.svg";
import logoYoutube from "./logo-youtube.svg";
import logoLinkedin from "./logo-linkedin.svg";
import logoMedium from "./logo-medium.svg";

const bees = [
  { title: "Twitter", url: "https://twitter.com/edalgrin", icon: logoTwitter },
  { title: "Github", url: "https://github.com/edalgrin", icon: logoGithub },
  { title: "Codepen", url: "https://codepen.com/edalgrin", icon: logoCodepen },
  {
    title: "Youtube",
    url: "https://youtube.com/channel/UCkz8V_-rSVY19BcXk-gQRuA/featured",
    icon: logoYoutube,
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/edalgrin/",
    icon: logoLinkedin,
  },
  { title: "Medium", url: "https://medium.com/@edalgrin", icon: logoMedium },
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
          <img src={logo} alt="" />
        </button>

        <ul className="super">
          {bees.map((bee, i) => {
            return (
              <li key={i} className="cell">
                <a
                  href={bee.url}
                  target="_blank"
                  className="bee worker"
                  rel="noopener noreferrer"
                  title={bee.title}
                >
                  <img src={bee.icon} alt="" />
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
