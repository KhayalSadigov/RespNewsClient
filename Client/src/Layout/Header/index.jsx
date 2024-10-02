import { useContext } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
function Header() {
  let store = useContext(DataContext);
  const langCheck = {
    nav: {
      home: ["Ana Səhifə", "Home", "Главная"],
      categories: ["Kategoriyalar", "Categories", "Категории"],
      contact: ["Əlaqə", "Contact", "Контакт"],
      about: ["Haqqımızda", "About us", "О нас"],
    },
  };
  return (
    <header>
      <div className={styles.logo}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.photo}>
              <img
                src="./../../../public/images/LogoPhoto.jpeg"
                alt="Haydar Aliyev"
              />
            </div>
            <div className={styles.name}>
              <img src="./../../../public/images/Logo.png" alt="" />
            </div>
            <div className={styles.photo}>
              <img
                src="./../../../public/images/LogoPhoto2.jpeg"
                alt="Haydar Aliyev"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.nav}>
            <ul className={styles.navBtns}>
              <li>
                <Link
                  style={
                    store.route.data == "home"
                      ? { backgroundColor: "red", color: "white" }
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
                      ? { backgroundColor: "red", color: "white" }
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
                      ? { backgroundColor: "red", color: "white" }
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
                      ? { backgroundColor: "red", color: "white" }
                      : {}
                  }
                  className={styles.link}
                  to={"/about"}
                >
                  {langCheck.nav.about[store.lang.data]}
                </Link>
              </li>
            </ul>
            <ul className={styles.langBtns}>
              <li
                style={
                  store.lang.data == 0
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
                onClick={() => {
                  store.lang.setData(0);
                }}
              >
                AZ
              </li>
              <li
                style={
                  store.lang.data == 1
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
                onClick={() => {
                  store.lang.setData(1);
                }}
              >
                EN
              </li>
              <li
                style={
                  store.lang.data == 2
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
                onClick={() => {
                  store.lang.setData(2);
                }}
              >
                RU
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
