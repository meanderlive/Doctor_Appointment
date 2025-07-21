import React from "react";
import CommonHeader from "../../common/CommonHeader";
import MakeAppointment from "../home/MakeAppointment";
import Appointments from "./Appointments";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <CommonHeader title={"Book Appointment"} />
        <MakeAppointment />
        <Appointments />
      </main>
    </div>
  );
};

export default Content;
