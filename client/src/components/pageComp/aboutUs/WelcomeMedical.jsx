import React from "react";
import about2 from "../../../assets/images/about/about-02.jpg";
import about from "../../../assets/images/about/about.jpg";

const WelcomeMedical = () => {
  return (
    <div>
      <section className="section about-us-area about-us-area-1 ptb-60">
        <div className="container">
          <div className="row row-tb-15">
            <div className="col-sm-6">
              <h6 className="color-theme mb-15">Welcome to Medical</h6>
              <h2 className="font-22 mb-15">
                Best Medical & Health Care Needs to Our Patients
              </h2>
              <p className="mb-20 color-mid">
                At Medical, we are dedicated to providing the highest quality
                medical care and health services to our patients. Our
                experienced team of healthcare professionals is committed to
                ensuring that each patient receives personalized and
                comprehensive care tailored to their unique needs.
              </p>
              <p className="mb-20 color-mid">
                Our state-of-the-art facilities are equipped with the latest
                medical technology, allowing us to offer a wide range of
                services, from routine check-ups to specialized treatments. We
                prioritize patient comfort and safety, striving to create a
                welcoming and supportive environment for all who come through
                our doors.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={about2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="section about-us-area about-us-area-2 ptb-60 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-images">
              <div className="about-images">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-content">
              <h6 className="mb-15 color-theme">Welcome to Medical</h6>
              <h2 className="mb-15 font-22 t-uppercase">
                Welcome to Medical Health Care
              </h2>
              <p className="color-mid mb-15">
                At Medical, we are committed to providing exceptional health
                care services to our patients. Our dedicated team of healthcare
                professionals ensures that each patient receives personalized,
                comprehensive care. We focus on creating a comfortable and
                supportive environment to promote healing and well-being.
              </p>
              <p className="color-mid mb-20">
                Our modern facilities are equipped with advanced medical
                technology, enabling us to offer a wide range of services from
                routine check-ups to specialized treatments. We prioritize
                patient safety and comfort, striving to deliver the best
                possible medical care to meet all your health needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMedical;
