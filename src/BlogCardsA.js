import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";
const Content = createContext();
export const useContent= ()=> useContext(Content);
function Provider({ children }) {
  const [data,setData] =useState([])
  return (
    <div>
      <Content.Provider value={{data,setData}}>{children}</Content.Provider>
    </div>
  );
}

export default Provider;
