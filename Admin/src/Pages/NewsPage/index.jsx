import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
function NewsPage() {
  const store = useContext(DataContext);
  store.route.setData("news");
  return (
    <div className={styles.NewsPage}>
      
      <Outlet/>
    </div>
  );
}

export default NewsPage;
