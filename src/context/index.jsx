import React, { createContext, useReducer } from "react";
import { list } from "../mock/student";

export const StudentContext = createContext();

export const Store = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "delete":
        let res = state.data.filter((vl) => vl.id !== payload);
        return { ...state, data: res };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, list);

  return (
    <StudentContext.Provider value={[data, dispatch]}>
      {children}
    </StudentContext.Provider>
  );
};
