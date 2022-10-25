import { BrowserRouter, Routes, Route } from "react-router-dom";

// import of Bootstrap styles and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import components
import Favicon from "react-favicon";
import Navbar from "./components/Navbar";

// import views
import Home from "./views/Home"
import Detail from "./views/Detail"
import ShoppingCart from "./views/ShoppingCart"
import NotFound from "./views/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Favicon url="https://img.icons8.com/doodle/96/000000/pizza--v1.png" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Detail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
