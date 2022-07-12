import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MainSection from "../MainSection/index";
import PageNotFound from "../404/index";
import SignUp from "../SignUp/index";
import Feed from "../Feed/index";
import FeedHome from "../Feed/FeedHome/index";
import AllComm from "../Feed/AllCommunities/index";
import MyProfile from "../MyProfile/index";

const PrivateRoutes = ({ handlePath }) => {
  return (
    <>
      <Routes>
        <Route
          exect
          path="/"
          handlePath={handlePath("/")}
          element={<MainSection />}
        ></Route>
        <Route
          exect
          path="/signUp"
          handlePath={handlePath("/signUp")}
          element={<SignUp />}
        ></Route>
        <Route
          exect
          path="/feed"
          handlePath={handlePath("/feed")}
          element={<Feed />}
        ></Route>
        <Route
          exect
          path="/FeedHome"
          handlePath={handlePath("/FeedHome")}
          element={<FeedHome />}
        ></Route>
        <Route
          exect
          path="/AllComm"
          handlePath={handlePath("/AllComm")}
          element={<AllComm />}
        ></Route>
        <Route
          exect
          path="/myProfile"
          handlePath={handlePath("/myProfile")}
          element={<MyProfile />}
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
