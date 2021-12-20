import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Auto_Loan from "./Pages/Auto-Loan";
import Application_Portal from "./Pages/Application-Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auto_Loan" element={<Auto_Loan />} />
        <Route path="/Application_Portal" element={<Application_Portal />} />
      </Routes>
    </Router>
  );
}

export default App;
