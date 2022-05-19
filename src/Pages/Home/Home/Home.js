import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Business from "../BusinessInfo/BusinessInfo";
import Integration from "../Integration/Integration";
import JoinForm from "../JoinForm/JoinForm";
import Products from "../Products/Products";
import Showup from "../ShowUp/ShowUp";

/* import MobileApp from '../MobileApp/MobileApp'; */

const Home = () => {
  return (
    <div>
      <PageTitle title=""></PageTitle>
      <Banner />
      <Integration />
      <Showup />
      <Products />
      <div className="container d-flex justify-content-end">
        <Link to="/manage-inventories">
          <button className="btn btn-success">Manage Inventories</button>
        </Link>
      </div>
      <Business />
      {/* <MobileApp/> */}
      <JoinForm />
    </div>
  );
};

export default Home;
