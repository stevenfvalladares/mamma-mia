import React from "react";

import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <div className="bg-image image text-center shadow-1-strong mb-5 text-white">
        <div className="col-md-8 p-lg-5 mx-auto">
          <h1 className="display-5 fw-normal">¡Pizzería Mamma Mia!</h1>
          <p className="lead fw-normal">
            ¡Tenemos las mejores Pizzas que podrás encontrar!
          </p>
          <hr className="hr hr-blurry bg-light" />
        </div>
      </div>
      <div className="container">
        <div className="card-section grid-columns-4 p-3">
          <Card />
        </div>
      </div>
    </main>
  );
}
