import { STORE_USER_DATA, GET_USER_DATA } from "../actionTypes/actionTypes";

export const storeUserData = (userData) => {
  console.log(userData);
  return {
    type: STORE_USER_DATA,
    payload: userData,
  };
};

// export const getUserData = () => {
//   return {
//     type: STORE_USER_DATA,
//   };
// };
