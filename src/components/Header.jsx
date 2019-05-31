import React from "react";
import LogoContainer from "./LogoContainer";
import Menu from "./Menu";
import "../css/gs.bundle.css";

const Header = () => {
  return (
    <header className="header fixed header-small clearfix">
      <div id="header-section" className="container">
        <div className="row">
          <LogoContainer />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
