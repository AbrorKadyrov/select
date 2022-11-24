import React, { createContext, useReducer } from "react";
import { reducer } from "../mock/reducer";
import { list } from "../mock/student";

export const StudentContext = createContext();

export const Store = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, { student: list });

  return (
    <StudentContext.Provider value={[data, dispatch]}>
      {children}
    </StudentContext.Provider>
  );
};
