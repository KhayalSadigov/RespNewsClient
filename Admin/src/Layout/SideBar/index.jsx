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
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.sidebar}
      style={open ? { width: "20%" } : { width: "5%" }}
    >
      <p className={styles.title} style={open ? {} : { display: "none" }}>
        <AccountTreeIcon/> Admin Panel
      </p>
      <p className={styles.title} style={open ? { display: "none" } : {}}>
        <MenuIcon
          className={styles.open}
          onClick={() => {
            setOpen(true);
          }}
        />
      </p>
      <ArrowBackIosNewIcon
        onClick={() => {
          setOpen(false);
        }}
        style={open ? {} : { display: "none" }}
        className={styles.close}
      />
      <nav>
        <div className={styles.block}>
          <span>
            <MapsHomeWorkIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Ana səhifə</p>
          </span>
          <span>
            <ArticleIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Xəbərlər</p>
          </span>
          <span>
            <PermMediaIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Fotolar</p>
          </span>
          <span>
            <NewspaperIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Qəzetlər</p>
          </span>
          <span>
            <PermDeviceInformationIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Sosial Media</p>
          </span>
          <span>
            <AdminPanelSettingsIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Adminlər</p>
          </span>
          <span>
            <GroupIcon />{" "}
            <p style={open ? {} : { display: "none" }}>Abunə olanlar</p>
          </span>
        </div>
        <span>
          <ExitToAppIcon />
          <p style={open ? {} : { display: "none" }}>Əsas sayta qayıt</p>
        </span>
      </nav>
    </div>
  );
}

export default SideBar;
