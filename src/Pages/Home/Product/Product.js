import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const { name, img, description, price, quantity, supplier, _id } = product;
  return (
    <div className="col-lg-4 col-md-6 rounded-1">
      <div className="cart mx-2 my-4 border border-1 ">
        <div className="text-center">
          <img className="product-img p-1 w-100" src={img} alt="" />
        </div>
        <div className="p-3">
          <h5 className=" text-capitalize">{name}</h5>
          <p className="mb-0">{description.slice(0, 100)}</p>
          <h6 className="mt-2 mb-0 fw-bolder">Price : $ {price}</h6>
          <h6 className="mt-2 mb-0 fw-bolder">Quantity : {quantity}</h6>
          <h6 className="mt-2 mb-0 fw-bolder">Supplier : {supplier}</h6>
          <Link to={"/inventory/" + _id}>
            <button className="btn btn-outline-success text-capitalize mt-3 fw-bold">
              {" "}
              Manage Update{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
