import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import SearchPage from "../Pages/SearchPage";
import NewsPage from "../Pages/NewsPage";
import MultimediaPage from "../Pages/MultimediaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "multimedia",
        element: <MultimediaPage />,
      },
      {
        path: "news/:id",
        element: <NewsPage />,
      },
      {
        path: "search/:type/:query",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
