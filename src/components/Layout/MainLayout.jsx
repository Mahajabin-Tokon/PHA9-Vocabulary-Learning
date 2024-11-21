import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-295px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
