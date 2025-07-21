import React from 'react';
import awesomeImage from "../../../assets/images/icon.png";
import serv01 from "../../../assets/images/services/01.jpg";
import serv02 from "../../../assets/images/services/02.jpg";
import serv03 from "../../../assets/images/services/03.jpg";
import serv04 from "../../../assets/images/services/04.jpg";
import serv05 from "../../../assets/images/services/05.jpg";
import serv06 from "../../../assets/images/services/06.jpg";

const WeOffer = () => {
  return (
    <div>
      <section className="section services-area ptb-60">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
              <h6 className="section-subtitle mb-10 t-uppercase color-mid">OUR OUTSTANDING SERVICES</h6>
              <h2 className="section-title mb-20 font-22 t-uppercase">WHAT WE OFFER</h2>
              <div className="heart-line">
                <img src={awesomeImage} alt="Awesome Image" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv01} alt="Dental Implants" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Dental Implants</h5>
                  <p className="color-mid mb-15">Get high-quality dental implants to restore your smile and improve your oral health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv02} alt="Whitening" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Whitening</h5>
                  <p className="color-mid mb-15">Achieve a brighter, whiter smile with our professional teeth whitening services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv03} alt="Vaccinations" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Vaccinations</h5>
                  <p className="color-mid mb-15">Stay protected with our comprehensive vaccination services for all ages.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv04} alt="Laboratory" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Laboratory</h5>
                  <p className="color-mid mb-15">Benefit from our state-of-the-art laboratory services for accurate diagnostics.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv05} alt="Medical Dressage" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Medical Dressage</h5>
                  <p className="color-mid mb-15">Receive expert care and medical dressings for wounds and injuries.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-single">
                <div className="service-thumb">
                  <img src={serv06} alt="Emergency Contraception" />
                </div>
                <div className="service-content">
                  <h5 className="mb-10 t-uppercase color-theme">Emergency Contraception</h5>
                  <p className="color-mid mb-15">Access timely and confidential emergency contraception services when needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeOffer;
