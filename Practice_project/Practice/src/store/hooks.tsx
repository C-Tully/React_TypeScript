import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useCartDispatch = () => useDispatch<AppDispatch>();

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
