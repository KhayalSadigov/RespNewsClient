import { useContext } from "react";
import styles from "./index.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { DataContext } from "../../Context/dataContext";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import langCheck from "./language";

function Footer() {
  const store = useContext(DataContext);
  return (
    <footer>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.logo}>
              <h2>{langCheck.logo.header[store.lang.data]}</h2>
              <div className={styles.image}>
                <img src="./../../../public/images/Logo.png" alt="logo" />
              </div>
              <div className={styles.social}>
                <a
                  className={styles.icon}
                  href="https://www.facebook.com/share/oHoKb4RVHyMowAu4/?mibextid=qi2Omg"
                  target="_blank"
                >
                  <FacebookIcon fontSize="large" />
                </a>
                <a
                  className={styles.icon}
                  href="https://www.youtube.com/@TvR1996"
                  target="_blank"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
                <a
                  className={styles.icon}
                  href="https://www.linkedin.com/company/respublikaqazeti/"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  className={styles.icon}
                  href="https://www.instagram.com/respublikaqazeti?igsh=MTltdHRzNXNxODgyNg=="
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  className={styles.icon}
                  href="mailto:resp.paper@gmail.com"
                  target="_blank"
                >
                  <EmailIcon fontSize="large" />
                </a>
                <a
                  className={styles.icon}
                  href="tel:+994124412023"

                >
                  <SmartphoneIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.quick}>
              <h2>{langCheck.quick.header[store.lang.data]}</h2>
              <div className={styles.links}>
                <ul>
                  <li>
                    <KeyboardArrowRightIcon fontSize="small" />
                    <span>
                      <Link className={styles.link} to={"/"}>
                        {langCheck.quick.home[store.lang.data]}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <KeyboardArrowRightIcon fontSize="small" />
                    <span>
                      <Link className={styles.link} to={"/categories"}>
                        {langCheck.quick.categories[store.lang.data]}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <KeyboardArrowRightIcon fontSize="small" />
                    <span>
                      <Link className={styles.link} to={"/contact"}>
                        {langCheck.quick.contact[store.lang.data]}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <KeyboardArrowRightIcon fontSize="small" />
                    <span>
                      <Link className={styles.link} to={"/about"}>
                        {langCheck.quick.about[store.lang.data]}
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.about}>
              <h2>{langCheck.about.header[store.lang.data]}</h2>
              <span>{langCheck.about.content[store.lang.data]}</span>
              <span>{langCheck.about.location[store.lang.data]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <span>
          © <a href="">{langCheck.info.name[store.lang.data]}</a>. {langCheck.info.content[store.lang.data]}
        </span>
        <hr />
        <span>
          Developed By{" "}
          <a href="https://www.linkedin.com/in/khayal-sadigov-12807b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            Khayal Sadigov
          </a>{" "}
          and <a href="">Pashazada Malak</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
