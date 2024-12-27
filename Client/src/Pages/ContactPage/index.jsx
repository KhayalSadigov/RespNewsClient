import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import langcheck from "./language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
function ContactPage() {
  let store = useContext(DataContext);
  store.route.setData("contact");
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <form className={styles.form}>
            <h1>{langcheck.form.header[store.lang.data]}</h1>
            <TextField
              className={styles.input}
              label={langcheck.form.email[store.lang.data]}
              variant="outlined"
            />
            <TextField
              className={styles.input}
              label={langcheck.form.title[store.lang.data]}
              variant="outlined"
            />
            <TextField
              className={styles.input}
              label={langcheck.form.content[store.lang.data]}
              variant="outlined"
              multiline
              minRows={10}
            />
            <div className={styles.btns}>
              <Button className={styles.btn} variant="contained">
                {langcheck.form.send[store.lang.data]}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.7286799156062!2d49.80996556683066!3d40.36964990457109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ddd2da5de55%3A0x3d0857429675caf!2zQXrJmXJiYXljYW4gTsmZxZ9yaXl5YXTEsQ!5e0!3m2!1str!2saz!4v1734935499022!5m2!1str!2saz" width="600" height="450" style={{ border: '0' }} allowfullscreen="" ></iframe>

          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.block}>
              <LocalPhoneIcon />
              <span>(+99412) 441 20 23</span>
            </div>
            <div className={styles.block}>
              <EmailIcon />
              <span>resp.paper@gmail.com</span>
            </div>
            <div className={styles.block}>
              <EmailIcon />
              <span>respublikaqezeti@mail.ru</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactPage;
