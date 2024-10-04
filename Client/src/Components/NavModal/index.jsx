import { useContext } from "react";
import styles from "./index.module.scss";
import { DataContext } from "../../Context/dataContext";
import { Link } from "react-router-dom";
import langCheck from "./language";

function NavModal() {
  const store = useContext(DataContext);
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
                        backgroundColor: "red",
                        color: "white",
                        border: "2px solid red",
                      }
                    : {}
                }
                className={styles.link}
                to={"/"}
              >
                {langCheck.nav.home[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "categories"
                    ? {
                        backgroundColor: "red",
                        color: "white",
                        border: "2px solid red",
                      }
                    : {}
                }
                className={styles.link}
                to={"/categories"}
              >
                {langCheck.nav.categories[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "contact"
                    ? {
                        backgroundColor: "red",
                        color: "white",
                        border: "2px solid red",
                      }
                    : {}
                }
                className={styles.link}
                to={"/contact"}
              >
                {langCheck.nav.contact[store.lang.data]}
              </Link>
            </li>
            <li>
              <Link
                style={
                  store.route.data == "about"
                    ? {
                        backgroundColor: "red",
                        color: "white",
                        border: "2px solid red",
                      }
                    : {}
                }
                className={styles.link}
                to={"/about"}
              >
                {langCheck.nav.about[store.lang.data]}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => {
          store.navModal.setData(false);
        }}
        style={store.navModal.data ? {}:{bottom:'-100%'}}
        className={styles.glass}
      ></div>
    </>
  );
}

export default NavModal;
