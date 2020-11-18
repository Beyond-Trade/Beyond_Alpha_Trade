import { User } from "../types/UsersState";
import { DELETE_USER_DATA, GetUserInfoType, SAVE_USER_DATA } from "./UserActionTypes";


export const saveUserInfoAction = (user: User): GetUserInfoType => {
    return { type: SAVE_USER_DATA, user: user };
};

export const deleteUserInfoAction = (id: Number): GetUserInfoType => {
    return { type: DELETE_USER_DATA, id: id };
};