import styles from "./index.module.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <AccountBoxIcon fontSize="large" />
        Khayal Sadigov
      </div>
    </div>
  );
}

export default Header;
