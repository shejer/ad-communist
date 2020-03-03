import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function Column(toto) {
  console.log(toto);
  return <div>{toto.name}</div>;
}

export default Column;
