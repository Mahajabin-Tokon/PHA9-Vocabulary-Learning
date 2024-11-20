import React from "react";

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
        <div className="text-center text-4xl">Welcome User</div>
        <p>Name</p>
        <p>Email</p>
        <p>Img</p>
        <button className="btn font-bold w-1/4">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
