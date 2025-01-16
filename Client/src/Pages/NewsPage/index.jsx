import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import styles from './index.module.scss';
import axios from "axios";
import Base_Url from "../../Constant/base_url";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import langCheck from "./language";

function NewsPage() {
  let store = useContext(DataContext);
  let { id } = useParams();
  const [news, setNews] = useState(null);
  const [others, setOthers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde yukarı kaydır
    window.scrollTo(0, 0);

    setNews(null);
    axios.get(Base_Url + `/api/news/id/${id}`).then((res) => {
      setNews(res.data);
    });
    store.route.setData("search");
  }, [id]);

  useEffect(() => {
    setOthers([]);
    if (news)
      axios.get(Base_Url + `/api/search/${parseInt(store.lang.data) + 1}/${news.newsCategory}/0`).then((res) => {
        setOthers(res.data);
        console.log(res.data);
      });
  }, [news, id]);

  return (
    <div className={styles.newsPage}>
      <div className="container">
        {news ? (
          <div className={styles.content}>
            <div className={styles.newsContent}>
              <div className={styles.slider}>
                <div className={styles.glass}>
                  <div className={styles.newsInfo}>
                    <span onClick={() => {
                      navigate(`/search/category/${news.newsCategoryId}`);
                    }}>{news.newsCategory}</span>
                    <span>{news.newsUpdateDate.slice(0, 10)} | {news.newsUpdateDate.slice(11, 16)}</span>
                    <span>{news.newsOwner.ownerName}</span>
                  </div>
                </div>
                <Swiper
                  navigation={true}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className={styles.sliderList}
                >
                  {news.newsPhotos.length !== 0 &&
                    news.newsPhotos.map((e, i) => {
                      return (
                        <SwiperSlide
                          className={styles.swipperSlide}
                          key={i}
                        >
                          <img
                            src={
                              Base_Url + e.photoUrl
                            }
                            alt={news.newsTitle}
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>

              <div className={styles.body}>
                <h2 className={styles.title}>{news && news.newsTitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: news.newsContetText }} />
              </div>
            </div>
            <div className={styles.otherNews}>
              <div className={styles.header}>
                {langCheck.header[store.lang.data]}
              </div>
              {
                others.length !== 0 ? (others && others.map((e, i) => {
                  if (e.newsId !== news.newsId)
                    return (
                      <div key={i} className={styles.card} onClick={() => {
                        setNews(null);
                        setOthers([]);
                        navigate(`/news/${e.newsId}`);
                      }}>
                        <div className={styles.cardContent}>
                          <div className={styles.glass}>
                            {e.newsTitle}
                          </div>
                          <img src={
                            e.newsPhotos.length !== 0
                              ? Base_Url + e.newsPhotos[0].photoUrl
                              : "./../images/DefaultPhoto.png"
                          } alt="" />
                        </div>
                      </div>
                    );
                })) : (
                  <div className={styles.loader}>
                    <CircularProgress />
                  </div>
                )
              }
            </div>
          </div>
        ) : (
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
