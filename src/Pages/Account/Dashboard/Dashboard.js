import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageTitle from "../../../Components/PageTitle/PageTitle";

import auth from "../../../firebase.init";
/* import profileImg from "../../../images/user.png"; */

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="py-5">
      <PageTitle title="Profile -"></PageTitle>
      <h2 className="text-center">Welcome {user?.displayName}</h2>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            {user?.photoURL ? (
              // <img className='w-75' src={user?.photoURL} alt="" />
              <img className="w-50" /* src={profileImg} */ alt="" />
            ) : (
              <img className="w-50" /* src={profileImg} */ alt="" />
            )}
          </div>

          <div className="col-md-6 d-flex align-items-center ">
            <h4>Your Email : {user?.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
