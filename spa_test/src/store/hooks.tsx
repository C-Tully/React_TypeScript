import {
  useDispatch as useReduxDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

// Call useDispatch so it's a proper hook
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
