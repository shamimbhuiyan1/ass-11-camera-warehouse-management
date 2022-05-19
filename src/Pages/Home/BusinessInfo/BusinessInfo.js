import React from "react";
/* import img7 from "../../../images/section/7.png";
import img8 from "../../../images/section/8.png";
import img9 from "../../../images/section/9.png";
import img11 from "../../../images/section/11.png"; */
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div
      className="container rounded mt-2"
      style={{ backgroundColor: "#E4E4E4" }}
    >
      <div className="pt-4">
        <h2 className="text-center text-success text-capitalize fst-italic fw-bold">
          Run a more efficient business.{" "}
        </h2>
        <div className="hr-style mx-auto pt-1 ">
          <hr />
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-3 col-md-6 rounded-1 ">
          <div className=" mx-2 my-4 ">
            <div className="text-center">
              <img className="p-1 w-50" /* src={img7}  */ alt="" />
            </div>
            <div className="p-3">
              <h6 className="text-center text-capitalize fw-bold">
                Increase sales
              </h6>
              <p>
                Expand your business online with our multi-channel inventory
                management system. Set up and integrate your Amazon, eBay, Etsy,
                or Shopify account, and start selling your merchandise.{" "}
              </p>
              <Link to="/" className="text-success">
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 rounded-1">
          <div className=" mx-2 my-4  ">
            <div className="text-center">
              <img className="p-1 w-50" /* src={img9} */ alt="" />
            </div>
            <div className="p-3">
              <h6 className=" text-capitalize text-center fw-bold">
                Warehouse Management
              </h6>
              <p>
                Check stock level, manage inter-warehouse transfer, and generate
                reports for specific warehouses within seconds. Warehouse
                inventory management, at your fingertips.{" "}
              </p>
              <Link to="/" className="text-success">
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 rounded-1">
          <div className=" mx-2 my-4  ">
            <div className="text-center">
              <img className="p-1 w-50" /* src={img8} */ alt="" />
            </div>
            <div className="p-3">
              <h6 className="text-center text-capitalize fw-bold">
                Manage orders
              </h6>
              <p style={{ textAlign: "justify" }}>
                Manage your offline and online orders with our efficient order
                management system. Also, you can create purchase orders,
                backorders and drop shipments, all in a single inventory
                management application.{" "}
              </p>
              <Link to="/" className="text-success">
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 rounded-1">
          <div className=" mx-2 my-4 ">
            <div className="text-center">
              <img className="p-1 w-50" /* src={img11} */ alt="" />
            </div>
            <div className="p-3">
              <h6 className="text-center text-capitalize fw-bold">
                Multiple integrations
              </h6>
              <p>
                Get real-time shipping rates and in-transit details of major
                shipping carriers and choose a shipping partner for your
                business, wisely. A much-needed feature for a complete inventory
                management system.{" "}
              </p>
              <Link to="/" className="text-success">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
