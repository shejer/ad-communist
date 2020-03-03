import React, { useState, useEffect } from "react";
import Column from "./Column";
import logo from "./logo.svg";
import "./App.css";

const InitialPotatoesState = {
  Names: [
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [1, 0, 0, 0, 0, 0, 0, 0],
  prices: [1, 1, 1, 1, 1, 1, 1, 1],
  production: [1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialLandState = {
  Names: [
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [1, 0, 0, 0, 0, 0, 0, 0],
  prices: [1, 1, 1, 1, 1, 1, 1, 1],
  production: [1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialOreState = {
  Names: [
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [1, 0, 0, 0, 0, 0, 0, 0],
  prices: [1, 1, 1, 1, 1, 1, 1, 1],
  production: [1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialMilitariesState = {
  Names: [
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [1, 0, 0, 0, 0, 0, 0, 0],
  prices: [1, 1, 1, 1, 1, 1, 1, 1],
  production: [1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialPlacebosState = {
  Names: [
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [1, 0, 0, 0, 0, 0, 0, 0],
  prices: [1, 1, 1, 1, 1, 1, 1, 1],
  production: [1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 10, 25, 50, 100, 200, 400, 600]
};

function App() {
  const [PotatoesState, setPotatoesState] = useState(InitialPotatoesState);
  const [LandState, setLandState] = useState(InitialLandState);
  const [OreState, setOreState] = useState(InitialOreState);
  const [MilitariesState, setMilitariesState] = useState(
    InitialMilitariesState
  );
  const [PlacebosState, setPlacebosState] = useState(InitialPlacebosState);

  const [activeColumn, setActiveColumn] = useState(
    <Column name="Potatoes" state="PotatoesState" />
  );

  function chooseTab(e) {
    switch (e.target.getAttribute("number")) {
      case "1":
        setActiveColumn(<Column name="Potatoes" state="PotatoesState" />);

        break;
      case "2":
        setActiveColumn(<Column name="Land" state="LandState" />);

        break;
      case "3":
        setActiveColumn(<Column name="Ore" state="OreState" />);

        break;
      case "4":
        setActiveColumn(<Column name="Militaries" state="MilitariesState" />);

        break;
      case "5":
        setActiveColumn(<Column name="Placebos" state="PlacebosState" />);

        break;
      default:
    }
  }

  return (
    <div className="App">
      <div className="TabBar">
        <div onClick={chooseTab} number={1}>
          Potatoes
        </div>
        <div onClick={chooseTab} number={2}>
          Land
        </div>
        <div onClick={chooseTab} number={3}>
          Ore
        </div>
        <div onClick={chooseTab} number={4}>
          Militaries
        </div>
        <div onClick={chooseTab} number={5}>
          Placebos
        </div>
      </div>
      {activeColumn}
    </div>
  );
}

export default App;
