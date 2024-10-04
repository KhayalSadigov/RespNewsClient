import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import NavModal from "../Components/NavModal";

function MainRout() {
  return (
    <>
      <NavModal />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainRout;
