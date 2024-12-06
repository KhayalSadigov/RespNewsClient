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

function HomePage() {
  let store = useContext(DataContext);
  store.route.setData("home");
  console.log(store.newspaper.data);
  // const handleScroll = () => {
  //   // Səhifənin yuxarıdan olan məsafəsini və ümumi hündürlüyünü yoxlayırıq
  //   const scrollTop = window.scrollY; // Yuxarıdan olan məsafə
  //   const windowHeight = window.innerHeight; // Görünən sahə hündürlüyü
  //   const fullHeight = document.documentElement.scrollHeight; // Ümumi səhifə hündürlüyü

  //   // Əgər scrollTop + windowHeight >= fullHeight bərabərdirsə, deməli sona çatmışıq
  //   if (scrollTop + windowHeight >= fullHeight) {
  //     alert("Səhifənin sonuna çatdınız!");
  //   }
  // };
  // useEffect(() => {
  //   // Scroll eventini əlavə edirik
  //   window.addEventListener("scroll", handleScroll);

  //   // Təmizləmə funksiyası (memory leak qarşısını almaq üçün)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
                <div className={styles.content}>salam</div>
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
                  {store.news.load ? <CircularProgress /> : "show more"}
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
                    <Button className={styles.btn} variant="contained">
                      PDF kimi oxu
                    </Button>
                    <Button
                      className={styles.btn}
                      color="warning"
                      variant="contained"
                    >
                      Qəzet kimi vərəqlə
                    </Button>
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
              <div className={styles.follow}>
                <div className={styles.content}>
                  <span>Bizi takip edin!</span>
                  <input type="email" placeholder="Email" />
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
