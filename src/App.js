import React from 'react';
import "./App.css";
import LogoComponent from "./components/LogoComponent";
import PhilosophyComponent from "./components/PhilosophyComponent";
import SifuComponent from "./components/SifuComponent";
import CaveatComponent from "./components/CaveatComponent";
import TuitionComponent from "./components/TuitionComponent";
import CommunityComponent from "./components/CommunityComponent";

function App() {
  return (
    <div className="App">
    <LogoComponent></LogoComponent>
    <PhilosophyComponent></PhilosophyComponent> 
    <SifuComponent></SifuComponent>
    <CaveatComponent></CaveatComponent>
    <TuitionComponent></TuitionComponent>
    <CommunityComponent></CommunityComponent>
    </div>
  );
}

export default App;
