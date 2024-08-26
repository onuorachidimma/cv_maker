import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import Signup from "./pages/signup";
import CVRanker from "./pages/cvRankerPage";
import TemplateSelector from "./pages/templateSelector";
import ResumeBuilder from "./pages/resumeBuilder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/rankCV" element={<CVRanker />} />
      <Route path="/templates" element={<TemplateSelector />} />
      <Route path="/resumebuilder" element={<ResumeBuilder />} />
    </Routes>
  );
}

export default App;
