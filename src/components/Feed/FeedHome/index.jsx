import React from "react";

const Index = () => {
  return (
    <>
      <section>
        <div className="">
          <div className="create__post p-3">
            <div className="craete__post__form bgTransparent">
              <div class="form-group purple-border">
                <textarea
                  class="form-control p-2"
                  id="exampleFormControlTextarea4"
                  rows="7"
                  placeholder="Share Your Knowledge..."
                ></textarea>
              </div>
            </div>
            <div className="crate__post__tools ">
              <div className="d-flex justify-content-between">
                <ul className="list-group list-group-horizontal flex-row">
                  <li className="list-group-item bgTransparent view overlay">
                    <span class="">
                      <i class="fa-solid fa-circle-plus"></i>
                      <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                    </span>
                  </li>
                  <li className="list-group-item bgTransparent view overlay">
                    <span class="">
                      <i class="fa-solid fa-code"></i>
                      <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                    </span>
                  </li>
                  <li className="list-group-item bgTransparent view overlay">
                    <span class="">
                      <i class="fa-solid fa-at"></i>
                      <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                    </span>
                  </li>
                  <li className="list-group-item bgTransparent view overlay">
                    <span class="">
                      <i class="fa-regular fa-clock"></i>
                      <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                    </span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item bgTransparent p-0">
                    <div class="">
                      <a className="btn btn-primary btn-sm  view overlay">
                        <i class="fa-solid fa-paper-plane"></i>
                        <div class="mask waves-effect waves-light rgba-white-slight"></div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section className="feed">
            <div className="">
              <div className="all__post_feed my-3 rounded">
                <div className="comment__wrapper">
                  <div className="comment__part row d-flex p-3">
                    <div className="col-lg-1 cmt__user__iamge">
                      <a class="nav-link p-0" href="#">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="35"
                        />
                      </a>
                    </div>
                    <div className="col-lg-11 cmt__contents px-3">
                      <div className="user__details d-flex">
                        <h5> User Name </h5>
                        <span> @user123 </span>
                        <span> 5d </span>
                      </div>
                      <div className="coment__content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Suscipit, consequuntur.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde, nihil.
                          <br />
                          <br />
                          #AI#IOS
                        </p>
                      </div>
                      <div className="comment__tools">
                        <div className="d-flex justify-content-between">
                          <ul className="list-group list-group-horizontal flex-row">
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-heart"></i>
                                <span className="ml-1"> 27 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-solid fa-circle-arrow-up"></i>
                                <span className="ml-1"> 9 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-comment"></i>
                                <span className="ml-1"> 1 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-bookmark"></i>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                          </ul>

                          <ul className="list-group">
                            <li className="list-group-item bgTransparent p-0">
                              <div class="">
                                <a className="bgTransparent view overlay">
                                  <i class="fa-solid fa-ellipsis"></i>
                                  <div class="mask waves-effect waves-light rgba-white-slight"></div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment__part row d-flex p-3">
                    <div className="col-lg-1 cmt__user__iamge">
                      <a class="nav-link p-0" href="#">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="35"
                        />
                      </a>
                    </div>
                    <div className="col-lg-11 cmt__contents px-3">
                      <div className="user__details d-flex">
                        <h5> User Name </h5>
                        <span> @user123 </span>
                        <span> 5d </span>
                      </div>
                      <div className="coment__content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Suscipit, consequuntur.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde, nihil.
                          <br />
                          <br />
                          #AI#IOS
                        </p>
                      </div>
                      <div className="comment__tools">
                        <div className="d-flex justify-content-between">
                          <ul className="list-group list-group-horizontal flex-row">
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-heart"></i>
                                <span className="ml-1"> 27 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-solid fa-circle-arrow-up"></i>
                                <span className="ml-1"> 9 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-comment"></i>
                                <span className="ml-1"> 1 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-bookmark"></i>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                          </ul>

                          <ul className="list-group">
                            <li className="list-group-item bgTransparent p-0">
                              <div class="">
                                <a className="bgTransparent view overlay">
                                  <i class="fa-solid fa-ellipsis"></i>
                                  <div class="mask waves-effect waves-light rgba-white-slight"></div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment__part row d-flex p-3">
                    <div className="col-lg-1 cmt__user__iamge">
                      <a class="nav-link p-0" href="#">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="35"
                        />
                      </a>
                    </div>
                    <div className="col-lg-11 cmt__contents px-3">
                      <div className="user__details d-flex">
                        <h5> User Name </h5>
                        <span> @user123 </span>
                        <span> 5d </span>
                      </div>
                      <div className="coment__content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Suscipit, consequuntur.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde, nihil.
                          <br />
                          <br />
                          #AI#IOS
                        </p>
                      </div>
                      <div className="comment__tools">
                        <div className="d-flex justify-content-between">
                          <ul className="list-group list-group-horizontal flex-row">
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-heart"></i>
                                <span className="ml-1"> 27 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-solid fa-circle-arrow-up"></i>
                                <span className="ml-1"> 9 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-comment"></i>
                                <span className="ml-1"> 1 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-bookmark"></i>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                          </ul>

                          <ul className="list-group">
                            <li className="list-group-item bgTransparent p-0">
                              <div class="">
                                <a className="bgTransparent view overlay">
                                  <i class="fa-solid fa-ellipsis"></i>
                                  <div class="mask waves-effect waves-light rgba-white-slight"></div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment__part row d-flex p-3">
                    <div className="col-lg-1 cmt__user__iamge">
                      <a class="nav-link p-0" href="#">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="35"
                        />
                      </a>
                    </div>
                    <div className="col-lg-11 cmt__contents px-3">
                      <div className="user__details d-flex">
                        <h5> User Name </h5>
                        <span> @user123 </span>
                        <span> 5d </span>
                      </div>
                      <div className="coment__content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Suscipit, consequuntur.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde, nihil.
                          <br />
                          <br />
                          #AI#IOS
                        </p>
                      </div>
                      <div className="comment__tools">
                        <div className="d-flex justify-content-between">
                          <ul className="list-group list-group-horizontal flex-row">
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-heart"></i>
                                <span className="ml-1"> 27 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-solid fa-circle-arrow-up"></i>
                                <span className="ml-1"> 9 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-comment"></i>
                                <span className="ml-1"> 1 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-bookmark"></i>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                          </ul>

                          <ul className="list-group">
                            <li className="list-group-item bgTransparent view overlay">
                                <div class="">
                                  <a className="bgTransparent view overlay">
                                    <i class="fa-solid fa-ellipsis"></i>
                                  </a>
                                  <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                                </div>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment__part row d-flex p-3">
                    <div className="col-lg-1 cmt__user__iamge">
                      <a class="nav-link p-0" href="#">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="35"
                        />
                      </a>
                    </div>
                    <div className="col-lg-11 cmt__contents px-3">
                      <div className="user__details d-flex">
                        <h5> User Name </h5>
                        <span> @user123 </span>
                        <span> 5d </span>
                      </div>
                      <div className="coment__content">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Suscipit, consequuntur.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde, nihil.
                          <br />
                          <br />
                          #AI#IOS
                        </p>
                      </div>
                      <div className="comment__tools">
                        <div className="d-flex justify-content-between">
                          <ul className="list-group list-group-horizontal flex-row">
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-heart"></i>
                                <span className="ml-1"> 27 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-solid fa-circle-arrow-up"></i>
                                <span className="ml-1"> 9 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-comment"></i>
                                <span className="ml-1"> 1 </span>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                            <li className="list-group-item bgTransparent view overlay">
                              <span class="">
                                <i class="fa-regular fa-bookmark"></i>
                                <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                              </span>
                            </li>
                          </ul>

                          <ul className="list-group">
                            <li className="list-group-item bgTransparent p-0">
                              <div class="">
                                <a className="bgTransparent view overlay">
                                  <i class="fa-solid fa-ellipsis"></i>
                                  <div class="mask waves-effect waves-light rgba-white-slight"></div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Index;
