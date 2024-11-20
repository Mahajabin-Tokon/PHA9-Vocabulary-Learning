import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { emailReference } = useContext(authContext);
  const navigate = useNavigate();
  console.log(emailReference);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, emailReference)
      .then(() => {
        navigate(
          "https://www.google.com/search?q=gmail&rlz=1C5CHFA_enCA929CA929&oq=gmail&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGI8CMgcIAhAAGI8CMgYIAxBFGD3SAQgxMTE5ajBqMagCALACAA&sourceid=chrome&ie=UTF-8"
        );
      })
      .catch((error) => {});
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-2 px-2">
        <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
          <div className="text-center text-4xl">Update Password</div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            {emailReference ? (
              <input
                value={emailReference}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            ) : (
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            )}
          </label>
        </div>
        <div className="text-center my-5">
          <button type="submit" className="btn font-bold w-60">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
