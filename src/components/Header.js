import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
import HamburgerMenu from "../assets/shared/icon-hamburger.svg";
import CloseMenu from "../assets/shared/icon-close.svg";
import { memo, useCallback } from "react";

const Header = () => {
  const handleMobileMenuVisibiliy = useCallback(() => {
    const ul = document.querySelector(".Primary-nav");
    const mobileMenu = document.querySelector(".Mobile-menu-toggle");
    let visibility = ul.getAttribute("data-visible");

    if (visibility === "false") {
      ul.setAttribute("data-visible", true);
      mobileMenu.querySelector("img").setAttribute("src", CloseMenu);
    } else {
      ul.setAttribute("data-visible", false);
      mobileMenu.querySelector("img").setAttribute("src", HamburgerMenu);
    }
  }, []);

  return (
    <header className="Header">
      <div>
        <img src={Logo} alt="logo" className="Logo" />
      </div>
      <Button
        className={"Mobile-menu-toggle"}
        onClick={handleMobileMenuVisibiliy}
        text={<img src={HamburgerMenu} alt="mobile menu" />}
      />
      <nav>
        <ul className="Primary-nav" data-visible="false">
          <li>
            <Link to="/">
              <span aria-hidden="true">00</span>HOME
            </Link>
          </li>
          <li>
            <Link to="/destinations/">
              <span aria-hidden="true">01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crews/:commander">
              <span aria-hidden="true">02</span>CREW
            </Link>
          </li>
          <li>
            <Link to="/technologies/">
              <span aria-hidden="true">03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
