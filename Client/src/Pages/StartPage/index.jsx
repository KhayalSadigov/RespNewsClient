import { Button } from "@mui/material";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";

function StartPage() {
  return (
    <section className={styles.start}>
      <div className="container">
        <div className={styles.content}>
          <form className={styles.sign}>
            <div className={styles.header}>
              <h1>Create an account!</h1>
            </div>
            <div className={styles.body}>
              <TextField  label="Name" variant="outlined" />
              <TextField
                
                label="Sirname"
                variant="outlined"
              />
              <TextField
                
                label="Username"
                variant="outlined"
              />
              <TextField  label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className={styles.footer}>
              <Button variant="contained" color="warning" className={styles.btn}>
                Cancel
              </Button>
              <Button variant="contained"  className={styles.btn}>
                Sign Up!
              </Button>
            </div>
            <div className={styles.banner}>
              <span></span>
              <p>Already have an account? Sign in!</p>
              <span></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default StartPage;
{
  /* <div className={styles.header}>
            <h1>Create an account !</h1>
          </div>
          <form className={styles.body}>
            <p className={styles.title}>Personal information</p>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
              <TextField
              id="outlined-basic"
              label="Sirname"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="User name"
              variant="outlined"
            />
            <p className={styles.title}>Personal information</p>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
         */
}
