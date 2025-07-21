import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/gallery/01.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Local_User } from "../layout/LocalUser";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("t_A1b2C3d");
  };
  return (
    <div>
      <div className="topbar bg-theme">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="topbar-info list-inline is-hidden-xs t-xs-center t-md-left">
                <li className="prl-10">
                  <i className="fa fa-map-marker mr-10 font-16"></i>701 Shadow
                  Ln, Las Vegas, NV 89106
                </li>
                <li className="prl-10">
                  <i className="fa fa-phone mr-10 font-16"></i>1 (800) 740-0258
                </li>
                <li className="prl-10">
                  <i className="fa fa-envelope mr-10 font-16"></i>
                  medicalservice@gmail.com
                </li>
              </ul>
            </div>


            {/* <div className="col-md-4">
              <ul className="social-icons list-inline font-16 t-xs-center t-md-right is-hidden-sm">
                <li className="social-icons__item">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li className="social- icons__item">
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li className="social-icons__item">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li className="social-icons__item">
                  <Link to="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li className="social-icons__item">
                  <Link to="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                </li>
              </ul>
            </div>

 */}


<div className="col-md-4">
  <ul className="social-icons list-inline font-16 text-center text-md-end">
    <li className="social-icons__item list-inline-item">
      <a href="#" className="text-decoration-none">
        <i className="fab fa-facebook"></i>
      </a>
    </li>
    <li className="social-icons__item list-inline-item">
      <a href="#" className="text-decoration-none">
        <i className="fab fa-twitter"></i>
      </a>
    </li>
    <li className="social-icons__item list-inline-item">
      <a href="#" className="text-decoration-none">
        <i className="fab fa-linkedin"></i>
      </a>
    </li>
    <li className="social-icons__item list-inline-item">
      <a href="#" className="text-decoration-none">
        <i className="fab fa-google-plus-g"></i>
      </a>
    </li>
    <li className="social-icons__item list-inline-item">
      <a href="#" className="text-decoration-none">
        <i className="fab fa-pinterest"></i>
      </a>
    </li>
  </ul>
</div>






          </div>
        </div>
      </div>

      <header id="mainHeader" className="main-header">
        <div className="header-menu">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo">
                  <Link to="/">
                    {/* <img src={logo} alt="Logo" /> */}
                    <h1 style={{ color: "#2FA5EB", fontWeight: "900" }}>
                      MEDICAL
                    </h1>
                  </Link>
                </div>
                {/* <!-- Phone Menu button --> */}
                <button id="menu" className="menu is-hidden-md-up"></button>
              </div>
              <div className="col-md-9">
                <nav className="navigation">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/schedule-medicine">Schedule Medicine</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link to="/book-appointment">Book Appointment</Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="text-center">
                          <img
                            src={Local_User?.photo}
                            className="rounded-circle"
                            alt="..."
                            style={{
                              width: "40px",
                              height: "40px",
                              marginTop: "-10px",
                            }}
                          />
                        </div>
                      </Link>{" "}
                      <i className="fa fa-plus is-hidden-md-up"></i>
                      <ul className="sub-nav">
                        <li>
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link to="/covid19">Covid-19 Tracker</Link>
                        </li>
                        <li>
                          <Link onClick={handleLogout} to="/login">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
