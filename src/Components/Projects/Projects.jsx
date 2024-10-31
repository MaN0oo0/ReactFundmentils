import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className="row col-md-12">
          <div className="col-md-3">
            <ul>
              <li>
                <Link to={""}>web</Link>
              </li>
              <li>
                <Link to={"mobile"}>mobile</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}
