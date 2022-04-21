import {
  STORE_USER_DATA,
  LOGIN_USER,
  LOGOUT_USER,
} from "../actionTypes/actionTypes";

export const storeUserData = (userData) => {
  console.log(userData);
  return {
    type: STORE_USER_DATA,
    payload: userData,
  };
};

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
