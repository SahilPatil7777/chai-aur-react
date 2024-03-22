import React, { useState, useContext } from "react";
// useContext is an hook
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // fetching value from UserContext so we used useContext it give the access of setUser (yeh bat hue data sending ki)
  const { setUser } = useContext(UserContext);

  // method for sending data to setUser in UserContext
  const handleSubmit = (e) => {
    e.preventDefault(); //when you submit bydefault value go anywhere throught url
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
