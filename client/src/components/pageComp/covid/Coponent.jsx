import React from "react";
import CovidUpdate from "./Covid";
import CommonHeader from "../../common/CommonHeader";

const Coponent = () => {
  return (
    <div>
      <CommonHeader title={"Covid-19 Tracker"} />
      <CovidUpdate />
    </div>
  );
};

export default Coponent;
