import data from "./DataBase/Data";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Product from "./Components/Product/Product";
import Profile from "./Components/Profile/Profile";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Product-Info/:productId" element={<ProductInfo data={data}/>} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
