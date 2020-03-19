import React from "react";
import image from "./assets/Dino.jpg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello my name is Eliana!</h1>
      <h2>I love dinos!</h2>
      <img src={image} alt="dino" className="dino-image" />
    </div>
  );
}
