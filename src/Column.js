import React, { useState, useEffect } from "react";
import Producer from "./Producer";
import logo from "./logo.svg";
import "./App.css";

function Column({ name, state, setState }) {
  console.log({ state });
  return (
    <div>
      {state.Names.map(
        (e, i) =>
          state.number[i] > 0 &&
          i > 0 && (
            <Producer key={i} index={i} setState={setState} state={state} />
          )
      )}
    </div>
  );
}

export default Column;
