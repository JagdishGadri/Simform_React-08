import { STORE_USER_DATA, LOGIN_USER } from "../actionTypes/actionTypes";

const initialState = {
  userData: {
    profile: "",
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    isLoggedIn: false,
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

    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default reducer;
