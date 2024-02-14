import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { RouterProvider, Outlet,Routes,Route,BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import ContextWrapper from "./context/ContextWrapper";
const App = () => {

  return (
    <Router>
    <ContextWrapper>
        <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/user/:id" element={<User/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
           </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </ContextWrapper>
    </Router>
  );
};

export default App;
