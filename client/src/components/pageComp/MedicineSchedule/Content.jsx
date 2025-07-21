import React from "react";
import CommonHeader from "../../common/CommonHeader";
import AddMedicine from "./AddMedicine";
import Schedules from "./mschedules";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <CommonHeader title={"Schedule Medicine"} />
        <AddMedicine />
        <Schedules />
      </main>
    </div>
  );
};

export default Content;
