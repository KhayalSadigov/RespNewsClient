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
  const [youtube, setYoutube] = useState([]); // Youtube data
  const [youtubePage, setYoutubePage] = useState(0); // Youtube Pagination
  const [slider, setSlider] = useState([]); // Slider data
  const [subtitles, setSubtitles] = useState([]); // Subtitles data
  const [top, setTop] = useState([]); // Top news
  const [links, setLinks] = useState([]); // External links

  function setLang(x) {
    setLanguage(x);
    setNews([]);
    setCategories([]);
    setDataPage(0);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching multiple resources in parallel using Promise.all
        const [
          topNews,
          youtubeVideos,
          latestNewspaper,
          allCategories,
          sliderData,
          subtitleData,
          externalLinks
        ] = await Promise.all([
          axios.get(Base_Url + `/api/news/topMonth/language/${language + 1}`),
          axios.get(Base_Url + `/api/youtube/videos/${youtubePage}`),
          axios.get(Base_Url + "/api/newspaper/last"),
          axios.get(Base_Url + `/api/category/language/${language + 1}`),
          axios.get(Base_Url + `/api/news/rating/5/${language + 1}`),
          axios.get(Base_Url + `/api/news/rating/4/${language + 1}`),
          axios.get(Base_Url + "/api/links")
        ]);

        setTop(topNews.data);
        setYoutube((prev) => [...prev, ...youtubeVideos.data]);
        setNewsPaper(latestNewspaper.data);
        setCategories(allCategories.data);
        setSlider(sliderData.data);
        setSubtitles(subtitleData.data);
        setLinks(externalLinks.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language, youtubePage]); // Effect will run on language or youtubePage change

  useEffect(() => {
    const fetchNews = async () => {
      setLoadPage(true);
      try {
        const res = await axios.get(Base_Url + `/api/news/language/${language + 1}/${dataPage}`);
        setNews((prev) => [...prev, ...res.data]);
        setLoadPage(false);
        if (res.data.length === 0) setLoadPage("end");
      } catch (error) {
        setLoadPage(false);
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [dataPage, language]); // Effect will run on dataPage or language change

  let store = {
    links: {
      data: links,
      setData: setLinks
    },
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
      modal: categoryModal,
      setModal: setCategoryModal
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
