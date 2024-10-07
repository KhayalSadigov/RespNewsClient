import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import NavModal from "../Components/NavModal";
import UpWard from "../Layout/UpBtn";

function MainRout() {
  return (
    <>
      <NavModal />
      <Header />
      <Outlet />
      <Footer />
      <UpWard />
    </>
  );
}

export default MainRout;
