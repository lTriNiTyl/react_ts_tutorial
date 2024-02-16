import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ol>
        <li><Link to="/counteattack">Count Attack</Link></li>
        <li><Link to="/superconverter">Super Converter</Link></li>
        <li><Link to="/props_tutorials/props">React Props Test1</Link></li>
        <li><Link to="/props_tutorials/demoprops">React Props Test2</Link></li>
        <li><Link to="/demouseeffect">React useEffect Test</Link></li>
        <li><Link to="/todolist">React ToDoList Test</Link></li>
        <li><Link to="/coins">Coin List Test</Link></li>
        <li><Link to="/movieapp">MovieApp List Test</Link></li>
      </ol>
    </div>
  );
}
