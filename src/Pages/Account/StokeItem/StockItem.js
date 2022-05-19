import axios from "axios";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { ImBoxAdd } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import auth from "../../../firebase.init";

import "./StokeItem.css";

const StokeItem = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  //handleStoke
  const handleStoke = (event) => {
    event.preventDefault();
    const cameraInfo = {
      displayName: user.displayName,
      email: user.email,
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
      supplier: event.target.supplier.value,
      afPoints: event.target.afPoints.value,
      modes: event.target.modes.value,
      movieType: event.target.movieType.value,
      brand: event.target.brand.value,
      brandId: event.target.brandId.value,
      sold: event.target.sold.value,
      ratings: event.target.ratings.value,
    };
    // console.log(cameraInfo);
    if (
      cameraInfo.name === "" ||
      cameraInfo.price === "" ||
      cameraInfo.description === "" ||
      cameraInfo.img === "" ||
      cameraInfo.quantity === "" ||
      cameraInfo.supplier === "" ||
      cameraInfo.afPoints === "" ||
      cameraInfo.modes === "" ||
      cameraInfo.movieType === "" ||
      cameraInfo.brand === "" ||
      cameraInfo.brandId === "" ||
      cameraInfo.sold === "" ||
      cameraInfo.ratings === ""
    ) {
      toast.error(`Please Give All Info `, { id: "info" });
    } else {
      axios
        .post("https://camera-warehouse.herokuapp.com/product", cameraInfo)
        .then((response) => {
          console.log(response);
          toast.success(`Your Camera Is Stoked `, { id: "stokeItem" });
          event.target.reset();
          navigate("/my-items");
        })
        .catch(function (error) {
          toast.error(`Something is wrong . Try later `, { id: "stokeError" });
        });
    }
  };

  return (
    <div className=" py-5  stoke-container">
      <PageTitle title="Stock -"></PageTitle>
      <h2 className="text-center pt-3 "> Stoke Item From Here</h2>
      <div className="hr-style mx-auto pt-1 ">
        <hr />
      </div>
      <div className="container w-75 mx-auto py-5 stoke-form">
        <Form noValidate onSubmit={handleStoke}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                type="text"
                value={user?.displayName}
                placeholder="Full Name"
                required
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                type="email"
                value={user?.email}
                name="email"
                placeholder="Email"
                required
                disabled
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Camera Name"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                name="price"
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Control
                type="text"
                name="brand"
                placeholder="Brand"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Control
                type="number"
                name="sold"
                placeholder="Sold"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Control
                type="number"
                name="ratings"
                placeholder="Ratings"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Control
                type="number"
                name="brandId"
                placeholder="Brand Id "
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                type="text"
                name="img"
                placeholder="Image url"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                name="afPoints"
                placeholder="AF Points"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                name="movieType"
                placeholder="Movie Type"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="modes"
                placeholder="Modes"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </Form.Group>
          </Row>
          <Button className="bg-success fw-bold mt-3" type="submit">
            Stoke Now{" "}
            <span className="fs-5 ps-3 ">
              <ImBoxAdd />
            </span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StokeItem;
