import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="banner">
      <div id="banner-section">
        <div className="layer-over-bg">
          <div className="right-section">
            <div className="r1-slogan">
              <section className="cd-intro">
                <div className="cd-headline letters scale">
                  <span>
                    Spedisci <br id="br1" />
                  </span>
                  <span className="cd-words-wrapper">
                    <w>comodamente</w>
                  </span>
                  <span>
                    <br />
                    via internet&nbsp;{" "}
                  </span>
                </div>
              </section>
            </div>

            <div className="r2-carousel">
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={false}
                autoPlay={true}
                interval={2500}
                transitionTime={650}
              >
                {/* slide 1 */}
                <div className="slide-text">
                  {/* barrette 
                  <h3 className="align-center">
                    <span className="carousel-dot active" />
                    <span className="carousel-dot" />
                    <span className="carousel-dot" />
                  </h3>
                  */}
                  <p>
                    <i className="material-icons md-big">create</i>
                    <i className="material-icons md-big">laptop</i>
                    <br />
                    Calcola il preventivo
                    <br /> in 1 minuto
                  </p>
                </div>
                <div className="slide-text">
                  {/* barrette 
                  <h3 className="align-center">
                    <span className="carousel-dot" />
                    <span className="carousel-dot active" />
                    <span className="carousel-dot" />
                  </h3>
                  */}
                  <p>
                    <i className="material-icons md-big">local_offer</i>
                    <i className="material-icons md-big">home</i>
                    <br />
                    Ritiriamo il pacco
                    <br /> a casa tua
                  </p>
                </div>

                <div className="slide-text">
                  {/* barrette 
                  <h3 className="align-center">
                    <span className="carousel-dot" />
                    <span className="carousel-dot" />
                    <span className="carousel-dot active" />
                  </h3>
                */}
                  <p>
                    <i className="material-icons md-big">local_shipping</i>
                    <i className="material-icons md-big">beenhere</i>
                    <br />
                    Consegniamo il <br /> pacco dove vuoi
                  </p>
                </div>
              </Carousel>
            </div>

            <div className="r3-div-container-big-button">
              <div className="r3-div-big-button">
                <NavLink to="/spedisci">
                  <span className="r3-big-button">
                    SPEDISCI{" "}
                    <FontAwesomeIcon
                      icon="chevron-right"
                      size="lg"
                      className="pl-10"
                    />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
