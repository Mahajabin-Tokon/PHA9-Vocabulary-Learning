import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(authContext);
  
  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <div className="flex flex-col justify-center items-center gap-4 p-5 m-5">
        <div className="text-center text-4xl">Welcome User</div>
        {user?.displayName ? <p>{user.displayName}</p> : <p>Name</p>}
        {user?.email ? <p>{user.email}</p> : <p>Email</p>}
        {user?.photoURL ? (
          <img src={user.photoURL} alt="User image" />
        ) : (
          <p>Image</p>
        )}

        <Link to="/update" className="btn font-bold w-1/4">Update Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
