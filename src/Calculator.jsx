import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum, subtract } from "./store/Calculator/CalculatorActions";

function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <input
        type="number"
        placeholder="a"
        value={a}
        onChange={(e) => setA(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={(e) => setB(e.target.value)}
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(sum(1, 2));
        }}
      >
        somar
      </button>
      <button
        onClick={() => {
          dispatch(subtract(2, 3));
        }}
      >
        subtrair
      </button>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;
