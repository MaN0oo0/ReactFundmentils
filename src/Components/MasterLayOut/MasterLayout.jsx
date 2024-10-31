import React, { Component } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default class MasterLayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-md text-center">
          {/* <Home />
          <Parent /> */}
          <Outlet></Outlet>
        </div>
        <Footer />
      </>
    );
  }
}
