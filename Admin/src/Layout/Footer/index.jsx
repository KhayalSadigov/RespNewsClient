import styles from "./index.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.info}>
        <hr />
        <span>
          Developed By{" "}
          <a href="https://www.linkedin.com/in/khayal-sadigov-12807b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            Khayal Sadigov
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
