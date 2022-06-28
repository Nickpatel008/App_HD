import React from "react";
import { NavLink } from "react-router-dom";

import auth_IMG from "../../Assets/images/signupSVG.gif";
import "../../Assets/CSS/style.css";

const Index = () => {
  return (
    <>
      <div className="main__signup__dev">
        <div className="container-fluid  signUp__wrapper">
          <div className="row align-items-center signup__row">
            <div className="col-lg-6 left__side">
              <img src={auth_IMG} className="animate__animated fadeIn img-fluid" />
            </div>
            <div className="col-lg-6 right__side">
              <div className="signup__form__header animate__animated fadeInRight py-5">
                <div className="inner-row px-5">
                  <div className="form__contenet">
                    <span className="font-weight-bold text-uppercase">
                      start for free
                    </span>
                    <h1>
                      Create New Account<span>.</span>
                    </h1>
                    <p>
                      already have an account? <span> Log In </span>
                    </p>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex">
                      <div className="w-100 ">
                        <div class="md-form">
                          <input type="text" id="fname" class="form-control" />
                          <label for="fname"> First Name </label>
                        </div>
                      </div>
                      <div className="w-100 ml-3">
                        <div class="md-form">
                          <input type="text" id="lname" class="form-control" />
                          <label for="lname"> Last Name </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div class="md-form">
                      <i class="fas fa-envelope prefix emailIcon text-warning"></i>
                      <input
                        type="email"
                        id="inputValidationEx"
                        class="form-control validate"
                      />
                      <label
                        for="inputValidationEx"
                        data-error="wrong"
                        data-success="right"
                      >
                        Type your email
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div class="md-form">
                      {/* <i class="fas fa-lock prefix"></i> */}
                      <i class="fa-solid fa-key prefix keyIcon"></i>
                      <input
                        type="password"
                        id="inputValidationEx2"
                        class="form-control validate"
                      />
                      <label
                        for="inputValidationEx2"
                        data-error="wrong"
                        data-success="right"
                      >
                        <span>password</span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="button"
                      class="btn btn-outline-secondary waves-effect font-weight-bold"
                    >
                      Sign Up
                    </button>
                    <div className="pt-5">
                      <NavLink to="/">
                        <span className="goBack__Link">
                          {" "}
                          <i class="fa-solid fa-left-long"></i> Go{" "}
                          <span> Back </span>{" "}
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
