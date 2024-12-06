/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import Base_Url from "./../Constant/base_url";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext("");
function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState(0); // AZE - 0 , ENG - 1 , RUS - 2
  const [navModal, setNavModal] = useState(false); // Navbar üçün modal
  const [news, setNews] = useState([]); // Xəbər Dataları
  const [dataPage, setDataPage] = useState(0); //Backend pagination
  const [loadPage, setLoadPage] = useState(false); // Pagination bitib yoxsa yox onu göstərir
  const [newsPaper, setNewsPaper] = useState(null);
  function setLang(x) {
    // Yeni dilə keçid edən zaman data və pagination sıfırlanmalıdır
    setLanguage(x);
    setNews([]);
    setDataPage(0);
  }

  useEffect(() => {
    setLoadPage(true);
    // news
    axios
      .get(Base_Url + `/api/news/language/${language + 1}/${dataPage}`)
      .then((res) => {
        setNews([...news, ...res.data]);
        setLoadPage(false);
      });
    // newspaper
    axios.get(Base_Url + "/api/newspaper/last").then((res) => {
      console.log(res.data);
      setNewsPaper(res.data);
      console.log(newsPaper)
    });
  }, [dataPage, language]);
  
  let store = {
    news: {
      data: news,
      setData: setNews,
      load: loadPage,
      setLoad: setLoadPage,
      page: dataPage,
      setPage: setDataPage,
    },
    newspaper: {
      data: newsPaper,
      setData: setNewsPaper,
    },
    route: {
      data: page,
      setData: setPage,
    },
    lang: {
      data: language,
      setData: setLang,
    },
    navModal: {
      data: navModal,
      setData: setNavModal,
    },
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
