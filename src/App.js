import React, { useState } from "react";
import Header from "./components/Header";
import initialState from "./data.json";
import JobPositionContainer from "./components/JobPositionContainer";
import "./App.css";
import JobPositionitem from "./components/JobPositionItem";

function App() {
  const [positionItems, setPositionItems] = useState([initialState]);
  console.log(positionItems[0])

  return (
    <div className="container">

      <Header />              
      {/* Pongo la posicion 0 por que el array viene separado en 2 y
      tomo la primera que trae todo el array de puestos */}
      <JobPositionContainer items={positionItems[0]} />
    </div>
  );
}

export default App;
