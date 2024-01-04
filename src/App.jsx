import { Routes, Route } from "react-router-dom";

// Import Pages
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";

// Import CSS
import "./css/reset.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
