import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
export const context = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/getAllProducts", { method: "GET" })
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    cart: JSON.parse(localStorage.getItem("cartItem")) || [],
  });

  return (
    <context.Provider value={{ products, dispatch, state }}>
      {children}
    </context.Provider>
  );
};

export default Context;
