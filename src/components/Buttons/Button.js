import classes from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = (event) => {
    console.log(event.target.textContent);
  };
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick || onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
