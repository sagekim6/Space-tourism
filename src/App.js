import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

import "./style/app.scss";

function App() {
  return (
    <>
      <a href="#main" class="skip-to-content">
        skip to content
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/" element={<Destination />} />
          <Route path="/crews/" element={<Crew />} />
          <Route path="/technologies/" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
