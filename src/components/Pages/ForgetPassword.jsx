import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { emailReference, resetPass, loading } = useContext(authContext);
  const navigate = useNavigate();
  console.log(emailReference);
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailForReset = event.target.email.value;
    if (emailReference) {
      resetPass(emailReference)
        .then(() => {
          document.getElementById("glink").click()
          // window.location.href =
          //   "https://www.google.com/search?q=gmail&rlz=1C5CHFA_enCA929CA929&oq=gmail&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQABhDGLEDGIAEGIoFMhIIAhAAGEMYgwEYsQMYgAQYigUyEggDEAAYQxiDARixAxiABBiKBTINCAQQABixAxiABBiKBTIKCAUQABixAxiABDINCAYQABiDARixAxiABDIGCAcQRRg90gEIMTI3OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8";
          // navigate(window.location.href);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      resetPass(emailForReset)
        .then(() => {
          document.getElementById("glink").click()
          // window.location.href =
          //   "https://www.google.com/search?q=gmail&rlz=1C5CHFA_enCA929CA929&oq=gmail&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQABhDGLEDGIAEGIoFMhIIAhAAGEMYgwEYsQMYgAQYigUyEggDEAAYQxiDARixAxiABBiKBTINCAQQABixAxiABBiKBTIKCAUQABixAxiABDINCAYQABiDARixAxiABDIGCAcQRRg90gEIMTI3OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8";
          // navigate(window.location.href);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-2 px-2">
        <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
          <div className="text-center text-4xl">Update Password</div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
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
      <a id="glink" className="hidden" href="https://www.google.com/search?q=gmail&rlz=1C5CHFA_enCA929CA929&oq=gmail&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQABhDGLEDGIAEGIoFMhIIAhAAGEMYgwEYsQMYgAQYigUyEggDEAAYQxiDARixAxiABBiKBTINCAQQABixAxiABBiKBTIKCAUQABixAxiABDINCAYQABiDARixAxiABDIGCAcQRRg90gEIMTI3OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"></a>
    </>
  );
};

export default ForgetPassword;
