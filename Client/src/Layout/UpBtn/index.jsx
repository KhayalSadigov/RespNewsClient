import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./index.module.scss";
const UpWard = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.upBtn} onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </button>
  );
};

export default UpWard;
