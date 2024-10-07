import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.scss"
const CurrencyRate = () => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // https://app.exchangerate-api.com/dashboard/confirmed
    const url = `https://v6.exchangerate-api.com/v6/2022d46078d2356ba6e50941/latest/AZN`;

    axios.get(url).then((res) => {
      try {
        setRate(res.data.conversion_rates);
      } catch (error) {
        setError(error);
      }
    });
  }, []);

  return (
    <div>
      {error && <p> Xəta: {error} </p>}
      {rate ? (
        <div className={styles.table}>
          <p>| AZƏRBAYCAN MƏZƏNNƏSİ:</p>
          <p>1 USD = {(1/rate.USD).toFixed(3)} AZN</p>
          <p>1 EUR = {(1/rate.EUR).toFixed(3)} AZN</p>
          <p>1 RUB = {(1/rate.RUB).toFixed(3)} AZN</p>
          <p>1 GEL = {(1/rate.GEL).toFixed(3)} AZN</p>
          <p>1 TRY = {(1/rate.TRY).toFixed(3)} AZN |</p>
        </div>
      ) : (
        <p> Məlumat yüklənir...</p>
      )}
    </div>
  );
};

export default CurrencyRate;
