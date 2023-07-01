import { ADD_USERS } from "./HomeTypes";
export default function Add_Users(user) {
  return {
    type: ADD_USERS,
    payload: user,
  };
}
