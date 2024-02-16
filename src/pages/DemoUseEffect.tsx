import React from 'react'
import { useState, useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, [])
  return (
    <h1>Hello</h1>
  )
}
/*
 * 화면이 rendering되면서 내가 원하지 않는 부분까지 수행을 하게 되는데,
 * useEffect를 사용하면 useEffect에 포함된 callback함수는 실행하지 않는다.
*/
function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (e: any) => setKeyword(e.target.value);
  const [showing, setShowing] = useState(false);
  const onShowClick = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  
  // type : callback function, any array
  useEffect(() => {
    console.log("I run when 'keyword & count' changes.");
  }, [keyword, count]);

/*
    useEffect(() => {
        console.log("I run when 'count' changes.");
    }, [count]);
*/
  return (
    <div>
      <h3>Button Show & Hide</h3>
      {showing ? <Hello /> : null}
      <button onClick={onShowClick}>{showing ? "Hide" : "Show"}</button>
      <hr></hr>
      <h3>useEffect Basic</h3>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default DemoUseEffect
