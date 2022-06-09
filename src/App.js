import React, { Component, useState, useEffect } from "react";
import Buttons from "./Components/Buttons";
import nightModeBlackIcon from "./images/dark_mode_black_24dp.svg";
import nightModeWhiteIcon from "./images/dark_mode_white_24dp.svg";
import lightModeWhiteIcon from "./images/light_mode_white_24dp.svg";
import lightModeBlackIcon from "./images/light_mode_black_24dp.svg";
import soundOffIcon from "./images/volume_off.svg";
import soundOnIcon from "./images/volume_up.svg";
import fitty, { fit } from "fitty";

function App() {
  const [theme, setTheme] = useState(true);
  const [time, setTime] = useState();
  const [sound, setSound] = useState(true);

  const screenDark = {
    backgroundColor: "var(--screenDark)",
    color: "var(--textDark)",
  };
  const screenLight = {
    backgroundColor: "var(--screenColour)",
    color: "var(--textWhite)",
  };

  function changeTheme() {
    setTheme((prevState) => !prevState);
  }
  function toggleSound() {
    setSound((prevState) => !prevState);
  }

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      const second = dateObject.getSeconds();

      const currentTime = hour + ":" + minute + ":" + second;

      setTime(currentTime);
    }, 1000);
  }, []);

  const [date, setDate] = useState(
    // new Date().getHours() + ":" + new Date().getMinutes()
    new Date().toLocaleTimeString()
  );

  let darkStyles = {
    backgroundColor: "var(--mainColourDark)",
  };
  let dayStyles = {
    backgroundColor: "var(--mainColour)",
  };

  return (
    <div className="App" style={theme ? darkStyles : dayStyles}>
      <div className="text">
        <div className="text-child-left">
          <img
            className="themeIcon"
            alt="Theme toggle"
            src={theme ? lightModeWhiteIcon : nightModeBlackIcon}
            onClick={() => setTheme((prevState) => !prevState)}
          ></img>
          <img
            className="themeIcon"
            alt="Sound toggle"
            src={sound ? soundOnIcon : soundOffIcon}
            onClick={toggleSound}
          ></img>
        </div>
        <textarea
          className="time"
          id="time"
          value={time}
          style={theme ? screenDark : screenLight}
          readOnly
        ></textarea>
      </div>
      {/* <div className="topButtons">
          <div className="smallButtons">
               <button className="theme">  </button>
          </div>
          <div className="smallButtons">
              <button> 2 </button>
          </div>
          <div className="smallButtons">
               <button > ^ </button>
          </div>
        </div> */}
      <Buttons
        theme={theme}
        time={time}
        changeTheme={changeTheme}
        isSoundOn={sound}
      />
    </div>
  );
}

export default App;
