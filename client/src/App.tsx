import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Done from "./Pages/Done";
import Auto_Loan from "./Pages/Auto-Loan";
import Application_Portal from "./Pages/Application-Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application_Portal />} />
        <Route path="/Auto_Loan" element={<Auto_Loan />} />
        <Route path="/Done" element={<Done />} />
      </Routes>
    </Router>
  );
}

export default App;
