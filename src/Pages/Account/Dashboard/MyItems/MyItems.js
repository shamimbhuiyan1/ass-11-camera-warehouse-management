import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../../Api/axiosPrivate";
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import auth from "../../../../firebase.init";
import ManageItem from "../../ManageItem/ManageItem";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleItems = async () => {
      const email = user.email;
      const url = `https://vast-cove-35645.herokuapp.com/my-items?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(`Forbidden Access .Please Login`, { id: "error" });
          signOut(auth);
          navigate("/login");
        }
      }
    };
    handleItems();
  }, [user, navigate]);

  const handleDelete = (id) => {
    const deleteItem = window.confirm("Be Careful Before deleting this item ");
    if (deleteItem) {
      const url = `https://vast-cove-35645.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const afterDelete = myItems.filter((product) => product._id !== id);
          setMyItems(afterDelete);
        });
    }
  };

  return (
    <div className="py-5 ">
      <PageTitle title="MyItems -"></PageTitle>
      <div className="text-center">
        <h1>Welcome to Your Stock page</h1>
        <div className="hr-style mx-auto  mb-3 "></div>
        <h5>Your Name : {user?.displayName} </h5>
        <p className="pt-3">
          Email : <span className="fw-bold text-warning ">{user?.email}</span>
        </p>
      </div>
      <div>
        <h2 className="text-center mt-3">
          {" "}
          You Stock : {myItems?.length} items
        </h2>
      </div>
      <div className="hr-style mx-auto  mb-3 "></div>
      <div>
        {myItems.map((product, index) => (
          <ManageItem
            key={product._id}
            product={product}
            index={index}
            handleDelete={handleDelete}
          ></ManageItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
