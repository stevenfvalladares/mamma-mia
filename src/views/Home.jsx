import React from "react";

/* import styles ccs */
import styles from "../assets/css/styles.css"

export default function Home() {
  return (
    <main>
      <div className="bg-image image text-center shadow-1-strong mb-5 text-white">
        <div className="col-md-8 p-lg-5 mx-auto my-5">
          <h1 className="display-5 fw-normal">¡Pizzería Mamma Mia!</h1>
          <p className="lead fw-normal">
            ¡Tenemos las mejores Pizzas que podrás encontrar!
          </p>
          <hr class="hr hr-blurry bg-light" />
        </div>
        
      </div>
    </main>
  );
}
