import { useContext } from "react";
import styles from "./index.module.scss";
import { DataContext } from "../../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
import langCheck from "./language";
import SearchIcon from "@mui/icons-material/Search";

function NavModal() {
  const store = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.modal}
        style={store.navModal.data ? {} : { top: "-100%" }}
      >
        <div className={styles.nav}>
          <ul>
            <li>
              <Link
                style={
                  store.route.data == "home"
                    ? {
                      backgroundColor: "#1976D2",
                      color: "white",
                      border: "2px solid #1976D2",
                    }
                    : {}
                }
                className={styles.link}
                to={"/"}
                onClick={() => {
                  store.navModal.setData(false)
                }}
              >
                {langCheck.nav.home[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "multimedia"
                    ? {
                      backgroundColor: "#1976D2",
                      color: "white",
                      border: "2px solid #1976D2",
                    }
                    : {}
                }
                className={styles.link}
                to={"/multimedia"}
                onClick={() => {
                  store.navModal.setData(false)
                }}
              >
                {langCheck.nav.multimedia[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                onClick={() => {
                  store.categories.setModal(true)
                  store.navModal.setData(false)

                }}
              >
                {langCheck.nav.categories[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "contact"
                    ? {
                      backgroundColor: "#1976D2",
                      color: "white",
                      border: "2px solid #1976D2",
                    }
                    : {}
                }
                className={styles.link}
                to={"/contact"}
                onClick={() => {
                  store.navModal.setData(false)
                }}
              >
                {langCheck.nav.contact[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "about"
                    ? {
                      backgroundColor: "#1976D2",
                      color: "white",
                      border: "2px solid #1976D2",
                    }
                    : {}
                }
                className={styles.link}
                to={"/about"}
                onClick={() => {
                  store.navModal.setData(false)
                }}
              >
                {langCheck.nav.about[store.lang.data]}
              </Link>
            </li>
          </ul>
        </div>
        <form className={styles.search} onSubmit={(e) => {
          e.preventDefault();
          e.target.children[0].value
          navigate(`search/search/${e.target.children[0].value}`)

        }}>
          <input
            type="text"
            placeholder={langCheck.nav.search[store.lang.data]}
            required
          />
          <button className={styles.icon} type="submit">
            <SearchIcon fontSize="large" />
          </button>
        </form>
      </div>
      <div
        onClick={() => {
          store.navModal.setData(false);
        }}
        style={store.navModal.data ? {} : { bottom: "-100%" }}
        className={styles.glass}
      ></div>
    </>
  );
}

export default NavModal;
