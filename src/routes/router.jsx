import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home";
import Error from "../components/Error";
import Tutorials from "../components/Pages/Tutorials";
import Learning from "../components/Pages/Learning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/learning",
        element: <Learning></Learning>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
    ],
  },
]);

export default router;
