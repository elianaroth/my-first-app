import React from "react";
import image from "./assets/Dino4.jpg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Eliana Roth!</h1>
      <h2>I love dinos!</h2>
      <img src={image} alt="dino" className="dino-image" />
    </div>
  );
}
