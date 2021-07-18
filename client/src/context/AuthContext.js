import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "../reducers/AuthReducer";
import axios from "axios";
import { toast } from "react-toastify";
import "../toast.css";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")),
  user: null,
  error: null,
  loading: true,
  message: {
    msgBody: "",
    msgError: "",
  },
  registration: false,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    loadUser();
  }, []);

  // Actions
  async function loadUser() {
    try {
      const res = await axios.get("/api/auth");

      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  }

  async function login(email, password) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      if (err.response) {
        toast.error("Email and Password don't match, try again or Register", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: "LOGIN_FAIL",
          payload: err.response.data.error,
        });
      }
    }
  }

  async function register({ name, email, password }) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/users", body, config);

      const { message } = res.data;
      if (!message.msgError) {
        toast.success("Acount successfully created", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data,
        });
      }
    } catch (err) {
      if (err.response.data.message.msgBody === "email is already taken") {
        toast.error("An account with this e-mail address already exists", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: "REGISTER_FAIL",
        });
      }
    }
  }

  async function logout() {
    try {
      const res = await axios.get("/api/logout");
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: "AUTH_ERROR" });
    }
  }

  //"Provide the GlobalState to all children components"
  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        message: state.message,
        registration: state.registration,
        login,
        logout,
        register,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
