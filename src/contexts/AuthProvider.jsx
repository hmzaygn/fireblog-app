import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const values = {
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
