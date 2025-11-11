import {
  useDispatch as useReduxDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
