import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/images/slider/01.jpg'; 

const CommonHeader = ({ title }) => {
  return (
    <div>
      <section
        className="section breadcrumb-area bg-ct pt-100 pb-80"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="container t-center">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
              <div className="section-top-title">
                <h1 className="t-uppercase font-45">{title}</h1>
                <ol className="breadcrumb justify-content-center">
                  <li>
                    <Link to='/'>
                      <i className="fa fa-home mr-10"></i>Home
                    </Link>
                  </li>
                  <li className="active">{title}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommonHeader;
