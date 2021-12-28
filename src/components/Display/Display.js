import React from "react";

import classes from "./Display.module.css";

const Display = (props) => {
  return <div className={classes.display}>{props.combination}</div>;
};

export default Display;
