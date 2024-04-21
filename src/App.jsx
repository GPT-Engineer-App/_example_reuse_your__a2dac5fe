import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DarkMode from "./pages/DarkMode.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dark-mode" element={<DarkMode />} />
      </Routes>
    </Router>
  );
}

export default App;
