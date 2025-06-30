import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

//This pattern is a standard to be used with TS and redux, for addiing
//a dditional type safety.
type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
//the TypedUseSe.. requires information about the type of data
// it will be using, this helps create a more typed version of the
// hook
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
