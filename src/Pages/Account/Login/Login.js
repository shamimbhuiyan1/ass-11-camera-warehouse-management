import axios from "axios";
import React, { useRef, useState } from "react";

import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import Loading from "../../../Components/Loading/Loading";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import auth from "../../../firebase.init";
/* import SocialAccount from "../SocialAccount/SocialAccount"; */
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const emailRef = useRef("");

  //navigate
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  //handle email
  const handleEmail = (event) => {
    const emailValue = event.target.value;
    if (/\S+@\S+\.\S+/.test(emailValue)) {
      setEmail({ value: emailValue, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
  };

  //handle password
  const handlePassword = (event) => {
    const passwordValue = event.target.value;
    if (passwordValue.length < 6) {
      setPassword({ value: "", error: "Password not match" });
    } else {
      setPassword({ value: passwordValue, error: "" });
    }
  };

  // navigate
  if (user) {
  }

  //loading
  if (sending) {
    return <Loading />;
  }

  //error
  if (loginError) {
    toast.error(`Sorry ! No User  found`, { id: "userError" });
  }

  //handle submit btn
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }

    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }

    if (email.value && password.value) {
      await signInWithEmailAndPassword(email.value, password.value);
      const { data } = await axios.post(
        "https://camera-warehouse.herokuapp.com/login",
        { email }
      );
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      navigate(from, { replace: true });
      toast.success(`Welcome Back To Warehouse `, { id: "welcome" });
    }
  };

  // reset password
  const forgetPassword = async () => {
    const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success(`Rest password send `, { id: "reset" });
    }
    if (resetError) {
      toast.error(`Email is incorrect `, { id: "errorSend" });
    }
  };

  return (
    <div className="login-container">
      <PageTitle title="Login -"></PageTitle>
      <div className=" account-container container py-5 ">
        <div className=" custom-style ">
          <h3 className="text-center mb-3 py-4 fst-italic">Welcome Back</h3>
          {/* <SocialAccount /> */}
          {loginError && (
            <p className="text-danger fs-4"> Could not find user </p>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control
                type="email"
                ref={emailRef}
                onBlur={handleEmail}
                className="py-2 fs-5 fst-italic"
                placeholder="Enter email"
              />
            </Form.Group>
            {email?.error && <p className="text-danger"> {email.error}</p>}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={handlePassword}
                className="py-2 fs-5 fst-italic"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* error handle  */}
            {password?.error && (
              <p className="text-danger"> {password.error}</p>
            )}

            {loginError && <p className="text-danger"> Password is Wrong</p>}
            <Button variant="primary" type="submit" className="w-100 fs-5">
              Login
            </Button>
          </Form>
          <div className="d-flex mt-2">
            <p>
              <button
                className="btn btn-link text-primary fw-bold ps-0 pe-5 text-decoration-none"
                onClick={forgetPassword}
              >
                Forget Password
              </button>{" "}
            </p>
            <div>{loading && <Loading />}</div>
          </div>
          <p className="toggle-page py-2 ">
            New to Camera House ?{" "}
            <span onClick={() => navigate("/signup")}>Create New Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
