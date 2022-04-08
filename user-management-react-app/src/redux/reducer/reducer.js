import { Action } from "history";
import { STORE_USER_DATA, GET_USER_DATA } from "../actionTypes/actionTypes";

const initialState = {
  userData: {
    profile: "",
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      console.log(action.payload);
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
