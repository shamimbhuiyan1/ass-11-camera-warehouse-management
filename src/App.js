import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Pages/Account/Dashboard/Dashboard";
import Login from "./Pages/Account/Login/Login";
import RequireAuth from "./Pages/Account/RequireAuth/RequireAuth";
import Signup from "./Pages/Account/SignUp/SignUp";
import Blog from "./Pages/Blog/Blog";
import ManageInventories from "./Pages/Account/ManageInventories/ManageInventories";
import MyItems from "./Pages/Account/Dashboard/MyItems/MyItems";
import StokeItem from "./Pages/Account/StokeItem/StockItem";
import Footer from "./Pages/Footer/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDtail";

function App() {
  return (
    <div className="overflow-hidden">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/manage-inventories"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/stock-item"
          element={
            <RequireAuth>
              <StokeItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
