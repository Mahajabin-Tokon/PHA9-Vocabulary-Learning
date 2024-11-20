import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home";
import Error from "../components/Error";
import Tutorials from "../components/Pages/Tutorials";
import Learning from "../components/Pages/Learning";
import LessonDetails from "../components/Pages/LessonDetails";
import Profile from "../components/Pages/Profile";
import Register from "../components/Pages/Register";
import Login from "../components/Pages/Login";
import AboutUs from "../components/Pages/AboutUs";

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
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/learning/:lesson_no",
        element: <LessonDetails></LessonDetails>,
        loader: () => fetch("../german_vocab.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
