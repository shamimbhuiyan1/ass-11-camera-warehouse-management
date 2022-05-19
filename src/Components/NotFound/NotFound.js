import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../images/404 image.jpg";
const NotFound = () => {
  return (
    <div className="text-center">
      <h1>OOP'S!!! Page Not Found</h1>
      <Link to="/">
        <img width={600} src={errorImage} alt="" />
      </Link>
    </div>
  );
};

export default NotFound;
