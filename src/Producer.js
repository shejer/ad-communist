import React, { useState, useEffect } from "react";

function Producer({ index, state, setState, ...props }) {
  console.log({ state, index, props });
  const price = state.prices[index];
  const number = state.number[index];
  const name = state.Names[index];
  const productGenTime = state.productGenTimes[index];
  const [percentage, setPercentage] = useState(0);
  const [inProduction, setInProduction] = useState(false);
  const percentageRefrechRate = 1;
  console.log(number);
  function start() {
    setPercentage(0);
    setInProduction(true);
  }

  function buy() {
    const newState = {
      ...state,
      number: [...state.number]
    };
    newState.number[index]++;
    if (
      state.number[index] < state.minimumToAccess[index + 1] &&
      newState.number[index] >= newState.minimumToAccess[index + 1]
    ) {
      newState.number[index + 1] = 1;
    }
    setState(newState);
  }

  function produce() {
    const newState = {
      ...state,
      number: [...state.number]
    };
    newState.number[index - 1] += state.number[index] * state.production[index];
    setState(newState);
  }

  useEffect(() => {
    const t = setInterval(() => {
      if (percentage < 100 && inProduction) {
        setPercentage(
          percentage + (100 * percentageRefrechRate) / productGenTime
        );
      }
      if (percentage >= 100 && inProduction) {
        produce();
        setInProduction(false);
      }
    }, percentageRefrechRate);

    return () => clearInterval(t);
  });

  // useEffect(() => {
  //   if (percentage >= 100) {
  //     let newState = state;
  //     setInProduction(false);
  //   }
  // }, [percentage]);

  return (
    <div className="Producer">
      <button onClick={start} disabled={inProduction}>
        start
      </button>
      <div> {state.number[index]} </div>
      <progress max="100" value={percentage}>
        {percentage}
      </progress>
      <button
        onClick={buy}
        // disabled={props.price > props.cash}
      >
        {"buy a " + name}
      </button>
    </div>
  );
}

export default Producer;
