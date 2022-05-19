import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="overflow-hidden">
      <h2>Online Camera Warehouse</h2>
      <Toaster />
      <Header />
      <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
