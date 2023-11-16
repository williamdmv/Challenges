import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // nuevo estado

  const contextValue = { user, setUser, isAuthenticated, setIsAuthenticated }; // incluir isAuthenticated en el contexto

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
