import React, { useEffect, useState } from 'react';
import specialist1 from '../../../assets/images/doctors/01.jpg';
import specialist2 from '../../../assets/images/doctors/02.jpg';
import specialist3 from '../../../assets/images/doctors/03.jpg';
import icon from '../../../assets/images/icon.png';
import axios from 'axios';
import { BASE_URL } from '../../../utils/baseUrl';

const OurSpecialist = () => {
  const [doctors, setDoctors] = useState([])

  const handleGetSpecalist = async () => {
    try {
      const res = await axios.get(`${BASE_URL}doctor/getAll/`)
      console.log(res.data)
      setDoctors(res.data)
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  useEffect(() => {
    handleGetSpecalist();
  },[])
  return (
    <div>
      <section className="section team-area pt-80 pb-40 bg-gray">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
              <h6 className="section-subtitle mb-10 t-uppercase color-mid">How We Are</h6>
              <h2 className="section-title mb-20 font-22 t-uppercase">Meet Our Specialists</h2>
              <div className="heart-line">
                <img src={icon} alt="Heart Icon" />
              </div>
            </div>
          </div>
          <div className="team-members row">
            {doctors.map((doctor) => (
              <div className="col-md-3 col-sm-6" key={doctor._id}>
                <div className="single-member">
                  <div className="single-member-header">
                    <img src={doctor.photo} alt={doctor.name} style={{
                      width:'100%', height:'200px',objectFit:'cover'
                    }} />
                  </div>
                  <div className="single-member-content">
                    <h5 className="mb-10 font-15 t-uppercase">
                      <a href="doctor-details-2.html">{doctor.name}</a>
                    </h5>
                    <h6 className="color-mid font-12 t-uppercase mb-5">{doctor.specialty} Specialist</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurSpecialist;
