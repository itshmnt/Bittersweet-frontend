import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:  { 
    _id: "61d4049ddc206fe1a2586632",
    username: "john",
    email: "john@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    following: [],
    isAdmin: false
},
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
