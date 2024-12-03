/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext("");

function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("AZ");
  const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("respName")));
  const [userName, setUserName] = useState(localStorage.getItem("respToken"));

  const store = {
    route: {
      data: page,
      setData: setPage,
    },
    addLang: {
      data: lang,
      setData: setLang,
    },
    user: {
      data: {
        name : userName,
        token : userToken
      },
      setData: {
        name : setUserName ,
        token : setUserToken
      },
    },
  };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}

export default DataProvider;
