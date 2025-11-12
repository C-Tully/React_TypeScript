// hooks.tsx
import {
  useDispatch as useReduxDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

// Correctly typed dispatch hook
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
