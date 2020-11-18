import { User } from "../types/UsersState";

export const SAVE_USER_DATA = "SAVE_USER_DATA";
export const DELETE_USER_DATA = "DELETE_USER_DATA";

interface SaveUserData {
    type: typeof SAVE_USER_DATA;
    user: User;
}

interface DeleteUser {
    type: typeof DELETE_USER_DATA;
    id: Number;
}

export type GetUserInfoType =
  | SaveUserData
  | DeleteUser