import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  // receiving value from UserContext so we used useContext it give the access of user (yeh bat hue data received ki)
  const { user } = useContext(UserContext);
  // conditional return
  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
