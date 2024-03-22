import React from "react";

//  creating a UserContext
const UserContext = React.createContext();
// createContext is method
export default UserContext;
// Context is an global variable
// context is gives you a provider basically context provide you the variable so each and every context is provider
// when you wrap UserContext in <UserContext></UserContext> then it is called provider. means all component inside the UserContext they have access of global UserContext
