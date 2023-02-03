import Header from "./component/layout/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import SingleProduct from "./pages/SingleProduct.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Cart from "./pages/Cart.js";
import Payment from "./pages/Payment.js";
import Ordered from "./pages/Ordered.js";

function App() {
  return (
    <Router>
      <Header style={{ zIndex: 1000, position: "Relative" }} />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/payment/ordered" element={<Ordered/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
