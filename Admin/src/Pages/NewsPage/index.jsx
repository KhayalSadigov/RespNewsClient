import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import BlogEditor from "../../Components/EditBlock";
import styles from "./index.module.scss";
function NewsPage() {
  const store = useContext(DataContext);
  store.route.setData("news");
  return (
    <div className={styles.NewsPage}>
      <div className={styles.head}>
        <h5>Dil Seçimi:</h5>
        <span onClick={()=>{
          store.addLang.setData('AZ')
        }}
          style={
            store.addLang.data == "AZ" ? { backgroundColor: "white", color: "#2F3C54" } : {}
          }
        >
          AZ
        </span>
        <span onClick={()=>{
          store.addLang.setData('EN')
        }}
          style={
            store.addLang.data == "EN" ? { backgroundColor: "white", color: "#2F3C54" } : {}
          }
        >
          EN
        </span>
        <span onClick={()=>{
          store.addLang.setData('RU')
        }}
          style={
            store.addLang.data == "RU" ? { backgroundColor: "white", color: "#2F3C54" } : {}
          }
        >
          RU
        </span>
      </div>
      <BlogEditor className={styles.editor} />
    </div>
  );
}

export default NewsPage;
