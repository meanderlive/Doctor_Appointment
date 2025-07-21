import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllMedicineSlice } from "../../../redux/slice/medicineSchedule";
import { removeMedicineApi } from "../../../redux/api/medicineSchedule";

import icon from "../../../assets/images/icon.png";
import { Local_User } from "../../layout/LocalUser";

const Schedules = () => {
  const dispatch = useDispatch();
  const { medicines, loading } = useSelector((state) => state?.medicineSchedule);

  useEffect(() => {
    dispatch(getAllMedicineSlice());
  }, [dispatch]);

  const handleCancel = async (id) => {
    try {
      const res = await removeMedicineApi(id);
      console.log('res', res)
      if (res.status === 200) {
        toast.success("Medicine schedule canceled successfully!");
        dispatch(getAllMedicineSlice());
      }
    } catch (error) {
      toast.error("Error canceling medicine schedule!");
    }
  };


  const MyMedicine = medicines?.filter((m) => m?.user?._id === Local_User?._id)

  console.log('medicines', medicines)
  return (
    <div>
      {loading ? (
        <div>
          <h6 className="text-center py-5">Loading...</h6>
        </div>
      ) : (
        <section className="section team-area pt-80 pb-40 bg-gray">
          <div className="container">
            <div className="row mb-30">
              <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
                <h2 className="section-title mb-20 font-22 t-uppercase">
                  Your Medicine Schedules
                </h2>
                <div className="heart-line">
                  <img src={icon} alt="Heart Icon" />
                </div>
              </div>
            </div>
            <div className="team-members row">
              {MyMedicine && MyMedicine.map((item) => (
                <div className="col-md-3 col-sm-6 mb-4" key={item._id}>
                  <div className="single-member card">
                    <div className="single-member-content card-body">
                      <h5 className="mb-2 font-15 t-uppercase">
                        {item.medicineName}
                      </h5>
                      <h6 className="color-mid font-12 t-uppercase mb-2">
                        <small>Doctor: </small>
                        {item.doctor.name}
                      </h6>
                      <p>Times Per Day: {item.timesPerDay}</p>
                      <p>Amount Per Dose: {item.amountPerDose}</p>
                      <p>
                        Start Date:{" "}
                        {moment(item.startDate).format("MMMM Do YYYY")}
                      </p>
                      <p>
                        End Date: {moment(item.endDate).format("MMMM Do YYYY")}
                      </p>
                      <p>Schedule Times: {item.scheduleTimes.join(", ")}</p>
                      <p>Notes: {item.notes}</p>
                      <button
                        className="btn btn-danger btn-sm mt-3"
                        onClick={() => handleCancel(item._id)}
                      >
                        <FontAwesomeIcon icon={faTimesCircle} /> Cancel Schedule
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Schedules;
