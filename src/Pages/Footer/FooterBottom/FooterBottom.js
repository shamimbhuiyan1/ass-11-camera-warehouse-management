import React from "react";
import { Link } from "react-router-dom";
import "./FooterBottom.css";
const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="copy-right text-center ">
        <p>
          Copyright © {currentYear}
          <Link to="/"> Online Camera Warehouse</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
