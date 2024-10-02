/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext("");
function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState(0) // AZE - 0 , ENG - 1 , RUS - 2
  let store = {
    route : {
      data : page ,
      setData : setPage
    },
    lang : {
      data : language,
      setData : setLanguage
    },
    news : {
      data : null,
      setData : null,
      isDone : false
    }
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
