import AppRouter from "./router/AppRouter";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
