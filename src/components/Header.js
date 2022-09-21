import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <span>00</span>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>01</span>
            <Link to="/destination/">Destination</Link>
          </li>
          <li>
            <span>02</span>
            <Link to="/crew/">Crew</Link>
          </li>
          <li>
            <span>03</span>
            <Link to="/technology/">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
