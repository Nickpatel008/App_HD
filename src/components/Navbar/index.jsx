import React, { useEffect, useState } from "react";
import login__Modal_Img from "../../Assets/images/User_Profile-.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const FeedPagePath = useLocation();

  const [isFeedPage, setIsFeedPage] = useState(false);

  useEffect(() => {
    console.log("111", FeedPagePath.pathname);
    if (FeedPagePath.pathname == "/feed") {
      setIsFeedPage(true);
    } else {
      setIsFeedPage(false);
    }
  }, [FeedPagePath]);

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark orange lighten-1">
          <div
            className={
              isFeedPage ? "container-fluid HomeFeed__layout" : "container"
            }
          >
            <a class="navbar-brand" href="#">
              APP
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-555"
              aria-controls="navbarSupportedContent-555"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent-555"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/feed">
                    Feed
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#OurTeam">
                    OurTeam
                  </a>
                </li>
                <li class="nav-item">
                  <button
                    type="button"
                    class="btn btn-orange btn-sm btn-rounded mx-0"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    Log In
                  </button>
                </li>
                {/* </ul>
              <ul class="navbar-nav ml-auto nav-flex-icons"> */}
                <li class="nav-item avatar">
                  <a class="nav-link p-0" href="#">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                      class="rounded-circle z-depth-0"
                      alt="avatar image"
                      height="35"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* MODELS */}

        <div
          class="modal fade"
          id="basicExampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">
                  Sign in
                </h4>
                <button type="button" class="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container my-3 py-3 z-depth-0">
                  <section class="text-center dark-grey-text">
                    <div class="row">
                      <div class="col-lg-6 mb-lg-0 mb-md-4">
                        <div class="view overlay z-depth-0-half">
                          <img
                            // src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg"
                            src={login__Modal_Img}
                            class="img-fluid"
                            alt=""
                          />
                          <a href="#">
                            <div class="mask rgba-white-slight"></div>
                          </a>
                        </div>
                      </div>

                      <div class="col-lg-6 ">
                        <div class="">
                          <section class=" text-center text-lg-left dark-grey-text">
                            <div class="row d-flex justify-content-center">
                              <div class="col-md-12">
                                <form class="text-center" action="#!">
                                  <input
                                    type="email"
                                    id="defaultLoginFormEmail"
                                    class="form-control mb-4"
                                    placeholder="E-mail"
                                  />

                                  <input
                                    type="password"
                                    id="defaultLoginFormPassword"
                                    class="form-control mb-4"
                                    placeholder="Password"
                                  />

                                  <div class="d-flex justify-content-around">
                                    <div>
                                      <div class="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id="defaultLoginFormRemember"
                                        />
                                        <label
                                          class="custom-control-label"
                                          for="defaultLoginFormRemember"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                    </div>
                                    <div>
                                      <a href="">Forgot password?</a>
                                    </div>
                                  </div>

                                  <button
                                    class="btn btn-info btn-block my-4"
                                    type="submit"
                                  >
                                    Sign in
                                  </button>

                                  <p>
                                    Not a member?
                                    <NavLink to="/signUp">
                                      <span className="">
                                        <span> Register </span>
                                      </span>
                                    </NavLink>
                                    <a href=""></a>
                                  </p>

                                  <p>or sign in with:</p>

                                  <a href="#" class="mx-1" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                  </a>
                                  <a href="#" class="mx-1" role="button">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                  <a href="#" class="mx-1" role="button">
                                    <i class="fab fa-linkedin-in"></i>
                                  </a>
                                  <a href="#" class="mx-1" role="button">
                                    <i class="fab fa-github"></i>
                                  </a>
                                </form>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
