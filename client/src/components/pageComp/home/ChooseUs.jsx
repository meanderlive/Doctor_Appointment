import React from "react";
import awesomeImg from "../../../assets/images/icon.png";

const ChooseUs = () => {
  return (
    <div>
      <section className="section features-area ptb-60 bg-gray">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
              <h6 className="section-subtitle mb-10 t-uppercase color-mid">
                OUR FEATURES
              </h6>
              <h2 className="section-title mb-20 font-22 t-uppercase">
                WHY CHOOSE US
              </h2>
              <div className="heart-line">
                <img src={awesomeImg} alt="Awesome Image" />
              </div>
            </div>
          </div>
          <div className="row row-tb-15 clearfix">
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-internal-medicine"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">
                    Comprehensive Internal Medicine Care
                  </h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our internal medicine department provides comprehensive care
                    for a wide range of conditions, from routine check-ups to
                    complex medical issues. Our experienced physicians focus on
                    preventive care, early diagnosis, and effective treatment,
                    ensuring your overall health and well-being.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-respiratory"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">Expert Respiratory Care</h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our respiratory department offers expert care for a wide
                    range of respiratory conditions, including asthma, COPD, and
                    lung infections. Our team of specialists is dedicated to
                    providing personalized treatment plans tailored to your
                    specific needs, ensuring optimal lung health and improved
                    quality of life.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-neurology"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">Comprehensive Neurological Care</h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our neurology department provides comprehensive care for a
                    wide range of neurological conditions, including stroke,
                    epilepsy, Parkinson's disease, and Alzheimer's disease. With
                    state-of-the-art diagnostic tools and advanced treatment
                    options, our team of neurologists is committed to delivering
                    personalized care to help you manage your condition and
                    improve your quality of life.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-genetics"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">Genetic Counseling and Testing</h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our genetics service offers comprehensive genetic counseling
                    and testing for individuals and families at risk of
                    inherited conditions. We provide personalized guidance and
                    support to help you understand your genetic risks and make
                    informed decisions about your health. With state-of-the-art
                    testing technology and compassionate care, we empower you to
                    take control of your genetic health.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-oncology"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">Comprehensive Oncology Care</h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our oncology care services offer comprehensive treatment and
                    support for individuals facing cancer diagnoses. From
                    diagnosis to survivorship, our multidisciplinary team
                    provides personalized care plans tailored to each patient's
                    unique needs. With state-of-the-art facilities and
                    compassionate professionals, we are committed to delivering
                    the highest quality oncology care to our patients and their
                    families.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column">
              <article className="feature-single">
                <div className="feature-icon">
                  <i className="icon-i-dental"></i>
                </div>
                <div className="feature-content">
                  <h4 className="mb-10">Comprehensive Dental Care</h4>
                  <p className="color-mid" style={{
                    maxHeight:"140px",
                    overflow:'hidden',
                    textOverflow:"ellipsis"
                  }}>
                    Our dental care services are dedicated to promoting oral
                    health and providing comprehensive treatment for all your
                    dental needs. From routine cleanings and exams to advanced
                    restorative procedures, our experienced team of dentists is
                    committed to delivering high-quality care in a comfortable
                    and welcoming environment. Whether you need a simple
                    check-up or more complex treatment, we're here to help you
                    achieve and maintain a healthy smile.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
