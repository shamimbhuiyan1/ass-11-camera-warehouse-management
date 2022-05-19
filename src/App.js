import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Pages/Account/Dashboard/Dashboard";
import Login from "./Pages/Account/Login/Login";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="overflow-hidden">
      <h2>Online Camera Warehouse</h2>
      <Toaster />
      <Header />
      <Routes>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
