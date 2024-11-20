import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegister, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const image = event.target.image.value;
    const password = event.target.password.value;
    if (password.length < 6) {
      setError("Password must contain atleast 6 characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain atleast 1 lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain atleast 1 uppercase letter");
      return;
    }
    
    handleRegister(email, password);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto my-2 px-2"
    >
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
            name="image"
            type="text"
            placeholder="Photo URL"
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
        <div>{error && <p className="text-xs text-red-600">{error}</p>}</div>
      </div>

      <div className="text-center my-5">
        <button type="submit" className="btn font-bold w-1/4">
          Register
        </button>
      </div>
      <div className="text-center my-5">
        <button onClick={handleGoogleLogin} className="btn font-bold w-1/4">
          Login via Google
        </button>
      </div>
    </form>
  );
};

export default Register;
