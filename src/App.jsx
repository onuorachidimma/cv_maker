import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import Signup from "./pages/signup";
import CVRanker from "./pages/cvRankerPage";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/privateRoutes";
import CVBuilder from "./pages/CVBuilder.jsx";
import CVTemplate from "./layouts/Cv-builder/CVTemplate1";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/rankCV" element={<CVRanker />} />
     
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/cvbuilder" element={<CVBuilder />}></Route>
    </Routes>
  );
}

export default App;
