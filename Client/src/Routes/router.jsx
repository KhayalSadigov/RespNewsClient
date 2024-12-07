import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import CategoryPage from "../Pages/CategoryPage";
import SearchPage from "../Pages/SearchPage";

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
        path: "categories",
        element: <CategoryPage />,
      },
      {
        path: "search/:language/:type/:query",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
