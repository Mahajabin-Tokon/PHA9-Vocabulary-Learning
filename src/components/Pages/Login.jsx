import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleLogin, handleGoogleLogin, handleLogout } =
    useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(email, password)
      .then((result) => {
        navigate(location.state.from);
      })
      .catch((error) => {
        setError("Invalid Credentials");
      });
  };

  const googleLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        navigate(location.state.from);
      })
      .catch((error) => {
        setError("Invalid Credentials");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-2 px-2">
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
              <span className="label-text-alt">
                Forgot Password? Click Here
              </span>
            </div>
          </label>

          <div className="">
            Do not have an account?{" "}
            <Link to="/register" className="text-red-800">
              Register
            </Link>
          </div>
          <div>{error && <p className="text-xs text-red-600">{error}</p>}</div>
        </div>

        <div className="text-center my-5">
          <button type="submit" className="btn font-bold w-1/4">
            Login
          </button>
        </div>
        <div className="text-center my-5">
          <button onClick={googleLogin} className="btn font-bold w-1/4">
            Login via Google
          </button>
        </div>
      </form>
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    </>
  );
};

export default Login;
