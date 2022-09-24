import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  // const handleBackgroundChange = () => {
  //   if (location.pathname === "/destination/") {
  //     console.log("/destination/");
  //   } else if (location.pathname === "/crew/") {
  //     console.log("/crew/");
  //   } else if (location.pathname === "/technology/") {
  //     console.log("/technology/");
  //   } else if (location.pathname === "/") {
  //     console.log("/");
  //   }
  // };

  // useEffect(() => {
  //   handleBackgroundChange();
  // }, [location]);

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
