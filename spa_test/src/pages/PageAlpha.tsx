import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setLabelValue } from "../store/testSlices/testSlice";
import { useNavigate } from "react-router-dom";

export default function PageAlpha() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const label = useAppSelector((state) => state.test.label);

  function handleClick(val: string): void {
    dispatch(setLabelValue(val));
  }

  return (
    <>
      <h1>Page Alpha</h1>
      <p>Current Label: {label}</p>
      <button onClick={() => handleClick("lorem")}>Lorem</button>
      <button onClick={() => handleClick("ipsum")}>Ipsum</button>
      <button onClick={() => navigate("/authCheck")}>Go to Bravo</button>
    </>
  );
}
