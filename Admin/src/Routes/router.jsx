import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import Dashboard from "../Pages/Dashboard";
import News from "../Pages/NewsPage";
import Subscribers from "../Pages/SubscribersPage";
import UsersPage from "../Pages/AdminsPage";
import SocialPage from "../Pages/SocialPage";
import NewspapersPage from "../Pages/NewspapersPage";
import PhotosPage from "../Pages/PhotosPage";
import MessagePage from "../Pages/MessagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "subscribers",
        element: <Subscribers />,
      },
      {
        path: "admins",
        element: <UsersPage />,
      },
      {
        path: "social",
        element: <SocialPage />,
      },
      {
        path: "newspapers",
        element: <NewspapersPage />,
      },
      {
        path: "photos",
        element: <PhotosPage />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "messages",
        element: <MessagePage />,
      },
    ],
  },
]);

export default router;
