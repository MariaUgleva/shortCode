import React from "react";
import Burger from "../Burger";
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__right">
        <img src="../../images/logo.svg" alt="" className="logo header__logo" />
        <nav className="nav header__nav">
          <a href="#" className="nav__item header__nav-item">
            Features
          </a>
          <a href="#" className="nav__item header__nav-item">
            Pricing
          </a>
          <a href="#" className="nav__item header__nav-item">
            Resources
          </a>
        </nav>
      </div>
      <div className="header__left">
        <a href="#" className="header__nav-item">
          Login
        </a>
        <button className="btn header__btn">Sign Up</button>
      </div>
      <Burger />
    </header>
  );
};
export default Header;
