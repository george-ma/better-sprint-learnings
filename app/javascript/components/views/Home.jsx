import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Better Sprint Learnings</h1>
        <p className="lead">
          A collection of sprint learnings categorized with different services.
        </p>
        <hr className="my-4" />
        <Link
          to="/learnings"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Learnings
        </Link>
      </div>
    </div>
  </div>
);