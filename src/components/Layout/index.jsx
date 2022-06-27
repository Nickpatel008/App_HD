import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import { createPath, useLocation } from "react-router-dom";

const Layout = ({ children, isPath }) => {
  const [showBars, setShowBars] = useState();
  console.log("ispath", isPath);
  const location = useLocation();
  useEffect(() => {
    setShowBars(isPath.includes(location.pathname));
  }, [isPath]);

  return (
    <>
      {location.pathname !== "/signUp" && showBars ? <Navbar /> : null}
      {children}
      {location.pathname !== "/signUp" && showBars ? <Footer /> : null}
    </>
  );
};

export default Layout;
