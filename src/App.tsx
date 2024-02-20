import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import { CounteAttack } from './pages/CounteAttack';
import { SuperConverter } from './pages/SuperConverter';
import { Props } from './pages/props_tutorials/Props';
import DemoProps from './pages/props_tutorials/DemoProps'
import DemoUseEffect from './pages/DemoUseEffect';
import {TodoList} from './pages/TodoList';
import { Coins } from './pages/Coins';
import { MovieApp } from './pages/MovieApp';
import { Detail } from './pages/Detail';
import {PirateShip3d} from './pages/PirateShip3d';
import CarToon3d from './pages/CarToon3d';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counteattack" element={<CounteAttack />} />
      <Route path="/superconverter" element={<SuperConverter />} />
      <Route path="/props_tutorials/props" element={
        <div>
          <h1>Button Title Change Props!!</h1>
          <Props />
        </div>
      } />
      <Route path="/props_tutorials/demoprops" element={
        <div>
          <h1>Button Title Props!!</h1>
          <DemoProps text={'Continue'} />
        </div>
      } />
      <Route path="/demouseeffect" element={
        <div>
          <h1>React useEffect Test!!</h1>
          <DemoUseEffect />
        </div>
      } />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/movieapp" element={<MovieApp />} />
      <Route path="/movieapp/:id" element={
        <Detail />
      } />
      <Route path="/pirateship3d" element={<PirateShip3d />} />
      <Route path="/cartoon3d" element={<CarToon3d />} />
    </Routes>
  );
}

export default App;
