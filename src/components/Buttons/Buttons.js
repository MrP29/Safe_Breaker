import Button from "./Button";

const Buttons = (props) => {
  const startHandler = () => {
    props.startClicked();
  };

  return (
    <div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button type="reset">C</Button>
      </div>
      <div>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
        <Button type="submit">E</Button>
      </div>
      <div>
        <Button onClick={startHandler}>Start</Button>
      </div>
    </div>
  );
};

export default Buttons;
