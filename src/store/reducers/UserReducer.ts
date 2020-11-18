import { DELETE_USER_DATA, GetUserInfoType, SAVE_USER_DATA } from "../actions/UserActionTypes";
import { UsersState } from "../types/UsersState";

  
  const initialState: UsersState = {
    users: [],
  };
  
  export function userReducer(
    state = initialState,
    action: GetUserInfoType
  ): UsersState {
    switch (action.type) {
      case SAVE_USER_DATA:
        return {
          ...state,
          users: [...state.users, action.user],
        };
        case DELETE_USER_DATA:
            let newUsers = [...state.users]
            //TODO: delete user
          return {
            ...state,
            users: newUsers
          };
      default:
        return state;
    }
  }
  