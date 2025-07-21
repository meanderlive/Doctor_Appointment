import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import icon from "../assets/images/icon.png";
import img01 from "../assets/images/appointment/img-01.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserSlice } from '../redux/slice/user';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>

            <section className="section appointment-area">
                <div className="container">
                    <div className="row services">
                        <div className="col-lg-6  pt-15">
                            <img src={img01} alt="" />
                        </div>
                        <div className="col-lg-6 ptb-40 hide-scrollbar">
                            <div className="row mb-30">
                                <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
                                    <h2 className="section-title mb-20 font-22 t-uppercase">
                                        Login Your Account
                                    </h2>
                                    <div className="heart-line">
                                      <img src={icon} alt="Awesome Image" />
                                    </div>
                                </div>
                            </div>

                            <div className="appointment-form">
                                <Formik
                                    initialValues={{
                                        email: "",
                                        password: "",
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={ async (values, { resetForm }) => {
                                        console.log("Form data submitted:", values);
                                       
                                        try {
                                            const result = await dispatch(
                                              loginUserSlice(values)
                                            ).unwrap(); 
                                            console.log('result', result)
                                            if (result.token) {
                                              resetForm();
                                              toast.success("User successfully loged in");
                                              navigate('/');
                                            } else {
                                              toast.error("Registration failed");
                                            }
                                          } catch (error) {
                                            console.error("Error during user registration:", error);
                                            toast.error("Registration failed");
                                          }
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="invalid-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                                />
                                                {errors.password && touched.password && (
                                                    <div className="invalid-feedback">{errors.password}</div>
                                                )}
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        </Form>
                                    )}
                                </Formik>
                                <div className="form-group col-12">
                                    <h2 className="text-center mb-20 font-16 t-uppercase">
                                        or
                                    </h2>
                                </div>
                                <div className="form-group col-12">
                                    <Link to='/sign-up'>
                                        <button className="btn-2 btn-light btn-block">Sign Up</button>
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

export default Login;
