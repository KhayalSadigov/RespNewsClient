/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext("");

function DataProvider({ children }) {
  
  

  useEffect(() => {
   
  }, []);
  let store = {
    
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
