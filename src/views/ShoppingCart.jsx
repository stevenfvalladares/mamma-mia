import React, { useContext, useEffect } from "react";

import Context from "../context/Context";

export default function ShoppingCart() {
  const { cart, incrementOrder, decrementOrder , total} = useContext(Context);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="cart-container container-fluid bg-light bg-gradient vh-100 d-flex justify-content-center py-5 px-5">
      <div className="w-50 me-2">
        <ul className="list-group list-group-light me-3 shadow-5">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex pe-3 justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img src={item.img} alt="image" className="shopping-cart-img" />
                <div className="ms-3">
                  <p className="fw-bold mb-0 text-capitalize">{item.name}</p>
                </div>
              </div>
              <div>
                <h6 className="text-success mb-1">
                  <i className="fas fa-dollar-sign"></i>{" "}
                  {new Intl.NumberFormat("es-CL").format(
                    item.price * item.quantity
                  )}
                </h6>
                <i className="far fa-minus-square" role="button" onClick={() => decrementOrder(index)}></i> {` ${item.quantity} `}
                <i className="far fa-plus-square" role="button" onClick={() => incrementOrder(index)}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-auto">
        <div className="card w-auto">
          <div className="card-body">
            <h5 className="card-title">Total del pedido</h5>
            <h5>
              <i className="fas fa-dollar-sign"></i>{" "}
              {new Intl.NumberFormat("es-CL").format(total)}
            </h5>
            <button type="button text" className="btn btn-primary">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
