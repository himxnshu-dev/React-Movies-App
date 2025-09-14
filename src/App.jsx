import "./css/App.css";
import {Routes, Route} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header className="navbar">
        <NavBar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
