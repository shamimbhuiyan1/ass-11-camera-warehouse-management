import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
import "./SocialAccount.css";

const SocialAccount = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  //google success
  if (googleUser) {
    navigate(from);
    toast.success(`Welcome to Camera House `, { id: "welcome" });
  }

  // loading
  if (googleLoading) {
    return <Loading />;
  }

  //error handle
  let errorMessage;
  if (googleError) {
    errorMessage = (
      <p className="text-danger">Something is wrong.Try again please</p>
    );

    toast.error(`Something is wrong`, { id: "error" });
  }

  return (
    <div>
      <div
        onClick={() => signInWithGoogle()}
        className="social-icon py-2 d-flex  container"
      >
        <img width={50} src={google} alt="" />
        <span className="fs-5 ps-3 text-light ">Log in with google</span>
      </div>
      {errorMessage}
      <div className="d-flex align-items-center justify-content-center ">
        <div
          style={{ height: "2px", width: "40%" }}
          className="line-left d-block bg-dark"
        ></div>
        <p className="mt-2 px-3">Or</p>
        <div
          style={{ height: "2px", width: "40%" }}
          className="line-right d-block bg-dark"
        ></div>
      </div>
    </div>
  );
};

export default SocialAccount;
