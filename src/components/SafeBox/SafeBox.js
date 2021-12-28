import React, { useState } from "react";

import "./SafeBox.css";
import Lights from "../Lights/Lights";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";

const SafeBox = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const generateRandomNumberHandler = () => {
    setRandomNumber(Math.random().toString().substring(2, 6));
  };

  return (
    <div className="safe_box">
      <h2>safebox</h2>
      <p>password : {randomNumber}</p>
      <Lights />
      <Display />
      <Buttons startClicked={generateRandomNumberHandler} />
    </div>
  );
};

export default SafeBox;
