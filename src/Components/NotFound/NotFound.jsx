import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <center>
          <h1>NotFound</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to={""}>Go Back</Link>
        </center>
      </>
    );
  }
}
