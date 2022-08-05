import React, { useState } from "react";
import sound from "../sounds/mixkit-message-pop-alert-2354.mp3";
// import { Howl } from "howler";
import equals from "../sounds/mixkit-hard-pop-click-2364.wav";
import divide from "../images/Divide.png";
import back from "../images/Backspace (2).png";
import multiply from "../images/X.png";
import minus from "../images/Minus.png";
import plus from "../images/Plus.png";
import cancelAll from "../images/C.png";
import equalTo from "../images/Equals.png";
// import { set } from "immer/dist/internal";
// import back from "./images/Backspace.png"
// import back from "./images/Divide.png"

export default function Buttons({ theme, time, changeTheme, isSoundOn }) {
  const darkStyles = {
    backgroundColor: "var(--mainColourDark)",
    color: "white",
  };

  const dayStyles = {
    backgroundColor: "var(--mainColour)",
  };

  const screenDark = {
    backgroundColor: "var(--screenDark)",
    color: "var(--textDark)",
  };
  const screenLight = {
    backgroundColor: "var(--screenColour)",
    color: "var(--textWhite)",
  };
  const [input, setInput] = useState("");

  // const callMySound = (src) => {
  //   const sound = new Howl({ src, html5: true });
  //   sound.play();
  // };

  document.addEventListener("keypress", (event) => {
    press(event);
  });

  function press(event) {
    // callMySound(sound);
    // isSoundOn && callMySound(sound);
    const pop = new Audio(sound);
    isSoundOn && pop.play();
    setInput((prevState) => {
      // The conditional below checks if the last input and the new input
      // are both operators i.e not numbers and prevents chaining of operators.
      if (
        (prevState[prevState.length - 1] === "*" ||
          prevState[prevState.length - 1] === "+" ||
          prevState[prevState.length - 1] === "-" ||
          prevState[prevState.length - 1] === "/") &&
        //-------------------------------------------\\
        (event.target.id === "*" ||
          event.target.id === "+" ||
          event.target.id === "-" ||
          event.target.id === "/")
      ) {
        return prevState;
      }

      if (
        prevState === "" &&
        (event.target.id === "*" ||
          event.target.id === "/" ||
          event.target.id == "**")
      ) {
        return prevState;
      }

      return prevState + event.target.id;
    });
  }

  function getResult() {
    // isSoundOn && callMySound(equals);
    const click = new Audio(equals);
    isSoundOn && click.play();
    if (input === "") {
      return;
    }
    let stringedInput = input.toString().replace(/[^-()\d/*+.]/g, "");
    setInput((prevState) => Function("return " + stringedInput)());
    // setInput((prevState) => eval(prevState).toString());
  }
  function del() {
    // isSoundOn && callMySound(equals);
    const click = new Audio(equals);
    isSoundOn && click.play();
    setInput((prevState) => {
      if (prevState === "Infinity") {
        return "";
      }
      return prevState.slice(0, -1);
    });
  }

  function cancel() {
    // isSoundOn && callMySound(equals);
    const click = new Audio(equals);
    isSoundOn && click.play();
    setInput("");
  }
  return (
    <>
      <div className="screens">
        <textarea
          className="screenInput"
          value={input}
          style={theme ? screenDark : screenLight}
          readOnly
        />
      </div>
      <div className="Buttons">
        <div className="buttonContainer">
          <button
            onClick={cancel}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {" "}
            <img src={cancelAll} />
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="**"
            onClick={press}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            exp{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="del"
            onClick={del}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {/* &lt;&lt;  */}
            <img src={back}></img>
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="/"
            onClick={press}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {/* <img src={divide} /> */} /
          </button>
        </div>
        <div className="buttonContainer">
          {" "}
          <button
            id="7"
            className="seven"
            onClick={press}
            style={theme ? darkStyles : dayStyles}
          >
            7{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button id="8" onClick={press} style={theme ? darkStyles : dayStyles}>
            8{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button id="9" onClick={press} style={theme ? darkStyles : dayStyles}>
            9{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="*"
            onClick={press}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {/* <img src={multiply}></img> */} x
          </button>
        </div>
        <div className="buttonContainer">
          <button id="4" onClick={press} style={theme ? darkStyles : dayStyles}>
            4
          </button>
        </div>
        <div className="buttonContainer">
          <button id="5" onClick={press} style={theme ? darkStyles : dayStyles}>
            5{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button id="6" onClick={press} style={theme ? darkStyles : dayStyles}>
            {" "}
            6{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="-"
            data-symbol="minusAttribute"
            onClick={press}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {/* <img src={minus}></img> */} -
          </button>
        </div>
        <div className="buttonContainer">
          <button id="1" onClick={press} style={theme ? darkStyles : dayStyles}>
            1{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button id="2" onClick={press} style={theme ? darkStyles : dayStyles}>
            2{" "}
          </button>
        </div>
        <div className="buttonContainer">
          <button id="3" onClick={press} style={theme ? darkStyles : dayStyles}>
            3
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="+"
            onClick={press}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            {/* <img src={plus}></img> */} +
          </button>
        </div>
        <div className="buttonContainer">
          <button
            id="00"
            onClick={press}
            style={theme ? darkStyles : dayStyles}
          >
            00
          </button>
        </div>
        <div className="buttonContainer">
          <button id="0" onClick={press} style={theme ? darkStyles : dayStyles}>
            0
          </button>
        </div>
        <div className="buttonContainer">
          <button id="." onClick={press} style={theme ? darkStyles : dayStyles}>
            {" "}
            .
          </button>
        </div>
        <div className="buttonContainer">
          <button
            onClick={getResult}
            className="coloured"
            style={theme ? darkStyles : dayStyles}
          >
            <img src={equalTo}></img>
          </button>
        </div>
      </div>
    </>
  );
}
