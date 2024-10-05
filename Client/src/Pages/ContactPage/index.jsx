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
