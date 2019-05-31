import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Clearfix } from "react-bootstrap";
import logo from "../images/logo_cse.png";

const LogoContainer = () => {
  return (
    <Col md={3} className="logo-div-container">
      <Clearfix>
        {/* logo da visualizzare su smartphone */}
        <div className="logo-desktop">
          <div className="logo-div">
            <NavLink to="/">
              <div className="logo-div">
                <img src={logo} alt="" />
              </div>
            </NavLink>
            <div className="logo-div logo-font">
              <p>
                {" "}
                Corriere <br /> Spedizioni <br /> Express{" "}
              </p>
            </div>
          </div>
        </div>
      </Clearfix>
    </Col>
  );
};

export default LogoContainer;
