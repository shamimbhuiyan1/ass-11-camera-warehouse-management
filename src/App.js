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

function App() {
  return (
    <div className="overflow-hidden">
      <h2>Online Camera Warehouse</h2>
      <Toaster />
      <Header />
      <Routes>
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

        <Route path="blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
