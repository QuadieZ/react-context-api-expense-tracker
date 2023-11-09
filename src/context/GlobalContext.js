import React from "react";
import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer.js";

const initialState = {
  transactions: [
    { id: 1, text: "Salary", amount: 300 },
    { id: 2, text: "Book", amount: -20 },
    { id: 3, text: "Allowance", amount: 100 },
    { id: 4, text: "Food", amount: -50 },
    { id: 5, text: "Food", amount: -50 },
    { id: 6, text: "Food", amount: -50 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // Reducer = state changes in response to 'action'
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  function addTransaction(text, amount) {
    dispatch({
      type: 'ADD',
      payload: {
        text,
        amount: parseFloat(amount)
      }
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
