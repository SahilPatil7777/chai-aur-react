import React from "react";
import UserContext from "./UserContext";

// creating UserContextProvider method
const UserContextProvider = ({ children }) => {
  // making a state
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* rendering the chilldren component */}
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
