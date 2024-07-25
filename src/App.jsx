import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
