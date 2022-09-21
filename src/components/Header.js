import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span>HOME
            </Link>
          </li>
          <li>
            <Link to="/destination/">
              <span>01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew/">
              <span>02</span>CREW
            </Link>
          </li>
          <li>
            <Link to="/technology/">
              <span>03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
