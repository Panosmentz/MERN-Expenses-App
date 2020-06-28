import React, { createContext, useReducer, useContext, useEffect } from "react";
import TransactionsReducer from "../reducers/TransactionsReducer";
import axios from "axios";
import { AuthContext, loadUser } from "../context/AuthContext";
import { toast } from "react-toastify";
import "../toast.css";

const initialState = {
  transactions: [],
  isAuthenticated: false,
  user: null,
  error: null,
  loading: true,
};

// Create context
export const TransactionsContext = createContext(initialState);

// Provider component
export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);
  const { loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []);
  async function getTransactions() {
    try {
      const res = await axios.get("/api/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/transactions/${id}`);
      toast.error("Transaction deleted", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json", //POST requests need headers
      },
    };

    try {
      const res = await axios.post("/api/transactions", transaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  //"Provide the GlobalState to all children components"
  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
