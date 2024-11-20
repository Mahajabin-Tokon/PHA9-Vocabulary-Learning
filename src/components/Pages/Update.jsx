import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { manageProfile } = useContext(authContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    manageProfile(name, image)
      .then((result) => {
        navigate("/profile");
      })
      .catch((error) => {
       
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-2 px-2">
        <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
          <div className="text-center text-4xl">Update Profile</div>

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
              <span className="label-text">Photo URL</span>
            </div>
            <input
              name="image"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="text-center my-5">
          <button type="submit" className="btn font-bold w-60">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Update;
