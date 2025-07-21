import React from 'react';
import instagram1 from "../../assets/images/instagram/1.jpg";
import instagram2 from "../../assets/images/instagram/2.jpg";
import instagram3 from "../../assets/images/instagram/3.jpg";
import instagram4 from "../../assets/images/instagram/4.jpg";
import instagram5 from "../../assets/images/instagram/5.jpg";
import instagram6 from "../../assets/images/instagram/6.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer pt-60">
        <div className="container">
          <div className="footer-widgets">
            <div className="row row-masnory">
              <div className="col-md-3 col-sm-6 pb-50">
                <div className="widget">
                  <h2>About us</h2>
                  <p className="mb-10">We are committed to providing the highest quality healthcare services to our community. Our dedicated team of professionals is here to support you in achieving your health and wellness goals.</p>
                  {/* <ul className="social-icons list-inline">
                    <li className="social-icons__item pt-10"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="social-icons__item pt-10"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="social-icons__item pt-10"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li className="social-icons__item pt-10"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li className="social-icons__item pt-10"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                  </ul> */}
                 <ul className="social-icons list-inline">
  <li className="social-icons__item pt-10">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
  </li>
  <li className="social-icons__item pt-10">
    <a href="#"><i className="fab fa-twitter"></i></a>
  </li>
  <li className="social-icons__item pt-10">
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
  </li>
  <li className="social-icons__item pt-10">
    <a href="#"><i className="fab fa-google"></i></a>
  </li>
  <li className="social-icons__item pt-10">
    <a href="#"><i className="fab fa-pinterest-p"></i></a>
  </li>
</ul>


                </div>
              </div>
              <div className="col-md-3 col-sm-6 pb-50">
                <div className="widget">
                  <h2>Twitter Feed</h2>
                  <div className="twitter-widget">
                    <div className="single_twitter">
                      <p className="mb-15"><a href="#" className="color-theme">@MedicalHealth :</a> We're excited to announce our new wellness program starting next month. Stay tuned for more details!</p>
                    </div>
                    <div className="single_twitter">
                      <p className="mb-15"><a href="#" className="color-theme">@MedicalHealth :</a> Our new state-of-the-art facilities are now open! Come and visit us to experience top-notch healthcare services.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 pb-50">
                <div className="widget instagram-widget">
                  <h2>Instagram widget</h2>
                  <div className="row row-tb-5 row-rl-5">
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram1} alt="Instagram 1" /></a>
                    </div>
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram2} alt="Instagram 2" /></a>
                    </div>
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram3} alt="Instagram 3" /></a>
                    </div>
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram4} alt="Instagram 4" /></a>
                    </div>
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram5} alt="Instagram 5" /></a>
                    </div>
                    <div className="col-xs-4" style={{ width: "80px" }}>
                      <a href="#"><img src={instagram6} alt="Instagram 6" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 pb-50">
                <div className="widget get-in-touch">
                  <h2>Opening Hours</h2>
                  <ul className="opening-hours">
                    <li>Monday – Thursday <span className="float-right">8.00 – 17.00</span></li>
                    <li>Friday <span className="float-right">9.30 – 17.30</span></li>
                    <li>Saturday <span className="float-right">9.30 – 15.00</span></li>
                    <li>Sunday <span className="float-right">Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <h6 className="copyright"> Medical © Copyright 2024. All rights reserved. </h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
