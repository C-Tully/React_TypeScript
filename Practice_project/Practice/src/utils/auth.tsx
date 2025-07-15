import Cookies from "js-cookie";
import { USER_PRIVILIDGE } from "./constants";

export function hasPrivilege(
  userPriv: USER_PRIVILIDGE,
  required: USER_PRIVILIDGE
) {
  const levels = ["GUEST", "USER", "ADMIN"] as const;
  return levels.indexOf(userPriv) >= levels.indexOf(required);
}

//  Dummy function for now.
export function checkAuth(): boolean {
  const session = Cookies.get("session");
  return Boolean(session); // or add more logic
}
