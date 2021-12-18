import React from "react";

const StartButton = (props) => {
  const startHandler = () => {
    props.startClicked();
  };
  return <button onClick={startHandler}>Start</button>;
};

export default StartButton;
