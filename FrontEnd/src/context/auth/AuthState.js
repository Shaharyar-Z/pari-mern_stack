import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: userData ? userData : null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async (data) => {
    console.log("token inside load user: ", data?.token);
    if (data) {
      setAuthToken(data.token);
    }

    try {
      const res = await axios.get("/api/auth", {});
      // console.log(res);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser(res.data);
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      loadUser(res.data);
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error });
    }
  };

  // Logout User
  const logout = () => dispatch({ type: LOGOUT });

  // Clear error
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
