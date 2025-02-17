import React, { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  // const userFromFirebase = auth.currentUser
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/learning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">
          <FaBookOpen />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      {user?.email ? (
        <div className="navbar-end gap-4">
          <p>Welcome {user?.displayName}</p>
          <Link onClick={handleLogout} to="/login" className="btn">
            Logout
          </Link>
        </div>
      ) : (
        <div className="navbar-end gap-4">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
