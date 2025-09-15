import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loginUser } from "../../store/auth/authSlice";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

//Mock router
const mockedNav = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requreActual("react-router-dom"),
  useNavigate: () => mockedNav,
}));

//Mock loginUser thunk
jest.mock("../../store/auth/authSlice", () => {
  const originalMod = jest.requireActual("../../store/auth/authSlice");

  return {
    __esModule: true,
    ...originalMod,
    loginUser: jest.fn(),
  };
});
