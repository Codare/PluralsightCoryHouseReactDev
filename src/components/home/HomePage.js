import React from "react";
import { Link } from "react-router-dom";

const HomePage = (): Element => (
  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    <h1>Pluralsight Administration</h1>
    <Link to="about" className="btn btn-primary btn-lg">
      Learning loads
    </Link>
  </div>
);

export default HomePage;
