import AppRouter from "./router/AppRouter";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
