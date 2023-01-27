import Header from "./component/layout/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import SingleProduct from "./pages/SingleProduct.js";
import About from "./pages/About.js";

function App() {
  return (
    <Router>
      <Header style={{zIndex:1000,position:"Relative"}} />
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/laptop" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
