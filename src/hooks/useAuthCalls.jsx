import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../helpers/firebase";
import { toastError, toastSuccess } from "../helpers/toastify";

const useAuthCalls = () => {
  const navigate = useNavigate();

  const register = async (email, password, name, lastName) => {
    const displayName = name + " " + lastName;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      navigate("/");
      toastSuccess(`Successfully Registered`);
    } catch (error) {
      console.log(error.message);
      toastError("Can not be Registered");
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toastSuccess(`Successfully Logged In`);
    } catch (error) {
      console.log(error.message);
      toastError("Can not be Logged In");
    }
  };

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/");
        toastSuccess(`Successfully Signed In`);
      })
      .catch((error) => {
        console.log(error.message);
        toastError("Can not be Signed In");
      });
  };

  const logout = () => {
    signOut(auth);
    navigate("/login");
    toastSuccess(`Successfully Logged Out`);
  };

  return { login, register, logout, googleAuth };
};

export default useAuthCalls;
