import React from "react";

/* import img1 from "../../../images/section/1.png";
import img2 from "../../../images/section/6.png";
import img3 from "../../../images/section/3.png"; */

const Integration = () => {
  return (
    <div className="container  ">
      <div className="pb-4">
        <h2 className="text-center text-success text-capitalize fst-italic fw-bold">
          What does the Digital Camera Warehouse Integration{" "}
        </h2>
        <div className="hr-style mx-auto pt-1 ">
          <hr />
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-6 rounded-1">
            <div className=" mx-2 my-4 border border-1 ">
              <div className="text-center">
                <img className="p-1 " /* src={img1} */ alt="" />
              </div>
              <div className="p-3">
                <h5 className="text-center text-capitalize fw-bold">
                  Multichannel sales:
                </h5>
                <p>
                  Bid farewell to standalone tools, as Camera Inventory
                  centralizes all orders across sources and then classifies them
                  under appropriate filters, based on their current status,
                  making it your complete. You can also keep track of product
                  serial numbers{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 rounded-1">
            <div className=" mx-2 my-4 border border-1 ">
              <div className="text-center">
                <img className="p-1 " /* src={img2} */ alt="" />
              </div>
              <div className="p-3">
                <h5 className="text-center text-capitalize fw-bold">
                  Master of stock:
                </h5>
                <p>
                  When you sell items over more than one channel, Camera
                  Inventory not only keeps track of your inventory levels at all
                  times, and prompts you to reorder low stock, it also instantly
                  updates your current stock levels on Warehouse.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 rounded-1">
            <div className=" mx-2 my-4 border border-1 ">
              <div className="text-center">
                <img className="p-1 " /* src={img3} */ alt="" />
              </div>
              <div className="p-3">
                <h5 className="text-center text-capitalize fw-bold">
                  Client database:
                </h5>
                <p>
                  Whenever a new order from Warehouse gets captured by
                  Inventory, the client data is also imported and added to the
                  built-in client database. Any future orders made by the same
                  customer can be tracked under a dedicated sales section for
                  each client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
