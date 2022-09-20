import Home from "../pages/Home";
import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Technology from "../pages/Technology";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/" element={<Destination />} />
        <Route path="/crew/" element={<Crew />} />
        <Route path="/technology/" element={<Technology />} />
      </Routes>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination/">Destination</Link>
            </li>
            <li>
              <Link to="/crew/">Crew</Link>
            </li>
            <li>
              <Link to="/technology/">Technology</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default Header;
