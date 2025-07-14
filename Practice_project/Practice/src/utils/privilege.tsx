import { USER_PRIVILIDGE } from "./constants";

export function hasPrivilege(
  userPriv: USER_PRIVILIDGE,
  required: USER_PRIVILIDGE
) {
  const levels = ["GUEST", "USER", "ADMIN"] as const;
  return levels.indexOf(userPriv) >= levels.indexOf(required);
}
