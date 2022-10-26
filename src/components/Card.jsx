import React, { useContext } from "react";
import Context from "../context/Context";
import Icon from "../assets/icons/pizza.png";

export default function Card() {
  const { pizzas, setPizzas } = useContext(Context);

  return (
    <>
      {pizzas.map((pizza, index) => (
        <div className="card" key={index}>
          <img src={pizza.img} className="card-img-top" alt="image" />
          <div className="card-body pb-0">
            <h5 className="card-title text-capitalize">{pizza.name}</h5>
            <hr className="hr" />
            <p className="h6">Ingredientes</p>
            <ul className="mt-3 list">
              <li>
                <img src={Icon} alt="icon" />
                <span className="ms-2 text-capitalize">
                  {pizza.ingredients[0]}
                </span>
              </li>
              <li>
                <img src={Icon} alt="icon" />
                <span className="ms-2 text-capitalize">
                  {pizza.ingredients[1]}
                </span>
              </li>
              <li>
                <img src={Icon} alt="icon" />
                <span className="ms-2 text-capitalize">
                  {pizza.ingredients[2]}
                </span>
              </li>
              <li>
                <img src={Icon} alt="icon" />
                <span className="ms-2 text-capitalize">
                  {pizza.ingredients[3]}
                </span>
              </li>
            </ul>
          </div>
          <hr className="hr mt-0" />
          <div className="card-body mt-0 pt-0 text-center">
            <h4 className="mb-3">
              <i className="fas fa-dollar-sign"></i>{" "}
              {new Intl.NumberFormat("es-CL").format(pizza.price)}
            </h4>
            <button type="button" className="btn btn-info">
              <i className="fas fa-eye"></i> Ver Más
            </button>
            <button type="button" className="btn btn-danger ms-2">
              <i className="fas fa-cart-arrow-down"></i> Añadir
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
