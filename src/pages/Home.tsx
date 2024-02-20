import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=''>
      <h1 className='font-size-3xl underline decoration-sky-500'>Home</h1>
      <ol className='list-decimal list-outside'>
        <li><Link to="/counteattack" className='no-underline hover:underline'>Count Attack</Link></li>
        <li><Link to="/superconverter" className='no-underline hover:underline'>Super Converter</Link></li>
        <li><Link to="/props_tutorials/props" className='no-underline hover:underline'>React Props Test1</Link></li>
        <li><Link to="/props_tutorials/demoprops" className='no-underline hover:underline'>React Props Test2</Link></li>
        <li><Link to="/demouseeffect" className='no-underline hover:underline'>React useEffect Test</Link></li>
        <li><Link to="/todolist" className='no-underline hover:underline'>React ToDoList Test</Link></li>
        <li><Link to="/coins" className='no-underline hover:underline'>Coin List Test</Link></li>
        <li><Link to="/movieapp" className='no-underline hover:underline'>MovieApp List Test</Link></li>
        <li><Link to="/pirateship3d" className='no-underline hover:underline'>3D Pirate Ship Using Three.js</Link></li>
        <li><Link to="/cartoon3d" className='no-underline hover:underline'>Cartoon 3D (.glTF) Using Three.js</Link></li>
      </ol>
    </div>
  );
}
