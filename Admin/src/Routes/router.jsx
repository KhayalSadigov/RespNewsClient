import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import StaticEdit from "../Pages/StaticEdit";
import AddPage from "../Pages/AddPage";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "static",
        element: <StaticEdit />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
    ],
  },
]);

export default router;
