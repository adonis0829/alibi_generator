import { useState, useEffect } from "react";
import Axios from "axios";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  const [generateAlibi, setGenerateAlibi] = useState("");
  const fetchAlibi = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenerateAlibi(res.data[0].excuse);
      }
    );
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div
        id="google_translate_element"
        className={`App ${isDarkMode ? "dark" : "light"}`}
      >
        <h1>Alibi Generator</h1>
        <div className="App">
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("family")}
          >
            Family
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("office")}
          >
            Office
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("children")}
          >
            Children
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("college")}
          >
            College
          </button>
          <button className="glow-on-hover" onClick={() => fetchAlibi("party")}>
            Party
          </button>
          <button className="glow-on-hover" onClick={() => fetchAlibi("funny")}>
            Funny
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("unbelievable")}
          >
            Unbelievable
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("developers")}
          >
            Developers
          </button>
          <button
            className="glow-on-hover"
            onClick={() => fetchAlibi("gaming")}
          >
            Gaming
          </button>
        </div>
        <p className="text">{generateAlibi}</p>
        <button className="glow-on-hover theme" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
