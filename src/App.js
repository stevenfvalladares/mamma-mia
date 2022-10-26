import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styles ccs
import "./assets/css/styles.css";
// import of Bootstrap styles and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import of mdb styles
import "mdb-ui-kit/css/mdb.min.css";

// import components
import Context from "./context/Context";
import Favicon from "react-favicon";
import Navbar from "./components/Navbar";

// import views
import Home from "./views/Home";
import Detail from "./views/Detail";
import ShoppingCart from "./views/ShoppingCart";
import NotFound from "./views/NotFound";


export default function App() {
  const [pizzas, setPizzas] = useState([]);
  const globalState = { pizzas, setPizzas };

  const endpoint = "/pizzas.json";

  const getData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();

    let pizzas = data;

    setPizzas(pizzas);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Context.Provider value={globalState}>
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
      </Context.Provider>
    </>
  );
}


