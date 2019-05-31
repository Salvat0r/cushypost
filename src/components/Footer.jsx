import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-content">
                <div className="logo-footer">
                  <img
                    id="logo-footer"
                    src="images/logo_cse_footer.png"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="margin-top-little">
                      {" "}
                      Corriere Spedizioni Express è la soluzione ideale per
                      spedire in tutta comodità da casa tua.
                    </p>

                    <ul className="social-links circle">
                      <li className="facebook">
                        <a
                          target="_blank"
                          href="http://www.facebook.com"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      {/*
                                    <li className="twitter"><a target="_blank" href="http://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                                    <li className="googleplus"><a target="_blank" href="http://plus.google.com"><i className="fa fa-google-plus"></i></a></li>
                                    */}
                      <li className="skype">
                        <a href="skype:alessandrocarnevaletti?chat">
                          <i className="fa fa-skype" />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          target="_blank"
                          href="http://www.linkedin.com"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-icons">
                      <li>
                        {" "}
                        <a href="chi-siamo.html" className="text-orange">
                          {" "}
                          Chi siamo{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <i className="fa fa-map-marker pr-10" /> Piazza Caiazzo,
                        3 - 20124 Milano
                      </li>
                      <li>
                        <i className="fa fa-phone pr-10" /> +39 328-198.50.43{" "}
                      </li>
                      {/*
                                    <li><i className="fa fa-fax pr-10"></i> +00 1234567891 </li>
                                    */}
                      <li>
                        <i className="fa fa-envelope-o pr-10" />{" "}
                        <a href="mailto:assistenza@cse.it">
                          assistenza@cse.it{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-bottom hidden-lg hidden-xs" />
            <div className="col-sm-6 partner-section">
              <div className="footer-content">
                <h2>Partners</h2>

                <div className="gallery row">
                  <div className="gallery-item partner-logo">
                    <div className="overlay-container">
                      <img src="images/logo-Dhl.jpg" alt="" />
                      <a href="/corrieri" />
                    </div>
                  </div>
                  <div className="gallery-item partner-logo">
                    <div className="overlay-container">
                      <img src="images/logo-Tnt.jpg" alt="" />
                      <a href="/corrieri" />
                    </div>
                  </div>
                  <div className="gallery-item partner-logo">
                    <div className="overlay-container">
                      <img src="images/logo-Brt.png" alt="" />
                      <a href="/corrieri" />
                    </div>
                  </div>
                  <div className="gallery-item partner-logo">
                    <div className="overlay-container">
                      <img src="images/logo-poste.png" alt="" />
                      <a href="/corrieri" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-bottom hidden-lg hidden-xs" />
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                Copyright © 2016&nbsp; Corriere Spedizioni Express | P.IVA
                05277760962.
                <br /> Powered by{" "}
                <a
                  target="_blank"
                  className="text-orange"
                  href="http://cushypost.com"
                  rel="noopener noreferrer"
                >
                  CushyPost.com
                </a>
                . All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 align-center">
              <nav className="navbar navbar-default" role="navigation">
                <a href="termini-e-condizioni.html">Termini e condizioni </a>
                <span className="margin-right-little" />
                <a href="politica-privacy.html">Politica di Privacy </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
