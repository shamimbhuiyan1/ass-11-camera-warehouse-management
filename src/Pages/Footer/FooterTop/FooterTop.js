import React from "react";
import "./FooterTop.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsPinterest, BsInstagram } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
/* import logo from "../../../images/website_logo.png"; */

const FooterTop = () => {
  return (
    <div className="container pt-2 pb-5">
      <div className="row">
        <div className="col-md-8 col-sm-12 ">
          <div className="row mt-3">
            <div className="col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="important-link ">
                <h2 className="text-warning"> Social Account</h2>
                <Link to="/facebook">
                  <span className="text-warning pe-2 fs-5">
                    <BsFacebook />
                  </span>{" "}
                  Facebook
                </Link>
                <Link to="/twitter">
                  <span className="text-warning pe-2 fs-5">
                    <AiFillTwitterCircle />
                  </span>
                  Twitter
                </Link>
                <Link to="/instagram">
                  <span className="text-warning pe-2  fs-5">
                    <BsInstagram />
                  </span>
                  Instagram
                </Link>
                <Link to="/pinterest">
                  <span className="text-warning pe-2  fs-5">
                    <BsPinterest />
                  </span>
                  Pinterest
                </Link>
                <Link to="/youtube">
                  <span className="text-warning pe-2  fs-5">
                    <AiFillYoutube />
                  </span>
                  YouTube
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="important-link ">
                <h2 className="text-warning">About Us</h2>
                <Link to="/help">get help</Link>
                <Link to="/signup">Join Us</Link>
                <Link to="/inventories">view all products</Link>
                <Link to="/contact">contact us</Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="important-link">
                <h2 className="text-warning">Links</h2>
                <Link to="/about"> About Us</Link>
                <Link to="/blog"> Read Blog</Link>
                <Link to="/"> Partner </Link>
                <Link to="/"> Recent Delivered</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mt-4 logo text-center">
            <Link className="text-decoration-none" to="/">
              <div className="mt-5">
                <img /* src={logo} */ alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
