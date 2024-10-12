/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";
export const DataContext = createContext("");
function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("AZ");

  let store = {
    route : {
      data : page ,
      setData : setPage
    },
    addLang : {
      data : lang ,
      setData : setLang
    }
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
