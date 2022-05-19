import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { SiMinutemailer } from "react-icons/si";
import "./JoinForm.css";
const JoinForm = () => {
  return (
    <div className="container news-img mb-4">
      <div className="row ">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="py-2 text-success">Join With Our Warehouse </h3>
            <div>
              <Form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control fw-bold"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="button-addon2"
                  />
                  <Button
                    className="btn btn-success"
                    type="button"
                    id="button-addon2"
                  >
                    <span>
                      <SiMinutemailer />
                    </span>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default JoinForm;
