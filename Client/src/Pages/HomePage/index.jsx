import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import CardSkeleton from "../../Components/Skeleton";
import styles from "./index.module.scss";
import CurrencyRate from "../../Components/Exchange";
import Weather from "../../Components/Weather";
function HomePage() {
  let store = useContext(DataContext);
  store.route.setData("home");
  return (
    <section className={styles.hero}>
      <div className={styles.exchange}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.rate}>
              <CurrencyRate />
              <Weather />
            </div>
          </div>
        </div>
      </div>
      <CardSkeleton />
    </section>
  );
}

export default HomePage;
