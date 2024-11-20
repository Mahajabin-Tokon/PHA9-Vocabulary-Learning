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
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Update from "../components/Pages/Update";
import ForgetPassword from "../components/Pages/ForgetPassword";

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
        element: (
          <PrivateRoute>
            <Tutorials></Tutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/learning/:lesson_no",
        element: (
          <PrivateRoute>
            <LessonDetails></LessonDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../german_vocab.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
