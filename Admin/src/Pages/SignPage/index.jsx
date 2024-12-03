import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./index.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

function SignPage() {
  const store = useContext(DataContext);
  const [log,setLog] = useState(false)
  if (store.user.data.name) window.location.replace("/");
  useEffect(() => {
    store.route.setData("sign");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.children[0].children[1].children[0].value;
    const userPassword = e.target.children[1].children[1].children[0].value;
    setLog(true)
    axios
      .post("https://localhost:44314/api/user/login", {
        userName: userName,
        userPassword: userPassword,
      })
      .then((res) => {
        alert(`Xoş gəldin ${userName}`);
        localStorage.setItem(
          "respUser",
          JSON.stringify({
            user: userName,
          })
        );
        localStorage.setItem(
          "respToken",
          JSON.stringify({
            token: res.data.token,
          })
        );
        window.location.replace("/");
      })
      .catch(() => {
        setLog(false)
        alert("İstifadəçi adı və ya şifrə yalnışdır!");
        e.target.children[0].value = "";
        e.target.children[1].value = "";
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained" type="submit" className={styles.btn}>
        {
          log ? <CircularProgress   size={30} className={styles.circle}/> : "Log In"
        }
      </Button>
    </form>
  );
}

export default SignPage;
