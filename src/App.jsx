import { Routes, Route } from "react-router-dom";

// Import Pages
import Landing from "./Pages/Landing/Landing";
import Nav from "./Components/Nav/Nav";

// Import CSS
import "./css/reset.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
