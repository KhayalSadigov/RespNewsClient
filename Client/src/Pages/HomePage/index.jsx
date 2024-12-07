import { useContext } from "react";
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
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CircularProgress from "@mui/material/CircularProgress";
import Base_Url from "../../Constant/base_url";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function HomePage() {
  let store = useContext(DataContext);
  store.route.setData("home");
  return (
    <main>
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
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination, Autoplay, Navigation]}
                      className={styles.sliderList}
                    >
                      {store.news.data &&
                        store.news.data.map((e, i) => {
                          if (
                            e.newsRating == 5 &&
                            e.newsLangId - 1 == store.lang.data
                          )
                            return (
                              <SwiperSlide
                                className={styles.swipperSlide}
                                key={i}
                              >
                                <div className={styles.glass}>
                                  <span>
                                    {e.newsDate && e.newsDate.slice(0, 10)}
                                  </span>
                                  <h1>{e.newsTitle}</h1>
                                </div>
                                <img
                                  src={
                                    e.newsPhotos.length != 0
                                      ? e.newsPhotos[0].photoUrl
                                      : "./../../../public/images/DefaultNewsCover.avif"
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
                          if (store.lang.data == e.newsLangId - 1)
                            return (
                              <div className={styles.listItem} key={i}>
                                <div className={styles.content}>
                                  <div className={styles.glass}>
                                    <h4>{e.newsTitle}</h4>
                                  </div>
                                  <img
                                    src={
                                      e.newsPhotos.length != 0
                                        ? e.newsPhotos[0].photoUrl
                                        : "./../../../public/images/LatestNewsCoverDefault.jpeg"
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
                <div className={styles.content}>Bütün xəbərlər</div>
              </div>
              <div className={styles.body}>
                <div className={styles.bodyContent}>
                  {store.news.data.length != 0 &&
                    store.news.data.map((e, i) => {
                      return (
                        <div className={styles.card} key={i}>
                          <div className={styles.cardContent}>
                            <div className={styles.glass}>
                              <span>{e.newsTitle}</span>
                              <div className={styles.icon}>
                                <NewspaperIcon fontSize="large" />
                              </div>
                            </div>
                            <img
                              src="./../../../public/images/newsDefault.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={styles.more}>
                <div
                  onClick={() => {
                    store.news.setPage(++store.news.page);
                    console.log(store.news.page);
                  }}
                  className={styles.content}
                >
                  {store.news.load ? (
                    <CircularProgress size={20} />
                  ) : (
                    "show more"
                  )}
                </div>
              </div>
            </div>
            <div className={styles.media}>
              <div className={styles.header}>
                <div className={styles.content}>
                  <span>Günün qəzeti</span>
                  <span>Arxiv</span>
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
                        PDF kimi oxu
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
                        Qəzet kimi vərəqlə
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
              <div className={styles.dateSearch}>
                <div className={styles.content}>
                  <span>İstədiyin tarixə uyğun xəbərləri tap!</span>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      location.replace(`/search/${store.lang.data}/date/${e.target.children[0].value}`)
                    }}
                  >
                    <input type="date" required />
                    <Button type="submit" variant="contained">
                      Axtar
                    </Button>
                  </form>
                </div>
              </div>
              <div className={styles.follow}>
                <div className={styles.content}>
                  <span>Abunə ol! Xəbərləri ilk sən oxu!</span>
                  <TextField
                    id="outlined-basic"
                    type="email"
                    label="Email"
                    variant="outlined"
                  />
                  <Button variant="contained">Abunə olun!</Button>
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
