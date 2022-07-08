import React, { useEffect, useState } from "react";
import login__Modal_Img from "../../Assets/images/User_Profile-.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Index = () => {
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
        {!isFeedPage ? (
          <>
            <nav class="navbar navbar-expand-lg navbar-dark orange lighten-1">
              <div className="container Home__Navbar__container">
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
          </>
        ) : (
          <>
            {/* Need Navbar */}
            <div className="feedHome__Navbar">
              <nav class="navbar navbar-expand-lg navbar-light grey lighten-3 fixed-top scrolling-navbar p-0">
                <div class="container-fluid feedHome__Navbar__container">
                  <a class="navbar-brand py-0" href="#">
                    <i class="fab fa-3x fa-mdb"></i>
                  </a>

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#basicExampleNav"
                    aria-controls="basicExampleNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="basicExampleNav">
                    <ul class="navbar-nav mr-auto text-uppercase font-weight-normal">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Home
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>

                    <ul class="navbar-nav w-50 justify-content-center">
                      <li class="nav-item w-75 ">
                        <form class="form-inline my-lg-0 py-2 w-100">
                          <input
                            class="form-control w-100 pl-2"
                            type="search"
                            placeholder="Let's Find Your Solution"
                            aria-label="Search"
                          />
                        </form>
                      </li>
                    </ul>

                    <ul class="navbar-nav ml-auto nav-flex-icons align-items-center">
                      <li class="nav-item">
                        <button
                          type="button"
                          class="btn btn-outline-primary waves-effect d-flex align-items-center font-weight-bold"
                        >
                          <i class="fa-solid fa-key mr-2"></i>
                          <span>get Invite Link</span>
                        </button>
                      </li>
                      <li class="nav-item">
                        <button
                          type="button"
                          class="btn btn-secondary d-flex align-items-center waves-effect font-weight-bold"
                          data-toggle="modal"
                          data-target="#modalLoginAvatar"
                        >
                          <i class="fa-solid fa-plus mr-2"></i>
                          <span>Create</span>
                        </button>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link font-weight-normal waves-effect waves-dark">
                          <i class="fa-solid fa-inbox"></i>
                          <span class="badge badge-danger ml-2 myBadges">
                            1
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link font-weight-normal waves-effect waves-dark">
                          <i class="fa-regular fa-bell"></i>
                          <span class="badge badge-danger ml-2 myBadges">
                            9
                          </span>
                        </a>
                      </li>
                      <li class="nav-item avatar dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          id="navbarDropdownMenuLink-55"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                            class="rounded-circle z-depth-0"
                            alt="avatar image"
                            height="35"
                          />
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-lg-right dropdown-dark"
                          aria-labelledby="navbarDropdownMenuLink-55"
                        >
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}

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

        <div
          class="modal fade"
          id="modalLoginAvatar"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog cascading-modal modal-avatar modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.webp"
                  alt="avatar"
                  class="rounded-circle img-responsive"
                />
              </div>
              <div class="modal-body text-center mb-1">
                  <h5 class="mt-1 mb-2">Maria Doe</h5>
                <div className="row px-5">
                  <div className="col-lg-12">
                    <div className="craete__question">
                      <div className="modal__question__title">
                   
                      <div class="md-form">
                    <input type="text" id="form-contact-name" class="form-control" />
                    <label for="form-contact-name" class=""> Write Question Here... </label>
                  </div>
                      </div>
                      <div className="modal__question__contenets">
                      <div class="form-group purple-border">
                <textarea
                  class="form-control p-2"
                  id="exampleFormControlTextarea4"
                  rows="7"
                  placeholder="Share Your Knowledge..."
                ></textarea>
              </div>


                      </div>
                      <div className="modal__code__editor">
                        
                      <div class="form-group purple-border">
                <textarea
                  class="form-control p-2"
                  id="exampleFormControlTextarea4"
                  rows="7"
                  placeholder="Share Your Knowledge..."
                ></textarea>
              </div>

                      </div>
                      <div className="modal__code__editor">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                          </div>
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                          </div>
                        </div>
                    </div>


                    </div>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <button class="btn btn-cyan mt-1 font-weight-bold">
                    POST <i class="fas fa-sign-in ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
