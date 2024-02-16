import React from "react";
import { Link } from "react-router-dom";

export const SuperConverter = () => {
  const [amount, setAmount] = React.useState<number>();
  const [invert, setInvert] = React.useState<boolean>(false);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.value가 string이어서 typescript에서는 타입을 명시해야하기 때문에 Integer로 바꾼다.
    const value = parseInt(event.target.value); // Number()를 사용하면 0이 지워지지  않는다.
    if(value === 0) return;
    setAmount(value);
  };

  const reset = () => {
    setAmount(parseInt(''))
  };

  const onInvert = () => {
    reset();
    setInvert((current) => !current)
  };

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={invert ? amount! * 60 : amount}   // amount as number로 명시해줘도 된다.
          id="minutes"
          placeholder="Minutes"
          onChange={onChangeInput}
          type="number"
          disabled={invert}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={invert ? amount : Math.round(amount! / 60)}
          id="hours"
          placeholder="Hours"
          onChange={onChangeInput}
          type="number"
          disabled={!invert}
        />
      </div>
      <br></br>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{invert ? "Turn Back" : "Invert"}</button>
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}
