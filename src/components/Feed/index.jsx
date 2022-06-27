import React, { useEffect, useState } from "react";
import FeedHome from "../Feed/FeedHome/index";
import AllComm from "../Feed/AllCommunities/index";

const Index = () => {
  const [isSelected, setIsSelected] = useState(false);
  const leftSideBar = [
    { name: "Active", value: 1, path: <FeedHome /> },
    { name: "Link 2", value: 2 },
    { name: "LInk 3", value: 3 },
  ];
  const RightSideBar = [
    { name: "Node", value: 4, path: <AllComm tag={1} /> },
    { name: "React", value: 5, path: <AllComm tag={2} /> },
    { name: "All", value: 6, path: <AllComm tag={3} /> },
  ];

  console.log("isSelected", isSelected);

  const handlePages = (element) => {
    setIsSelected(element);
    console.log("1", element);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <nav class="nav flex-column pink lighten-3 py-4 mb-r font-weight-bold z-depth-1">
                {leftSideBar.map((element, index) => {
                  return (
                    <a
                      class="nav-link active white-text"
                      href="#"
                      key={index}
                      onClick={() => handlePages(element)}
                    >
                      {element.name}
                    </a>
                  );
                })}
              </nav>
            </div>
            <div className="col-lg-6">
              {isSelected ? isSelected.path : <FeedHome />}
            </div>
            <div className="col-lg-3">
              <nav class="nav flex-column pink lighten-3 py-4 mb-r font-weight-bold z-depth-1">
                {RightSideBar.map((element, index) => {
                  return (
                    <a
                      class="nav-link active white-text"
                      href="#"
                      key={index}
                      onClick={() => handlePages(element)}
                    >
                      {element.name}
                    </a>
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
