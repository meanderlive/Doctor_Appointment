import React from "react";
import Banner from "./Banner";
import MakeAppointment from "./MakeAppointment";
import ChooseUs from "./ChooseUs";
import WeOffer from "./WeOffer";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <Banner />
        <MakeAppointment />
        <ChooseUs />
        <WeOffer />
      </main>
    </div>
  );
};

export default Content;
