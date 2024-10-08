import styles from "./index.module.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import ComputerIcon from '@mui/icons-material/Computer';
import PersonIcon from '@mui/icons-material/Person';
function Dashboard() {
  return (
    <div className={styles.dash}>
      <div className={styles.stats}>
        <div className={styles.block}>
          <div className={styles.content}>
            <RemoveRedEyeIcon fontSize="large" />
            <span>2371 ümumi İzlənmə</span>
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
    </div>
  );
}

export default Dashboard;
