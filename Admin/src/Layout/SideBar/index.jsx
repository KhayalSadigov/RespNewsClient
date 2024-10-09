import styles from "./index.module.scss";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MessageIcon from '@mui/icons-material/Message';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
function SideBar() {
  const [open, setOpen] = useState(false);
  const store = useContext(DataContext)
  return (
    <div
      className={styles.sidebar}
      style={open ? { width: "20%" } : { width: "5%" }}
    >
      <p className={styles.title} style={open ? {} : { display: "none" }}>
        <AccountTreeIcon /> Admin Panel
        <ArrowBackIosNewIcon
        onClick={() => {
          setOpen(false);
        }}
        style={open ? {} : { display: "none" }}
        className={styles.close}
      />
      </p>
      <p className={styles.title} style={open ? { display: "none" } : {}}>
        <MenuIcon
          className={styles.open}
          onClick={() => {
            setOpen(true);
          }}
        />
      </p>
      
      <nav>
        <div className={styles.block}>
          <Link className={styles.link} to={"/"}>
            <span style={store.route.data == 'dashboard' ? {backgroundColor:"#46587a"}:{}}>
              <MapsHomeWorkIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Anasəhifə</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/news"}>
            <span style={store.route.data == 'news' ? {backgroundColor:"#46587a"}:{}}>
              <ArticleIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Xəbərlər</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/photos"}>
            <span style={store.route.data == 'photos' ? {backgroundColor:"#46587a"}:{}}>
              <PermMediaIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Fotolar</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/newspapers"}>
            <span style={store.route.data == 'newspapers' ? {backgroundColor:"#46587a"}:{}}>
              <NewspaperIcon />
              <p style={open ? {} : { display: "none" }}>Qəzetlər</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/social"}>
            <span style={store.route.data == 'social' ? {backgroundColor:"#46587a"}:{}}>
              <PermDeviceInformationIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Sosial media</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/messages"}>
            <span style={store.route.data == 'messages' ? {backgroundColor:"#46587a"}:{}}>
              <MessageIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Mesajlar</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/admins"}>
            <span style={store.route.data == 'admins' ? {backgroundColor:"#46587a"}:{}}>
              <AdminPanelSettingsIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Adminlər</p>
            </span>
          </Link>
          <Link className={styles.link} to={"/subscribers"}>
            <span style={store.route.data == 'subscribers' ? {backgroundColor:"#46587a"}:{}}>
              <GroupIcon />{" "}
              <p style={open ? {} : { display: "none" }}>Abunə olanlar</p>
            </span>
          </Link>
        </div>
        <span>
          <a href="http://localhost:5174/">
            <ExitToAppIcon />
            <p style={open ? {} : { display: "none" }}>Əsas sayta qayıt</p>
          </a>
        </span>
      </nav>
    </div>
  );
}

export default SideBar;
