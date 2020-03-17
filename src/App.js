import React, { useState, useEffect } from "react";
import Column from "./Column";
import logo from "./logo.svg";
import "./App.css";

const InitialPotatoesState = {
  Names: [
    "Potatoes",
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  prices: [0, 1, 1, 1, 1, 1, 1, 1, 1],
  productGenTimes: [0, 100, 200, 400, 800, 1600, 3200, 6400, 12800],
  production: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialLandState = {
  Names: [
    "Land",
    "Worker",
    "Clearcut",
    "Road",
    "Sewer",
    "Coal Plant",
    "Train",
    "Harbour",
    "Nuclear Plant"
  ],
  number: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  prices: [0, 1, 1, 1, 1, 1, 1, 1, 1],
  productGenTimes: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  production: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialOreState = {
  Names: [
    "Ore",
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  prices: [0, 1, 1, 1, 1, 1, 1, 1, 1],
  productGenTimes: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  production: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialMilitariesState = {
  Names: [
    "Bullets",
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  prices: [0, 1, 1, 1, 1, 1, 1, 1, 1],
  productGenTimes: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  production: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 0, 10, 25, 50, 100, 200, 400, 600]
};

const InitialPlacebosState = {
  Names: [
    "Placebos",
    "Farmer",
    "Commune",
    "Freight",
    "Plantation",
    "Irrigation",
    "Greenhouse",
    "Barge",
    "Cold storage"
  ],
  number: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  prices: [0, 1, 1, 1, 1, 1, 1, 1, 1],
  productGenTimes: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  production: [0, 1, 2, 4, 8, 16, 32, 64, 128],
  minimumToAccess: [0, 0, 10, 25, 50, 100, 200, 400, 600]
};

function App() {
  const [PotatoesState, setPotatoesState] = useState(InitialPotatoesState);
  const [LandState, setLandState] = useState(InitialLandState);
  const [OreState, setOreState] = useState(InitialOreState);
  const [MilitariesState, setMilitariesState] = useState(
    InitialMilitariesState
  );
  const [PlacebosState, setPlacebosState] = useState(InitialPlacebosState);

  const [activeColumn, setActiveColumn] = useState("Potatoes");

  function chooseTab(e) {
    switch (e.target.getAttribute("number")) {
      case "1":
        setActiveColumn("Potatoes");

        break;
      case "2":
        setActiveColumn("Land");

        break;
      case "3":
        setActiveColumn("Ore");

        break;
      case "4":
        setActiveColumn("Militaries");

        break;
      case "5":
        setActiveColumn("Placebos");

        break;
      default:
    }
  }

  return (
    <div className="App">
      <div className="TabBar">
        <div onClick={chooseTab} number={1}>
          {PotatoesState.number[0] + " Potatoes"}
        </div>
        <div onClick={chooseTab} number={2}>
          {LandState.number[0] + " Land"}
        </div>
        <div onClick={chooseTab} number={3}>
          {OreState.number[0] + " Ore"}
        </div>
        <div onClick={chooseTab} number={4}>
          {MilitariesState.number[0] + " Militaries"}
        </div>
        <div onClick={chooseTab} number={5}>
          {PlacebosState.number[0] + " Placebos"}
        </div>
      </div>
      {activeColumn === "Potatoes" && (
        <Column
          state={PotatoesState}
          setState={setPotatoesState}
          name="Potatoes"
        />
      )}
      {activeColumn === "Land" && (
        <Column state={LandState} setState={setLandState} name="Land" />
      )}

      {activeColumn === "Ore" && (
        <Column state={OreState} setState={setOreState} name="Ore" />
      )}

      {activeColumn === "Militaries" && (
        <Column
          state={MilitariesState}
          setState={setMilitariesState}
          name="Militaries"
        />
      )}

      {activeColumn === "Placebos" && (
        <Column
          state={PlacebosState}
          setState={setPlacebosState}
          name="Placebos"
        />
      )}
    </div>
  );
}

export default App;
