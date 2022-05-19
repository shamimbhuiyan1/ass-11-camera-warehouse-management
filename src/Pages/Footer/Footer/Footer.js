import React from "react";
import FooterBottom from "../FooterBottom/FooterBottom";
import FooterTop from "../FooterTop/FooterTop";

const Footer = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "#0e4c67" }}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
