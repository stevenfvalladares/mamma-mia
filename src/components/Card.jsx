import React from "react";

import Icon from "../assets/icons/pizza.png";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
        className="card-img-top"
        alt="Chicago Skyscrapers"
      />
      <div className="card-body pb-0">
        <h5 className="card-title fw-bolder">Card title</h5>
        <hr className="hr" />
        <p className="h6 fw-semibold">Ingredientes</p>
        <ul className="mt-3 list">
          <li>
            <img src={Icon} alt="icon" />
            <span className="ms-2">Ingrediente</span>
          </li>
          <li>
            <img src={Icon} alt="icon" />
            <span className="ms-2">Ingrediente</span>
          </li>
          <li>
            <img src={Icon} alt="icon" />
            <span className="ms-2">Ingrediente</span>
          </li>
          <li>
            <img src={Icon} alt="icon" />
            <span className="ms-2">Ingrediente</span>
          </li>
        </ul>
      </div>
      <hr className="hr mt-0" />
      <div className="card-body mt-0 pt-0 text-center">
        <h4 className="mb-3">$ 0.00</h4>
        <button type="button" className="btn btn-info">
          <i className="bi bi-eye"></i> Ver Más
        </button>
        <button type="button" className="btn btn-danger ms-2">
          <i className="bi bi-cart-plus"></i> Añadir
        </button>
      </div>
    </div>
  );
}
