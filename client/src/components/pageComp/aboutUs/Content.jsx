import React from "react";
import CommonHeader from "../../common/CommonHeader";
import WelcomeMedical from "./WelcomeMedical";
import OurSpecialist from "./OurSpecialist";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <CommonHeader title="About Us"/>
        <WelcomeMedical />
        <OurSpecialist />
      </main>
    </div>
  );
};

export default Content;
