import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../helpers/firebase";

const useAuthCalls = () => {
  const navigate = useNavigate();

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { register };
};

export default useAuthCalls;
