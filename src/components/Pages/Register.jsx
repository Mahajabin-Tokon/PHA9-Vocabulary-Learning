import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
        <div className="text-center text-4xl">Register</div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Photo URL</span>
          </div>
          <input
            name="photo"
            type="text"
            placeholder="Phot URL"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="">
          Aready have an account?{" "}
          <Link to="/login" className="text-red-800">
            Login
          </Link>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn font-bold w-1/4">Register</button>
      </div>
      <div className="text-center my-5">
        <button className="btn font-bold w-1/4">Login via Google</button>
      </div>
    </div>
  );
};

export default Register;
