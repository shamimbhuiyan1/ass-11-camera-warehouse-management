import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProductDetails from "../../../Hooks/useProductDetails";
import Ratings from "../../../Components/Rating/Rating";
/* import ads from "../../../images/ads.png"; */
import "./ProductDetail.css";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [detail, setDetail] = useProductDetails(inventoryId);
  const stokeRef = useRef("");

  //handle delivered
  const handleDelivered = () => {
    let deliver = 1;
    let quantityParse = parseInt(detail.quantity);
    let quantity = quantityParse - deliver;

    const cameraInfo = {
      name: detail.name,
      description: detail.description,
      price: detail.price,
      img: detail.img,
      supplier: detail.supplier,
      afPoints: detail.afPoints,
      modes: detail.modes,
      movieType: detail.movieType,
      brand: detail.brand,
      brandId: detail.brandId,
      sold: parseInt(detail.sold) + 1,
      ratings: detail.ratings,
      quantity: quantity,
    };

    const url = `https://camera-warehouse.herokuapp.com/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cameraInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        setDetail(cameraInfo);
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
    toast.success(`One Item Delivered `, { id: "delivered" });
    navigate("/inventory/" + inventoryId);

    if (cameraInfo?.quantity < 0) {
      return;
    } else {
      setDetail(cameraInfo);
    }
  };

  //handle stoke
  const handleStoke = (event) => {
    event.preventDefault();
    const reStoke = stokeRef.current.value;
    if (reStoke === "") {
      toast.error(`Please Stoke Items `, { id: "addItem" });
      return;
    }
    if (reStoke <= 0) {
      toast.error(`Please Stoke Positive Item `, { id: "addItem2" });
      return;
    } else {
      const cameraInfo = {
        name: detail.name,
        description: detail.description,
        price: detail.price,
        img: detail.img,
        supplier: detail.supplier,
        afPoints: detail.afPoints,
        modes: detail.modes,
        movieType: detail.movieType,
        brand: detail.brand,
        brandId: detail.brandId,
        sold: detail.sold,
        ratings: detail.ratings,
        quantity: parseInt(detail.quantity) + parseInt(reStoke),
      };
      if (cameraInfo?.quantity < 0) {
        return;
      } else {
        setDetail(cameraInfo);
      }

      const url = `https://camera-warehouse.herokuapp.com/product/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cameraInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Success:', data);
          setDetail(cameraInfo);
        })
        .catch((error) => {
          // console.error('Error:', error);
        });
      toast.success(`Restock Item Success `, { id: "restock" });
      event.target.reset();
      navigate("/inventory/" + inventoryId);
    }
  };

  return (
    <div className=" pb-5 product-container">
      <div className="row ">
        <div className="col-lg-6  pt-3 d-flex  justify-content-center align-items-center text-center">
          <div className="container ps-5">
            <img className="w-100 " src={detail?.img} alt="" />
            <div className="">
              {detail && <Ratings ratings={detail?.ratings}></Ratings>}
            </div>
          </div>
        </div>

        <div className="col-lg-6  d-flex pt-5  justify-content-center">
          <div className="container custom-border mx-3">
            <h2 className="text-success text-center ">{detail?.name}</h2>
            <div className="hr-style mx-auto pt-1 ">
              <hr />
            </div>
            <div className="mt-3 pill-btn ">
              <button className="btn btn-outline-dark pe-4 me-3 w-25 mb-1">
                Price : ${detail?.price}
              </button>
              <button className="btn btn-outline-dark me-3">
                Product Code : {detail?.brandId}
              </button>
              <button className="btn btn-outline-dark w-25">
                Brand : {detail?.brand}
              </button>
            </div>
            <div className="mt-3 pill-btn ">
              <button className="btn btn-success me-3">
                Total Sold : {detail?.sold}
              </button>
              <button className="btn btn-outline-dark ">
                Supplier : {detail?.supplier}
              </button>
            </div>

            <div>
              <h4 className="pt-5 ">Key Features</h4>
              <div className="w-25 ">
                <hr />
              </div>
              <ul>
                <li>
                  <p>{detail?.afPoints}</p>
                </li>
                <li>
                  <p>{detail?.movieType}</p>
                </li>
                <li>
                  <p>{detail?.modes}</p>
                </li>
              </ul>
            </div>
            <div className="mt-5 pill-btn text-center">
              <button className="btn  pe-4 me-3 w-75 py-2 fs-5">
                In Stoke Product : {detail?.quantity}
              </button>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                {detail?.quantity <= 0 ? (
                  <button className="btn btn-danger py-2 px-5 mb-3 fw-bold ">
                    Out Of Stock
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelivered()}
                    className="btn btn-danger py-2 px-5 mb-3 fw-bold"
                  >
                    Delivered
                  </button>
                )}
                <Link to="/manage-inventories">
                  <button className="btn btn-outline-dark pe-4 me-3 mb-1   py-2 fs-5">
                    Manage Inventories
                  </button>
                </Link>
              </div>
              <div className="col-md-6">
                <Form noValidate onSubmit={handleStoke}>
                  <input
                    className=" mb-3 py-2 "
                    ref={stokeRef}
                    type="number"
                    name="number"
                    placeholder="Stoke quantity "
                    required
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 fs-5"
                  >
                    ReStock Item
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row container py-5 custom-border-top">
          <div className="col-md-6 ">
            <div>
              <h4 className="">Specification </h4>
              <div className="w-25 ">
                <hr />
              </div>
              <p>
                <span className="fs-5 fw-bold">Af - Points :</span>{" "}
                {detail?.afPoints}
              </p>
              <p>
                <span className="fs-5 fw-bold">Movie Type :</span>{" "}
                {detail?.movieType}
              </p>
              <p>
                <span className="fs-5 fw-bold">Modes :</span> {detail?.modes}
              </p>
            </div>
            <h3>Description</h3>
            <div className="pt-3 ">
              <p style={{ textAlign: "justify" }}>{detail?.description}</p>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div>
              <img /* src={ads} */ alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
