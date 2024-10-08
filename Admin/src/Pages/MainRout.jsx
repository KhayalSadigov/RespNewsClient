import { Outlet } from "react-router-dom";
import SideBar from "../Layout/SideBar";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function MainRout() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideBar />
      <div style={{ width: "100%", overflowY: "scroll" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default MainRout;
