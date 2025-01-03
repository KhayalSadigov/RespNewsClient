/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Base_Url from "../../Constant/base_url";
import { DataContext } from "../../Context/dataContext";
import styles from "./index.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import langCheck from "./language";

function SearchPage() {
  let store = useContext(DataContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [moreLoader, setMoreLoader] = useState(false)
  const navigate = useNavigate();
  let { type, query } = useParams();
  useEffect(() => {
    store.route.setData("search");
  }, []);
  useEffect(() => {
    if (type == "category") {
      axios
        .get(
          Base_Url +
          `/api/news/language/${parseInt(store.lang.data) + 1
          }/${query}/${page}`
        )
        .then((res) => {
          setData([...data, ...res.data]);
          setMoreLoader(false)
        }).catch(()=>{
            setMoreLoader(null)
        });
    }

    if (type == "date") {
      axios
        .get(Base_Url + `/api/SelectDate/${parseInt(store.lang.data) + 1}/${query}`)
        .then((res) => {
          setData([...data, ...res.data]);
          setMoreLoader(false)
          if(res.data)
            setMoreLoader(null)
        }).catch(()=>{
          setMoreLoader(null)
      });
    }

    if (type == "search") {
      axios
        .get(Base_Url + `/api/search/${parseInt(store.lang.data) + 1}/${query}/${page}`)
        .then((res) => {
          setData([...data, ...res.data]);
          setMoreLoader(false)
          if(res.data)
            setMoreLoader(null)
        }).catch(()=>{
          setMoreLoader(null)
      });
    }
  }, [store.lang.data, type, query, page]);
  return (

    data.length != 0 ? (<div className="container">
      <div className={styles.seacrhSection}>
        {data.map((e, i) => {
          return (
            <div
              onClick={() => {
                navigate(`/news/${e.newsId}`);
              }}
              className={styles.card}
              key={i}
            >
              <div className={styles.content}>
                <div className={styles.glass}>{e.newsTitle}</div>
                {
                  type == 'date' ? <img
                    src={
                      e.photoUrl.length != 0 && e.photoUrl.length != 0
                        ? Base_Url + e.photoUrl[0]
                        : "./../images/DefaultPhoto.png"
                    }
                    alt=""
                  /> : <img
                    src={
                      e.newsPhotos[0].photoUrl.length != 0 && e.newsPhotos[0].photoUrl.length != 0
                        ? Base_Url + e.newsPhotos[0].photoUrl
                        : "./../images/DefaultPhoto.png"
                    }
                    alt=""
                  />
                }
              </div>
            </div>
          );
        })}
        <div className={styles.showMore}>
          <div style={type == 'date'  ? { display: 'none' } : {}} onClick={() => {
            setPage(page + 1)
            setMoreLoader(true)
          }} className={styles.content}>
            {
              moreLoader ? <CircularProgress /> : langCheck.showMore[store.lang.data]
            }
          </div>
        </div>
      </div>
    </div>) : (<div className={styles.loader}>
      <CircularProgress />
    </div>)

  );
}

export default SearchPage;
