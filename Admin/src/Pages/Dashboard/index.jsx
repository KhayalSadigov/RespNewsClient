import styles from "./index.module.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonIcon from "@mui/icons-material/Person";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FeedIcon from "@mui/icons-material/Feed";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
function Dashboard() {
  const store = useContext(DataContext)
  store.route.setData("dashboard");
  return (
    <div className={styles.dash}>
      <div className={styles.viewStats}>
        <div className={styles.block}>
          <div className={styles.content}>
            <RemoveRedEyeIcon fontSize="large" />
            <span>2371 Ümumi İzlənmə</span>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <AdUnitsIcon fontSize="large" />
            <span>240 Telefondan</span>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <ComputerIcon fontSize="large" />
            <span>2371 Komputerdən</span>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <PersonIcon fontSize="large" />
            <span>1975 İstifadəçi</span>
          </div>
        </div>
      </div>
      <div className={styles.mediaStats}>
        <div className={styles.content}>
          <div>
            <Link className={styles.link} to={"/newspapers"}>
              <NewspaperIcon fontSize="large" />
              <span>34 Qəzet</span>
            </Link>
          </div>
          <div className={styles.hr}></div>
          <div>
            <Link className={styles.link} to={"/news"}>
              <FeedIcon fontSize="large" />
              <span>58 Xəbər</span>
            </Link>
          </div>
          <div className={styles.hr}></div>
          <div>
            <Link className={styles.link} to={"/photos"}>
              <PermMediaIcon fontSize="large" />
              <span>75 Foto</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.cartStats}>
        <div className={styles.block}>
          <div className={styles.content}></div>
        </div>
        <div className={styles.block}>
          <div className={styles.content}></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
