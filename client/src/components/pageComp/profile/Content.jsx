import React, { useState } from "react";
import CommonHeader from "../../common/CommonHeader";
import icon from "../../../assets/images/icon.png";
import { Local_User } from "../../layout/LocalUser";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils/baseUrl";

const Content = () => {
  const [editing, setEditing] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(Local_User?.photo);
  const [name, setName] = useState(Local_User?.name);
  const [email, setEmail] = useState(Local_User?.email);
  const [dob, setDob] = useState(Local_User?.dob);
  const [loading, setLoading] = useState(false);

  const handlePhotoClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "photoUrl") {
      setPhotoUrl(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "dob") {
      setDob(value);
    }
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}users/${Local_User?._id}`, {
        name,
        email,
        dob,
        photo: photoUrl,
      });

      console.log("res", response);
      if (response.status === 200) {
        localStorage.setItem("t_A1b2C3d", JSON.stringify(response.data.data));
        toast.success("Profile updated successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommonHeader title={"Profile"} />
      <section className="section appointment-area pt-60">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 mx-auto text-center mb-40">
              <div className="heart-line">
                <img src={icon} alt="Heart Icon" />
              </div>
            </div>
          </div>
          <div className="row services">
            <div className="col-lg-12 text-center">
              <div
                className="position-relative d-inline-block"
                onClick={handlePhotoClick}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={photoUrl}
                  className="d-block mx-auto rounded-circle"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  alt={name}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <FaPencilAlt color="white" />
                </div>
              </div>
              {editing && (
                <input
                  type="text"
                  name="photoUrl"
                  value={photoUrl}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className="form-control mt-3"
                  placeholder="Enter new photo URL"
                  autoFocus
                />
              )}
              <div className="col-5 mx-auto my-5">
                <div className="row my-2">
                  <div className="col-6 text-left">
                    <h1>Name:</h1>
                  </div>
                  <div className="col-6 text-left">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="form-control"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-6 text-left">
                    <h1>Email:</h1>
                  </div>
                  <div className="col-6 text-left">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="form-control"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-6 text-left">
                    <h1>DOB:</h1>
                  </div>
                  <div className="col-6 text-left">
                    <input
                      type="date"
                      name="dob"
                      value={dob}
                      onChange={handleInputChange}
                      className="form-control"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleUpdateProfile}
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update Profile"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
