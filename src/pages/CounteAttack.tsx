import React from "react";
import { Link } from "react-router-dom";

export const CounteAttack = ()=> {
  const [counter, setCounter] = React.useState(0);
  const click = () => {
    // 이렇게 해도 되지만, 오류가 발생할 수도 있다.
    // setCounter(counter + 1);
    setCounter((current) => current + 1)
  };
  return (
    <div className="App">
      <h1>
        Total clicks: {counter}
      </h1>
      <button onClick={click}>
        Click me
      </button>
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}
