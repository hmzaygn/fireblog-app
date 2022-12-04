import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../helpers/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const values = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });
  }, []);

  return (
    <>
      {currentUser && (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
      )}
    </>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
