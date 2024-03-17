import React from "react";
import { useParams } from "react-router-dom";

// taking dynamic data
function User() {
  const { userid } = useParams(); //it give access to userid from main.jsx
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
  );
}

export default User;
