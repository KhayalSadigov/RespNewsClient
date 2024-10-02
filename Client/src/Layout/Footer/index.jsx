import styles from "./index.module.scss";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.logo}>
              <img src="./../../../public/images/Logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
