import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import ManageItem from "../ManageItem/ManageItem";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import "./ManageInventories.css";
import PageTitle from "../../../components/PageTitle/PageTitle";

const ManageInventories = () => {
  //pagination
  const [cameraCount, setCameraCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageProduct, setPageProduct] = useState(5);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://camera-warehouse.herokuapp.com/product?page=${page}&pageProduct=${pageProduct}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [page, pageProduct]);

  useEffect(() => {
    fetch("https://camera-warehouse.herokuapp.com/cameraCollection")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / pageProduct);
        setCameraCount(pages);
      });
  }, [pageProduct]);

  if (products <= 0) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    const deleteItem = window.confirm("Be Careful Before deleting this item ");
    if (deleteItem) {
      const url = `https://camera-warehouse.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const afterDelete = products.filter((product) => product._id !== id);
          setProducts(afterDelete);
        });
    }
  };

  return (
    <div className="py-5 ">
      <PageTitle title="Manage - "></PageTitle>
      <div className="container">
        <Link to="/stock-item">
          <button className="btn btn-success fs-5 mb-3">
            Stock New Camera{" "}
            <span className="ps-3 fs-4">
              <FiCamera />
            </span>
          </button>
        </Link>
      </div>
      <h2 className="text-center ">Manage Items : {products.length}</h2>
      <div className="hr-style mx-auto  mb-3 "></div>
      <div
        className="container py-3  text-light"
        style={{ backgroundColor: "#578295" }}
      >
        <div className="row ">
          <div className="col-md-1  d-flex justify-content-center pb-1  align-items-center">
            <span className="pe-5">List</span>
          </div>
          <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
            <h5> Image</h5>
          </div>
          <div className="col-md-7 d-flex justify-content-center pb-1  align-items-center">
            <h5>Product Info</h5>
          </div>
          <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
            <h5>Manage</h5>
          </div>
        </div>
      </div>
      <div>
        {products.map((product, index) => (
          <ManageItem
            key={product._id}
            product={product}
            index={index}
            handleDelete={handleDelete}
          ></ManageItem>
        ))}
      </div>

      {/* pagination  */}

      <div className="container pagination-container">
        {[...Array(cameraCount).keys()].map((camera) => (
          <button
            className={page === camera ? "selected" : ""}
            onClick={() => setPage(camera)}
          >
            {camera + 1}
          </button>
        ))}
        <select
          name=""
          id=""
          onChange={(event) => setPageProduct(event.target.value)}
        >
          <option value="5" selected>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default ManageInventories;
