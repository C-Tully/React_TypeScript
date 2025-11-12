import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setLabel } from "../store/testSlices/testSlice";
import { useNavigate } from "react-router-dom";

export default function PageAlpha() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const label = useAppSelector((state) => state.test.label);

  return (
    <>
      <h1>Page Alpha</h1>
      <p>Current Label: {label}</p>
      <button onClick={() => dispatch(setLabel("lorem"))}>Lorem</button>
      <button onClick={() => dispatch(setLabel("ipsum"))}>Ipsum</button>
      <button onClick={() => navigate("/authCheck")}>Go to Bravo</button>
    </>
  );
}
