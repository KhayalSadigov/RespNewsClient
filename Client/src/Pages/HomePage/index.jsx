import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/dataContext";
import CardSkeleton from "../../Components/Skeleton";
import styles from "./index.module.scss";
import CurrencyRate from "../../Components/Exchange";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import langCheck from "./language";
import CircularProgress from "@mui/material/CircularProgress";
import Base_Url from "../../Constant/base_url";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CategoryModal from "../../Components/CategoryModal";

function HomePage() {
  const navigate = useNavigate();
  let store = useContext(DataContext);
  useEffect(() => {
    store.route.setData("home");
  }, []);
  function getYouTubeEmbedLink(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null; // URL düzgün formatda deyilsə, null qaytarır
  }
  return (
    <main>
      {/* For Category Modal */}
      <CategoryModal />
      <section className={styles.hero}>
        <div className={styles.exchange}>
          <div className="container">
            <div className={styles.content}>
              <div className={styles.rate}>
                <CurrencyRate />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.main}>
          {store.news.data.length == 0 ? (
            <CardSkeleton />
          ) : (
            <div className={styles.news}>
              <div className="container">
                <div className={styles.content}>
                  <div className={styles.slider}>
                    <Swiper
                      navigation={true}
                      pagination={{
                        dynamicBullets: true,
                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination, Autoplay, Navigation]}
                      className={styles.sliderList}
                    >
                      {store.slider.data &&
                        store.slider.data.map((e, i) => {
                          return (
                            <SwiperSlide
                              className={styles.swipperSlide}
                              key={i}
                              onClick={() => {
                                navigate(`news/${e.newsId}`);
                              }}
                            >
                              <div className={styles.glass}>
                                <h1>{e.newsTitle}</h1>
                                <br />
                                <span>
                                  {e.newsDate && e.newsDate.slice(0, 10)}
                                </span>
                              </div>
                              <img
                                src={
                                  e.newsPhotos.length != 0
                                    ? Base_Url + e.newsPhotos[0].photoUrl
                                    : "./../images/DefaultPhoto.png"
                                }
                                alt={e.newsTitle}
                              />
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                  </div>
                  <div className={styles.lastNews}>
                    <div className={styles.header}>
                      <div className={styles.content}>
                        {langCheck.lastNews[store.lang.data]}
                      </div>
                    </div>
                    <div className={styles.list}>
                      {store.news.data.lenght != 0 &&
                        store.news.data.slice(0, 10).map((e, i) => {
                          return (
                            <div
                              className={styles.listItem}
                              key={i}
                              onClick={() => {

                                navigate(`news/${e.newsId}`);
                              }}
                            >
                              <div className={styles.content}>
                                <div className={styles.glass}>
                                  <h4>{e.newsTitle}</h4>
                                </div>
                                <img
                                  src={
                                    e.newsPhotos.length != 0
                                      ? Base_Url + e.newsPhotos[0].photoUrl
                                      : "./../images/DefaultPhoto.png"
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={styles.thirdSection}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.allNews}>
              <div className={styles.header}>
                <div className={styles.content}>
                  {langCheck.allNews[store.lang.data]}
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.bodyContent}>
                  {store.news.data.length != 0 &&
                    store.news.data.slice(11, store.news.data.length).map(
                      (e, i) => {
                        if (e.newsRating != 5 && e.newsRating != 4)
                          return (
                            <div
                              className={styles.card}
                              key={i}
                              onClick={() => {
                                navigate(`news/${e.newsId}`);
                              }}
                            >
                              <div className={styles.cardContent}>
                                <div className={styles.glass}>
                                  <span>{e.newsTitle}</span>
                                </div>
                                <img
                                  src={
                                    e.newsPhotos.length != 0
                                      ? Base_Url + e.newsPhotos[0].photoUrl
                                      : "./../images/DefaultPhoto.png"
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          );
                      }
                      // }
                    )}
                </div>
              </div>
              <div className={styles.more} style={store.news.load == "end" ? { display: 'none' } : {}}>
                <div
                  onClick={() => {
                    store.news.setPage(++store.news.page);
                  }}
                  className={styles.content}
                >
                  {store.news.load ? (
                    <CircularProgress size={20} />
                  ) : (
                    langCheck.showMore[store.lang.data]
                  )}
                </div>
              </div>
              <div className={styles.more} style={store.news.load == "end" ? {} : { display: 'none' }}>
                <div className={styles.content}>
                  {langCheck.endNews[store.lang.data]}
                </div>
              </div>
            </div>
            <div className={styles.media}>
              <div className={styles.header}>
                <div className={styles.content}>
                  <span>
                    {langCheck.newspaper.dailyNewsPaper[store.lang.data]}
                  </span>
                  <span>{langCheck.newspaper.archive[store.lang.data]}</span>
                </div>
              </div>
              <div className={styles.paper}>
                <div className={styles.content}>
                  <div className={styles.glass}>
                    <a
                      href={
                        store.newspaper.data &&
                        Base_Url + store.newspaper.data.newspaperPdfUrl
                      }
                      target="_blank"
                    >
                      <Button className={styles.btn} variant="contained">
                        {langCheck.newspaper.likePdf[store.lang.data]}
                      </Button>
                    </a>
                    <a
                      href={
                        store.newspaper.data &&
                        store.newspaper.data.newspaperLinkFlip
                      }
                      target="_blank"
                    >
                      <Button
                        className={styles.btn}
                        color="warning"
                        variant="contained"
                      >
                        {langCheck.newspaper.likeNewsPaper[store.lang.data]}
                      </Button>
                    </a>
                  </div>
                  <img
                    src={
                      store.newspaper.data &&
                      Base_Url + store.newspaper.data.newspaperCoverUrl
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.youtube}>
                <div className={styles.content}>
                  <iframe
                    src={store.youtube.data.length != 0 ? getYouTubeEmbedLink(store.youtube.data[0].videoUrl) : "about:blank"}
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              <div className={styles.topNews}>
                <div className={styles.content}>
                  <div className={styles.header}>
                    {langCheck.topNews[store.lang.data]}
                  </div>
                  {
                    store.top.data.slice(0, 5).map((e, i) => {
                      return (
                        <div key={i} className={styles.topCard} onClick={() => {
                          navigate(`news/${e.newsId}`);
                        }}>
                          <div className={styles.image}>
                            <img src={
                              e.newsPhotos.length != 0
                                ? (Base_Url + e.newsPhotos[0].photoUrl)
                                : "./../images/DefaultPhoto.png"
                            } alt="" />
                          </div>
                          <div className={styles.body}>
                            <p className={styles.title}>{e.newsTitle}</p>
                            <p className={styles.date}>{e.newsDate.slice(0, 10)}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className={styles.dateSearch}>
                <div className={styles.content}>
                  <span>{langCheck.dateSeacrh.date[store.lang.data]}</span>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      navigate(
                        `search/date/${e.target.children[0].value}`
                      );
                    }}
                  >
                    <input type="date" required />
                    <Button type="submit" variant="contained">
                      {langCheck.dateSeacrh.search[store.lang.data]}
                    </Button>
                  </form>
                </div>
              </div>

              <div className={styles.categories}>
                <div className={styles.content}>
                  <span className={styles.header}>
                    <span>{langCheck.categories.span[store.lang.data]}</span>
                    <span className={styles.btn} onClick={() => {
                      store.categories.setModal(true)
                    }}>{langCheck.categories.button[store.lang.data]}</span>
                  </span>
                  {store.categories.data.slice(0, 3).map((e, i) => {
                    return (
                      <div
                        onClick={() => {
                          navigate(
                            `search/category/${e.categoryId}`
                          );
                        }}
                        key={i}
                      >
                        <img src={Base_Url + e.categoryCoverUrl} alt="" />
                        <div className={styles.glass}>
                          <p>{e.categoryName}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <div className={styles.content}>
                      {langCheck.links[store.lang.data]}
                    </div>
                  </div>
                  <Swiper
                    navigation={true}
                    pagination={{
                      dynamicBullets: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className={styles.linkSlider}
                  >

                    {store.links.data &&
                      store.links.data.map((e, i) => {
                        return (
                          <SwiperSlide
                            className={styles.linkSlide}
                            key={i}
                          >
                            <a href={e.linkUrl} target="_blank">
                              <div className={styles.glass}>
                                {e.linkName}
                              </div>
                              <img src={
                                e.linkCoverUrl
                                  ? (Base_Url + e.linkCoverUrl)
                                  : "./../images/DefaultPhoto.png"
                              } alt="" />
                            </a>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
              <div className={styles.follow}>
                <div className={styles.content}>
                  <span>{langCheck.subscribe.header[store.lang.data]}</span>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      axios
                        .post(Base_Url + "/api/subscribers", {
                          subEmail:
                            e.target.children[0].children[1].children[0].value,
                        })
                        .then(() => {
                          alert("Successfully");
                        });
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      type="email"
                      label={langCheck.subscribe.email[store.lang.data]}
                      variant="outlined"
                    />
                    <Button type="submit" variant="contained">
                      {langCheck.subscribe.subs[store.lang.data]}
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
