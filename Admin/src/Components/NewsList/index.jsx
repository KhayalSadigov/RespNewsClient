import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Button from "@mui/material/Button";
import NewsTable from "../NewsTable";

function NewsList() {
  function handleLangChange(e){
    console.log(e.target.value)
  }
  return (
    <div>
      <div className={styles.head}>
        <Link to={"/news/add"} className={styles.link}>
          <div className={styles.add}>
            <AddToPhotosIcon fontSize="medium" />
            <span>Əlavə et </span>
          </div>
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.filter}>
          <div className={styles.option}>
            <input type="text" placeholder="Axtar" />
            <select onChange={handleLangChange}>
              <option selected disabled hidden value="ALL">
                Dil
              </option>
              <option value="AZ">AZE</option>
              <option value="EN">ENG</option>
              <option value="RU">RUS</option>
            </select>
          </div>
            <Button variant="contained">Hamısını göstər</Button>
        </div>
        <div className={styles.list}>
          <NewsTable/>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
