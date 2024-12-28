import PropTypes from "prop-types";
import axios from "axios";
import Base_Url from "./../Constant/base_url";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext("");

function DataProvider({ children }) {
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState(0); // AZE - 0 , ENG - 1 , RUS - 2
  const [navModal, setNavModal] = useState(false); // Navbar üçün modal
  const [news, setNews] = useState([]); // Xəbər Dataları
  const [dataPage, setDataPage] = useState(0); // Backend pagination
  const [loadPage, setLoadPage] = useState(false); // Pagination bitib yoxsa yox
  const [newsPaper, setNewsPaper] = useState(null); // Ən son qəzet
  const [categories, setCategories] = useState([]); // Kateqoriyalar
  const [categoryModal, setCategoryModal] = useState(false)
  const [youtube, setYoutube] = useState([]);
  const [youtubePage, setYoutubePage] = useState(0); // Youtube Pagination
  const [slider, setSlider] = useState([]);
  const [subtitles, setSubtitles] = useState([]);
  const [top, setTop] = useState([])
  function setLang(x) {
    setLanguage(x);
    setNews([]);
    setCategories([]);
    setDataPage(0);
  }

  useEffect(() => {
    const fetchYoutube = async () => {
      const res = await axios.get(Base_Url + `/api/youtube/videos/${youtubePage}`);
      console.log(res.data)
      setYoutube([...youtube, ...res.data]);
    };
    fetchYoutube();
  }, [youtubePage]);

  useEffect(() => {
    const fetchTop = async () => {
      const res = await axios.get(Base_Url + `/api/news/topMonth/language/${language + 1}`)
      setTop(res.data)
    }
    fetchTop()
  }, [language])

  useEffect(() => {
    const fetchNews = async () => {
      setLoadPage(true);
      const res = await axios.get(
        Base_Url + `/api/news/language/${language + 1}/${dataPage}`
      );

      setNews((prev) => [...prev, ...res.data]);
      setLoadPage(false);
      if (res.data.length == 0)
        setLoadPage("end")
    };
    fetchNews();
  }, [dataPage, language]);

  useEffect(() => {
    const fetchNewsPaper = async () => {
      const res = await axios.get(Base_Url + "/api/newspaper/last");
      setNewsPaper(res.data);
      console.log(res.data)
    };
    fetchNewsPaper();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        Base_Url + `/api/category/language/${language + 1}`
      );
      setCategories(res.data);
    };
    fetchCategories();
  }, [language]);

  useEffect(() => {
    const fetchSlider = async () => {
      const res = await axios.get(
        Base_Url + `/api/news/rating/5/${language + 1}`
      );
      setSlider(res.data);
    };
    fetchSlider();
  }, [language]);

  useEffect(() => {
    const fetchSubtitles = async () => {
      const res = await axios.get(
        Base_Url + `/api/news/rating/4/${language + 1}`
      );
      setSubtitles(res.data);
    };
    fetchSubtitles();
  }, [language]);

  let store = {
    top: {
      data: top,
      setData: setTop
    },
    youtube: {
      data: youtube,
      setData: setYoutube,
      page: youtubePage,
      setPage: setYoutubePage,
    },
    slider: {
      data: slider,
      setData: setSlider,
    },
    subtitles: {
      data: subtitles,
      setData: setSubtitles,
    },
    news: {
      data: news,
      setData: setNews,
      load: loadPage,
      setLoad: setLoadPage,
      page: dataPage,
      setPage: setDataPage,
    },
    categories: {
      data: categories,
      setData: setCategories,
      modal : categoryModal,
      setModal : setCategoryModal
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

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
