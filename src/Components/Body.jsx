import React, { useState, useEffect, createContext } from "react";
import Header from "./Header";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function Body() {

  /* ------>         countdown Button      <------     */
  const [time, setTime] = useState(15);
  const [isClicked, setIsClicked] = useState(false);

  const click = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (!isClicked) return;

    const interval = setInterval(() => {
      if (time > 0) setTime((p) => p - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isClicked, time]);

  /* ------>         dark mode Button      <------     */


  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header time={time} />
        <div className="button">
          <button className="toggle" onClick={click}>
            countdown
          </button>

        </div>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
