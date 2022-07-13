import React from "react";
import heart_icon from "../../Assets/images/icons/like_icon.png";
import comment_icon from "../../Assets/images/icons/comment_icon.png";
import share_icon from "../../Assets/images/icons/share_icon.png";
import views_icon from "../../Assets/images/icons/views_icon.png";
import votes_icon from "../../Assets/images/icons/vote_icon.png";

const Index = () => {
  return (
    <>
      <section>
        <div className="myProfile__wrapper">
          <div className="profile__label py-5">
            <div className="row profileLabel">
              <div className="col-lg-12">
                <div className="">
                  <h1 className="font-weight-bold"> Settings </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="left__side__manu py-5 leftNav">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-Questions-tab"
                        data-toggle="pill"
                        href="#pills-Questions"
                        role="tab"
                        aria-controls="pills-Questions"
                        aria-selected="false"
                      >
                        My Questions
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-Articles-tab"
                        data-toggle="pill"
                        href="#pills-Articles"
                        role="tab"
                        aria-controls="pills-Articles"
                        aria-selected="false"
                      >
                        My Articles
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="p-5">
                  <div class="tab-content pt-2 pl-1" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="Profile__Sub__wrapper">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="profile__banner">
                              <div className="bannerFrame px-3 py-1">
                                <button
                                  type="button"
                                  class="btn btn-outline-light waves-effect p-3"
                                >
                                  <i
                                    class="fa-solid fa-camera text-light fa-2x"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </div>
                            </div>
                            <div className="profile__userDetails d-flex px-3 justify-content-between">
                              <div className="user__avatar d-flex">
                                <div className="">
                                  <img
                                    // src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                                    src="https://source.unsplash.com/400x400"
                                    class="rounded-circle z-depth-3 profilePic"
                                    alt="avatar image"
                                    height="150"
                                  />
                                </div>
                                <div className="user__avtar__content ml-4">
                                  <div className="">
                                    <h1 className="font-weight-bold">
                                      Profile
                                    </h1>
                                  </div>
                                  <div className="">
                                    <span className="font-weight-normal">
                                      Update your photo and personal details.
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="user__avtar__actions">
                                <button className="btn btn-outline-danger font-weight-bold view overlay  waves-effect">
                                  Cancel
                                </button>
                                <button className="btn btn-dark font-weight-bold view overlay waves-light waves-effect">
                                  Save
                                </button>
                                <div class="mask waves-effect waves-light rgba-white-slight"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="user__details__form mt-5">
                          <div className="row py-4">
                            <div className="col-lg-4">
                              <h3 className="font-weight-bold"> Username </h3>
                            </div>
                            <div className="col-lg-8">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control w-75"
                                  id="formGroupExampleInput2"
                                  placeholder="Another input"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row py-4">
                            <div className="col-lg-4">
                              <h3 className="font-weight-bold"> Website </h3>
                            </div>
                            <div className="col-lg-8">
                              <div class="form-group">
                                {/* <label for="formGroupExampleInput2">Another label</label> */}
                                <input
                                  type="text"
                                  class="form-control w-75"
                                  id="formGroupExampleInput2"
                                  placeholder="Another input"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row py-4">
                            <div className="col-lg-4">
                              <h3 className="font-weight-bold"> Your Photo </h3>
                              <span className="font-weight-bolder">
                                This will be displayed on your profile.
                              </span>
                            </div>
                            <div className="col-lg-8">
                              <div className="container d-flex justify-content-between">
                                <div className="">
                                  <img
                                    // src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                                    src="https://source.unsplash.com/400x400"
                                    class="rounded-circle z-depth-0"
                                    alt="avatar image"
                                    height="100"
                                  />
                                </div>
                                <div className="">
                                  <ul class="navbar-nav flex-lg-row">
                                    <li class="nav-item mx-3">
                                      <a
                                        class="nav-link text-dark font-weight-bold"
                                        href="#"
                                      >
                                        Delete
                                      </a>
                                    </li>

                                    <li class="nav-item mx-3">
                                      <a
                                        class="nav-link text-dark font-weight-bold"
                                        href="#"
                                      >
                                        Update
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row py-4">
                            <div className="col-lg-4">
                              <h3 className="font-weight-bold"> Your Bio </h3>
                              <span className="font-weight-bolder">
                                Write a short introduction.
                              </span>
                            </div>
                            <div className="col-lg-8">
                              <div className="">
                                <div class="md-form">
                                  <textarea
                                    id="form7"
                                    class="md-textarea form-control"
                                    rows="3"
                                  ></textarea>
                                  <label for="form7">Add a short Bio...</label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row py-4">
                            <div className="col-lg-4">
                              <h3 className="font-weight-bold"> Job Title </h3>
                            </div>
                            <div className="col-lg-8">
                              <div className="">
                                <div class="md-form">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      class="form-control w-75"
                                      id="formGroupExampleInput2"
                                      placeholder="Another input"
                                    />
                                  </div>
                                </div>
                                <div class="custom-control custom-checkbox justify-content-center">
                                  <input
                                    type="checkbox"
                                    class="control-input"
                                    id="defaultLoginFormRemember"
                                  />
                                  <label
                                    class="custom-control-label ml-3 m-0"
                                    for="defaultLoginFormRemember"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row py-4">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                              <div className="mt-5">
                                <button
                                  type="button"
                                  class="btn btn-outline-success btn-block btn-lg font-weight-bold waves-effect py-3"
                                >
                                  Success
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-4"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      Ad pariatur nostrud pariatur exercitation ipsum ipsum
                      culpa mollit commodo mollit ex. Aute sunt incididunt amet
                      commodo est sint nisi deserunt pariatur do. Aliquip ex
                      eiusmod voluptate exercitation cillum id incididunt elit
                      sunt. Qui minim sit magna Lorem id et dolore velit Lorem
                      amet exercitation duis deserunt. Anim id labore elit
                      adipisicing ut in id occaecat pariatur ut ullamco ea
                      tempor duis.
                    </div>

                    <div
                      class="tab-pane fade"
                      id="pills-Questions"
                      role="tabpanel"
                      aria-labelledby="pills-Questions-tab"
                    >
                      <section>
                        <div className="myQuestions__wrapper">
                          <div className="">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="">
                                  <div class="jumbotron card card-image justify-content-center Question__jumbotron">
                                    <div class="text-white text-center py-5 px-4">
                                      <div>
                                        <h2 class="card-title h1-responsive pt-3 font-bold">
                                          <strong>MY QESTIONS</strong>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="container bg-light my-3">
                                <div
                                  className="row align-content-center align-content-center waves-effect question__list__item"
                                  data-toggle="collapse"
                                  href="#collapseExample1"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <div className="col-lg-2">
                                    <div className="d-flex h-100 justify-content-center align-items-center ">
                                      <img
                                        // src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                                        src="https://source.unsplash.com/400x400"
                                        class="rounded-circle z-depth-1"
                                        alt="avatar image"
                                        height="100"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-10 p-5">
                                    <div className="">
                                      <div className="">
                                        <h2 className="font-weight-normal">
                                          Enumerate the differences between Java
                                          and JavaScript?
                                        </h2>
                                      </div>
                                      <div className="">
                                        <p>question description</p>
                                      </div>
                                      <div className="">
                                        <div className="d-flex">
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={heart_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                4.9M
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={comment_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                2k
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={share_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                889
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="collapse" id="collapseExample1">
                                      <div class="mt-3">
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea
                                        proident.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container bg-light my-3">
                                <div
                                  className="row align-content-center align-content-center waves-effect question__list__item"
                                  data-toggle="collapse"
                                  href="#collapseExample2"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <div className="col-lg-2">
                                    <div className="d-flex h-100 justify-content-center align-items-center ">
                                      <img
                                        // src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                                        src="https://source.unsplash.com/400x400"
                                        class="rounded-circle z-depth-1"
                                        alt="avatar image"
                                        height="100"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-10 p-5">
                                    <div className="">
                                      <div className="">
                                        <h2 className="font-weight-normal">
                                          Enumerate the differences between Java
                                          and JavaScript?
                                        </h2>
                                      </div>
                                      <div className="">
                                        <p>question description</p>
                                      </div>
                                      <div className="">
                                        <div className="d-flex">
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={heart_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                4.9M
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={comment_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                2k
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={share_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                889
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="collapse" id="collapseExample2">
                                      <div class="mt-3">
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea
                                        proident.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container bg-light my-3">
                                <div
                                  className="row align-content-center align-content-center waves-effect question__list__item"
                                  data-toggle="collapse"
                                  href="#collapseExample3"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <div className="col-lg-2">
                                    <div className="d-flex h-100 justify-content-center align-items-center ">
                                      <img
                                        // src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                                        src="https://source.unsplash.com/400x400"
                                        class="rounded-circle z-depth-1"
                                        alt="avatar image"
                                        height="100"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-10 p-5">
                                    <div className="">
                                      <div className="">
                                        <h2 className="font-weight-normal">
                                          Enumerate the differences between Java
                                          and JavaScript?
                                        </h2>
                                      </div>
                                      <div className="">
                                        <p>question description</p>
                                      </div>
                                      <div className="">
                                        <div className="d-flex">
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={heart_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                4.9M
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={comment_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                2k
                                              </span>
                                            </div>
                                          </div>
                                          <div className="questions__actions__icons mx-3">
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={share_icon}
                                                className="mr-2"
                                                height="25"
                                              />
                                              <span className="font-weight-bold">
                                                889
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="collapse" id="collapseExample3">
                                      <div class="mt-3">
                                        Anim pariatur cliche reprehenderit, enim
                                        eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea
                                        proident.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-Articles"
                      role="tabpanel"
                      aria-labelledby="pills-Articles-tab"
                    >
                      <section>
                        <div className="myArticles__wrapper">
                          <div className="">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="z-depth-3">
                                  <div class="jumbotron card card-image justify-content-center Article__jumbotron">
                                    <div class="banner__cover"></div>
                                    <div class="text-white text-center py-5 px-4">
                                      <div>
                                        <h2 class="card-title h1-responsive pt-3 font-bold">
                                          <strong> MY ARTICLES </strong>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="container my-3">
                                <div className="">
                                  <div className="row">
                                    <div class="container mt-5">
                                      <section class="">
                                        <h3 class="text-center font-weight-bold mb-5">
                                          Latest Articles
                                        </h3>

                                        <div class="row">
                                          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
                                            <div class="card hoverable">
                                              <img
                                                class="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                                                alt="Card image cap"
                                              />

                                              <div class="card-body ">
                                                <a href="#!" class="black-text">
                                                  We relocated to a new garage
                                                </a>
                                                <p class="card-title text-muted font-small mt-3 mb-2">
                                                  Some quick example text to
                                                  build on the card title and
                                                  make up the bulk of the card's
                                                  content. Some quick example
                                                  text to build on the card
                                                  title.
                                                </p>

                                                <a class="text-primary">
                                                  {" "}
                                                  Read more{" "}
                                                  <i class="fa fa-angle-right ml-2"></i>{" "}
                                                </a>
                                              </div>

                                              <div className="card-footer text-center d-flex align-items-center justify-content-around">
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={heart_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={views_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={votes_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
                                            <div class="card hoverable">
                                              <img
                                                class="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                                                alt="Card image cap"
                                              />

                                              <div class="card-body">
                                                <a href="#!" class="black-text">
                                                  Top 5 content marketing
                                                  strategies
                                                </a>
                                                <p class="card-title text-muted font-small mt-3 mb-2">
                                                  Some quick example text to
                                                  build on the card title and
                                                  make up the bulk of the card's
                                                  content. Some quick example
                                                  text to build on the card
                                                  title.
                                                </p>

                                                <a class="text-primary">
                                                  {" "}
                                                  Read more{" "}
                                                  <i class="fa fa-angle-right ml-2"></i>{" "}
                                                </a>
                                              </div>

                                              <div className="card-footer text-center d-flex align-items-center justify-content-around">
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={heart_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={views_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={votes_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                              </div>

                                            </div>
                                          </div>

                                          <div class="col-lg-4 col-md-6 mb-0">
                                            <div class="card hoverable">
                                              <img
                                                class="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                                                alt="Card image cap"
                                              />

                                              <div class="card-body">
                                                <a href="#!" class="black-text">
                                                  Best practices for minimal
                                                  design
                                                </a>
                                                <p class="card-title text-muted font-small mt-3 mb-2">
                                                  Some quick example text to
                                                  build on the card title and
                                                  make up the bulk of the card's
                                                  content. Some quick example
                                                  text to build on the card
                                                  title.
                                                </p>

                                                <a class="text-primary">
                                                  {" "}
                                                  Read more{" "}
                                                  <i class="fa fa-angle-right ml-2"></i>{" "}
                                                </a>
                                              </div>

                                              <div className="card-footer text-center d-flex align-items-center justify-content-around">
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={heart_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={views_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                  <img
                                                    src={votes_icon}
                                                    className="mb-1"
                                                    height="25"
                                                  />
                                                  <span className="font-weight-bold">
                                                    4.9M
                                                  </span>
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                        </div>

                                        <div class="text-center mt-5">
                                          <a href="#!" className="waves-effect p-3 font-weight-bolder">Browse all blog posts</a>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
