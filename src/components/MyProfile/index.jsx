import React from "react";

const Index = () => {
  return (
    <>
      <section>
        <div className="myProfile__wrapper">
          <div className="profile__label py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <h1 className="font-weight-bold"> Settings </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="left__side__manu py-5">
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
                              <div className="bannerFrame p-5"></div>
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
                                {" "}
                                This will be displayed on your profile.{" "}
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
                                  <div class="jumbotron card card-image Question__jumbotron">
                                    <div class="text-white text-center py-5 px-4">
                                      <div>
                                        <h2 class="card-title h1-responsive pt-3 font-bold">
                                          <strong>
                                          MY QESTIONS
                                          </strong>
                                        </h2> 
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
