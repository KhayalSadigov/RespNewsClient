/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";
export const DataContext = createContext("");
function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  let store = {
    route : {
      data : page ,
      setData : setPage
    },
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
