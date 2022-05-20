import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../../images/delete-icon.png";
import "./ManageItem.css";

const ManageItem = ({ product, index, handleDelete }) => {
  const {
    name,
    _id,
    price,
    quantity,
    img,
    supplier,
    afPoints,
    brand,
    modes,
    movieType,
    sold,
    ratings,
  } = product;

  // {name,description,price,quantity,img,supplier,afPoints , brand,brandId,modes,movieType,sold,ratings}

  return (
    <div className="container">
      <div className="row border border-2 rounded my-3 pb-2">
        <div className="col-md-1  d-flex text-center  justify-content-center pb-1  align-items-center">
          <span className="pe-5 fw-bold pt-3 text-center">{index + 1}.</span>
        </div>
        <div className="col-md-2 d-flex flex-column manage-items justify-content-center pb-1  ">
          <h5>
            {" "}
            <img className=" item-img " src={img} alt="" />
          </h5>{" "}
          <br />
          <h5>{name}</h5>
        </div>
        <div className="col-md-7 px-5 py-2 ">
          <div className="row d-flex justify-content-center pb-1  align-items-center">
            <div className="col-md-6">
              <button className="btn ">Total Sell : {sold} </button> <br />
              <button className="btn ">Quantity : {quantity} </button> <br />
              <button className="btn ">
                {" "}
                Seller :{" "}
                <span className="text-success fw-bold">{supplier}</span>{" "}
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn ">Brand : {brand} </button> <br />
              <button className="btn ">Price : {price} </button> <br />
              <button className="btn ">Ratings : {ratings} </button>
            </div>
          </div>
          <div>
            <h5 className="pt-2 fw-bold">Specification : </h5>
            <div className="w-25 ">
              <hr />
            </div>
            <ul>
              <li>
                <p>{afPoints}</p>
              </li>
              <li>
                <p>{modes}</p>
              </li>
              <li>
                <p>{movieType}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
          <div>
            <div
              onClick={() => handleDelete(product._id)}
              className="text-center"
              style={{ cursor: "pointer" }}
            >
              <img
                className="bg-danger w-50 p-2 rounded-circle"
                src={deleteIcon}
                alt=""
              />
            </div>
            <Link to={"/inventory/" + _id}>
              <button className="btn btn-outline-success text-capitalize mt-3 fw-bold">
                {" "}
                Update{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
