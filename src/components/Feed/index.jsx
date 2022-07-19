import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeedHome from "./FeedHome/index";
import AllComm from "./AllCommunities/index";
import Subscription from "./Subscription/index";
import Collaborate from "./Collaborate/index";
import Bookmark from "./Bookmark/index";
import MyProfile from "../MyProfile/index";

const Index = () => {
  const [isSelected, setIsSelected] = useState(1);
  const [isPath, setIsPath] = useState(<FeedHome />);

  const leftSideBar = [
    {
      name: "Active",
      value: 1,
      path: <FeedHome />,
      iconTag: "fa-solid fa-house",
    },
    {
      name: "Collaborate",
      value: 2,
      iconTag: "fa-solid fa-user-group",
      path: <Collaborate />,
    },
    {
      name: "Subscription",
      value: 3,
      iconTag: "fa-solid fa-dollar-sign",
      path: <Subscription />,
    },
    {
      name: "Bookmarks",
      value: 4,
      iconTag: "fa-regular fa-bookmark",
      path: <Bookmark />,
    },
  ];
  const RightSideBar = [
    {
      name: "Node",
      value: 5,
      imgTag:
        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      path: <AllComm tag={1} />,
    },
    {
      name: "React",
      value: 6,
      imgTag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      path: <AllComm tag={2} />,
    },
    {
      name: "All",
      value: 7,
      imgTag: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",

      path: <AllComm tag={3} />,
    },
  ];

  const currentPath = useLocation()
  const navigate = useNavigate();

  useEffect(() => {

    if(!sessionStorage.getItem('is_user_online')){
      navigate('/')
    }else{
      navigate('/feed')
    }

  }, [])

  useEffect(() => {
    console.log(currentPath.pathname);
    if(currentPath.pathname == '\MyProfile'){
      setIsPath(<MyProfile />)
    }else{
      setIsPath(<FeedHome />)
    }


  }, [])
  console.log(isPath)
   
  console.log("isSelected", isSelected);

  const handlePages = (element) => {
    setIsSelected(element.value);
    setIsPath(element.path);
    console.log("1", element);
  };

  return (
    <>
      <section>
        <div className="container-fluid HomeFeed__layout main__feed__wrapper">
          <div className="row pt-4">
            <div className="col-lg-2 left__side__nav__menu ">
              <nav class="nav flex-column lighten-3  mb-r font-weight-bold z-depth-0 pb-5 left__side__nav__menu__wrapper">
                {leftSideBar.map((element, index) => {
                  return (
                    <div className="">
                      <div class="list-group">
                        <a
                          className={
                            isSelected == element.value
                              ? "list-group-item list-group-item-action view overlay active"
                              : "list-group-item list-group-item-action view overlay"
                          }
                          key={index}
                          onClick={() => handlePages(element)}
                        >
                          <span className="iconTags">
                            <i className={element.iconTag}></i>
                          </span>
                          <span className="iconTag__text ml-2">
                            {element.name}
                          </span>
                          <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                        </a>
                      </div>
                    </div>
                  );
                })}

                <hr />
                <a
                  class="list-group-item list-group-item-action view overlay "
                  onClick={() => handlePages(8)}
                >
                  <span className="iconTags">
                    <i class="fa-solid fa-layer-group"></i>
                  </span>
                  <span className="iconTag__text ml-2"> All Communities </span>
                  <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                </a>
              </nav>
            </div>
            <div className="col-lg-7">
              <div className="middle__section">{isPath}</div>
            </div>
            <div className="col-lg-3">
              <nav class="nav flex-column lighten-3 mb-r font-weight-bold z-depth-0 right__side__nav__menu__wrapper">
                <div className="d-flex justify-content-between px-3">
                  <div className="mb-3">
                    <span>Top Commnunities</span>
                  </div>
                  <div className="">
                    <a className="">
                      <span> See All </span>
                    </a>
                  </div>
                </div>

                {RightSideBar.map((element, index) => {
                  return (
                    <div className="right__side__nav">
                      <div class="list-group">
                        <a
                          className={
                            isSelected == element.value
                              ? "list-group-item list-group-item-action view overlay active"
                              : "list-group-item list-group-item-action view overlay"
                          }
                          key={index}
                          onClick={() => handlePages(element)}
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={element.imgTag}
                              class="rounded-circle z-depth-0"
                              alt="avatar image"
                              height="30"
                            />
                            <span className="iconTag__text ml-3">
                              {element.name}
                            </span>
                            <div class="mask waves-effect waves-dark rgba-dark-slight"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
