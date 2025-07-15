import { USER_PRIVILIDGE } from "../../utils/constants.tsx";
import authReducer, {
  setLoggedIn,
  setPrivilege,
  logout,
} from "./authSlice.tsx";
describe("authSlice", () => {
  const initialState = {
    id: "",
    isLoggedIn: false,
    privilidge: "GUEST" as USER_PRIVILIDGE,
  };

  it("Checks the initial state", () => {
    // expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });
});
