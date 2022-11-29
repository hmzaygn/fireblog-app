import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../helpers/firebase";
import { useAuthContext } from "../contexts/AuthProvider";
import { toastSuccess } from "../helpers/toastify";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthContext();

  const register = async (email, password, name, lastName) => {
    const displayName = name + " " + lastName;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
      });
      navigate("/");
      toastSuccess(`Successfully Registered`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/");
        onAuthStateChanged(auth, (currentUser) => {
          setCurrentUser(currentUser);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth);
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
  };

  return { login, register, logout, googleAuth };
};

export default useAuthCalls;
