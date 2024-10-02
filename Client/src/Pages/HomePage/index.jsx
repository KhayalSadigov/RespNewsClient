import styles from "./index.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.left}>
              <img src="./../../../public/images/2884318.png" alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.head}>
                <h1>Do you need a personal portfolio? Prepare now!</h1>
                <p>
                  This platform is designed to provide users with a space where
                  they can easily design their own portfolios and showcase their
                  projects and skills. Our users can present their professional
                  background and achievements in an impressive manner,
                  effectively communicating with potential employers and
                  collaborators. With our user-friendly interface, they can
                  customize and update their portfolios without needing any
                  technical knowledge.
                </p>
              </div>
              <div className={styles.buttons}>
                <Link className={styles.btn} to={"/start"}>
                  <Button variant="contained">Get started!</Button>
                </Link>
                <Link className={styles.btn} to={"/about"}>
                  <Button variant="contained" color="warning">About Us!</Button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
