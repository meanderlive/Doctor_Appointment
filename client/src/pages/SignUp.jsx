import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import icon from "../assets/images/icon.png";
import img02 from "../assets/images/appointment/img-01.png";
import { useDispatch, useSelector } from "react-redux";
import { createUserSlice } from "../redux/slice/user";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  dob: Yup.date().required("Date of Birth is required"),
  photo: Yup.string().required("Profile picture is required"),
});


const SignUp = () => {
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    
    const { loading } = useSelector((state) => state?.user);
  return (
    <div>
      <section className="section signup-area vh-100 ">
        <div className="container">
          <div className="row services">
            <div className="col-lg-6 pt-15">
              <img src={img02} alt="" />
            </div>
            <div className="col-lg-6 ptb-40 hide-scrollbar">
              <div className="row mb-30">
                <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
                  <h2 className="section-title mb-20 font-22 t-uppercase">
                    Create Your Account
                  </h2>
                  <div className="heart-line">
                    <img src={icon} alt="Awesome Image" />
                  </div>
                </div>
              </div>
              <div className="signup-form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    dob: "",
                    photo:
                      "https://static.vecteezy.com/system/resources/thumbnails/039/845/041/small_2x/flat-illustration-in-grayscale-avatar-user-profile-person-icon-anonymous-profile-profile-picture-for-social-media-profiles-icons-screensaver-free-vector.jpg",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { resetForm }) => {
                    console.log("Form data submitted:", values);

                    try {
                      const result = await dispatch(
                        createUserSlice(values)
                      ).unwrap(); // Use unwrap() to get the payload or error
                      if (result.success) {
                        resetForm();
                        toast.success("User successfully registered");
                        naviagte('/');
                      } else {
                        toast.error("Registration failed");
                      }
                    } catch (error) {
                      console.error("Error during user registration:", error);
                      toast.error("Registration failed");
                    }
                  }}
                >
                  {({ errors, touched, setFieldValue }) => (
                    <Form className="row">
                      <div className="form-group col-md-12">
                        <label htmlFor="photo">Profile Picture Url</label>
                        <Field
                          type="text"
                          name="photo"
                          id="photo"
                          className={`form-control ${
                            errors.photo && touched.photo ? "is-invalid" : ""
                          }`}
                        />
                        {errors.name && touched.name && (
                          <div className="invalid-feedback">{errors.photo}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className={`form-control ${
                            errors.name && touched.name ? "is-invalid" : ""
                          }`}
                        />
                        {errors.name && touched.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="dob">Date of Birth</label>
                        <Field
                          type="date"
                          name="dob"
                          id="dob"
                          className={`form-control ${
                            errors.dob && touched.dob ? "is-invalid" : ""
                          }`}
                        />
                        {errors.dob && touched.dob && (
                          <div className="invalid-feedback">{errors.dob}</div>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          className={`form-control ${
                            errors.password && touched.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-12">
                        {loading ? (
                          <button className="btn btn-primary btn-block">
                            Signing up...
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign Up
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="form-group col-12">
                  <h2 className="text-center mb-20 font-16 t-uppercase">or</h2>
                </div>
                <div className="form-group col-12">
                  <Link to="/login">
                    <button className="btn-2 btn-1 btn-primary btn-block">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
