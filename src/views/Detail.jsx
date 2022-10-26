import { useContext } from "react";
import { useParams } from "react-router-dom";

import Context from "../context/Context";

import Icon from "../assets/icons/pizza.png";

export default function Detail() {
  const { id } = useParams();
  const { pizzas, setPizzas } = useContext(Context);

  return (
    <div className="container d-flex justify-content-center py-5">
      {pizzas
        .filter((pizza) => pizza.id === id)
        .map((element, index) => (
          <div className="card card-detail mt-3" key={index}>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={element.img}
                  alt="image"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body pb-0">
                  <h5 className="card-title text-capitalize">{element.name}</h5>
                  <hr className="hr" />
                  <p className="card-text">{element.desc}</p>
                  <p className="h6">Ingredientes</p>
                  <ul className="mt-3 list">
                    {element.ingredients.map((ingredient, i) => (
                      <li key={i}>
                        <img src={Icon} alt="icon" />
                        <span className="ms-2 text-capitalize">
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body d-flex justify-content-between py-0">
                  <h4>
                    Precio {" "}
                    <i className="fas fa-dollar-sign"></i>{" "}
                    {new Intl.NumberFormat("es-CL").format(element.price)}
                  </h4>
                  <button type="button" className="btn btn-danger ms-2">
                    <i className="fas fa-cart-arrow-down"></i> Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
