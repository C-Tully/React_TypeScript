import {
  useDispatch as useReduxDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "./store"; // path to the store file

// Typed versions of the hooks
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
