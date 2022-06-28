import React, { useEffect } from "react";

const Index = ({ tag }) => {
  let myFilter = [];

  const myData = [
    {
      tag: 1,
      imgtag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
      user: "User Name",
      userName: "@user123",
      questionTitle: "Node JS 1",
      questionContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil.",
      hashTags: "#AI#IOS",
    },
    {
      tag: 1,
      imgtag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
      user: "User Name",
      userName: "@user123",
      questionTitle: "Node JS 2",
      questionContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil.",
      hashTags: "#AI#IOS",
    },
    {
      tag: 1,
      imgtag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
      user: "User Name",
      userName: "@user123",
      questionTitle: "Node JS 3",
      questionContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil.",
      hashTags: "#AI#IOS",
    },
    {
      tag: 1,
      imgtag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
      user: "User Name",
      userName: "@user123",
      questionTitle: "Node JS 4",
      questionContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil.",
      hashTags: "#AI#IOS",
    },
    {
      tag: 2,
      imgtag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
      user: "User Name",
      userName: "@user123",
      questionTitle: "React JS 4",
      questionContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil.",
      hashTags: "#AI#IOS",
    },
  ];

  useEffect(() => {
    return () => {
      myFilter.push(tag);
    };
  }, [tag]);

  return (
    <>
      {/* <div>
        {tag == 3 ? (
          <> All </>
        ) : (
          myData.map((element, i) => {
            return tag == element.tag && <div key={i}>{element.tagName}</div>;
          })
        )}
      </div> */}

      <section>
        <div className="communities__wrapper">
          <div className="row">
            <div className="col-lg-12">
              {tag === 3
                ? myData.map((ele, i) => {
                    return (
                      <>
                        <div
                          className="questions__wrapper border  d-flex p-4 mb-3"
                          key={i}
                        >
                          <div className="user__logo">
                            <img
                              src={ele.imgtag}
                              class="rounded-circle z-depth-0"
                              alt="avatar image"
                              height="30"
                            />
                          </div>
                          <div className="question__content mx-4 ">
                            {/* <div class="mask waves-effect waves-dark rgba-blue-light"></div> */}

                            <div className="user__details d-flex">
                              <h5> {ele.user} </h5>
                              <span> {ele.userName}</span>
                              <span> 5d </span>
                            </div>
                            <div className="coment__content">
                              <h4>{ele.questionTitle}</h4>
                              <p>
                                {ele.questionContent}
                                <br />
                                <br />
                                {ele.hashTags}
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
                      </>
                    );
                  })
                : myData.map((ele, i) => {
                    return (
                      tag == ele.tag && (
                        <>
                          <div
                            className="questions__wrapper border  d-flex p-4 mb-3"
                            key={i}
                          >
                            <div className="user__logo">
                              <img
                                src={ele.imgtag}
                                class="rounded-circle z-depth-0"
                                alt="avatar image"
                                height="30"
                              />
                            </div>
                            <div className="question__content mx-4 ">
                              {/* <div class="mask waves-effect waves-dark rgba-blue-light"></div> */}

                              <div className="user__details d-flex">
                                <h5> {ele.user} </h5>
                                <span> {ele.userName}</span>
                                <span> 5d </span>
                              </div>
                              <div className="coment__content">
                                <h4>{ele.questionTitle}</h4>
                                <p>
                                  {ele.questionContent}
                                  <br />
                                  <br />
                                  {ele.hashTags}
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
                        </>
                      )
                    );
                  })}

              {/* <div className="questions__wrapper border  d-flex px-2 py-4">
                <div className="user__logo">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp"
                    class="rounded-circle z-depth-0"
                    alt="avatar image"
                    height="30"
                  />
                </div>
                <div className="question__content mx-4 ">
                  <div class="mask waves-effect waves-dark rgba-blue-light"></div>
                  <div className="user__details">
                    <p>
                      usename
                      <span> @username </span>
                      <span> 5d </span>
                    </p>
                  </div>
                  <div className="user__details d-flex">
                    <h5> User Name </h5>
                    <span> @user123 </span>
                    <span> 5d </span>
                  </div>
                  <div className="coment__content">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Suscipit, consequuntur.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nihil.
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
