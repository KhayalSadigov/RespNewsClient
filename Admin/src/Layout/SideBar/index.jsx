import styles from "./index.module.scss";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MessageIcon from "@mui/icons-material/Message";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";      
import Tooltip from "@mui/material/Tooltip";
function SideBar() {
  const [open, setOpen] = useState(false);
  const store = useContext(DataContext);
  return (
    <div
      className={styles.sidebar}
      style={open ? { width: "20%" } : { width: "5%" }}
    >
      <nav>
        <div className={styles.block}>
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className={styles.open}
          >
            <MenuIcon />
            <span style={open ? {} : { display: "none" }}>Admin Panel</span>
          </span>
          <Tooltip title="Ana səhifə" placement="right">
            <Link className={styles.link} to={"/"}>
              <span
                style={
                  store.route.data == "dashboard"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <MapsHomeWorkIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Anasəhifə</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Xəbərlər" placement="right">
            <Link className={styles.link} to={"/news"}>
              <span
                style={
                  store.route.data == "news"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <ArticleIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Xəbərlər</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Fotolar" placement="right">
            <Link className={styles.link} to={"/photos"}>
              <span
                style={
                  store.route.data == "photos"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <PermMediaIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Fotolar</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Qəzetlər" placement="right">
            <Link className={styles.link} to={"/newspapers"}>
              <span
                style={
                  store.route.data == "newspapers"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <NewspaperIcon />
                <p style={open ? {} : { display: "none" }}>Qəzetlər</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Social media" placement="right">
            <Link className={styles.link} to={"/social"}>
              <span
                style={
                  store.route.data == "social"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <PermDeviceInformationIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Sosial media</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Mesajlar" placement="right">
            <Link className={styles.link} to={"/messages"}>
              <span
                style={
                  store.route.data == "messages"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <MessageIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Mesajlar</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Adminlər" placement="right">
            <Link className={styles.link} to={"/admins"}>
              <span
                style={
                  store.route.data == "admins"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <AdminPanelSettingsIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Adminlər</p>
              </span>
            </Link>
          </Tooltip>
          <Tooltip title="Abunə olanlar" placement="right">
            <Link className={styles.link} to={"/subscribers"}>
              <span
                style={
                  store.route.data == "subscribers"
                    ? { backgroundColor: "#46587a" }
                    : {}
                }
              >
                <GroupIcon />{" "}
                <p style={open ? {} : { display: "none" }}>Abunə olanlar</p>
              </span>
            </Link>
          </Tooltip>
        </div>
        <span>
          <a href="http://192.168.0.111:5174/">
            <ExitToAppIcon />
            <p style={open ? {} : { display: "none" }}>Əsas sayta qayıt</p>
          </a>
        </span>
      </nav>
    </div>
  );
}

export default SideBar;
