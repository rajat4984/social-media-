import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user: {
    _id: "6423dcb26e3e7af176c251bc",
    username: "jane",
    email: "jane@gmail.com",
    password: "$2b$10$QOJy/P9BsRESULSgacpTq.WSI4SkMo9IImvIl25t8CBGhO/HDbGB.",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
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
