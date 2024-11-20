import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleGoogleLogin } = useContext(authContext);
  return (
    <form className="max-w-6xl mx-auto my-2 px-2">
      <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
        <div className="text-center text-4xl">Login</div>

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
            <span className="label-text">Password</span>
          </div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Forgot Password? Click Here</span>
          </div>
        </label>

        <div className="">
          Do not have an account?{" "}
          <Link to="/register" className="text-red-800">
            Register
          </Link>
        </div>
      </div>

      <div className="text-center my-5">
        <button className="btn font-bold w-1/4">Login</button>
      </div>
      <div className="text-center my-5">
        <button onClick={handleGoogleLogin} className="btn font-bold w-1/4">
          Login via Google
        </button>
      </div>
    </form>
  );
};

export default Login;
