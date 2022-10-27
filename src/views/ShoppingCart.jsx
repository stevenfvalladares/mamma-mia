import React from "react";

export default function ShoppingCart() {
  return (
    <div className="container-fluid bg-light bg-gradient vh-100 d-flex justify-content-center py-5 px-5">
      <div className="w-50 me-2">
        <ul className="list-group list-group-light me-3 shadow-5">
          <li className="list-group-item d-flex pe-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                alt=""
                className="shopping-cart-img"
              />
              <div className="ms-3">
                <p className="fw-bold mb-0">Napolitana</p>
              </div>
            </div>
            <div>
              <h6 className="text-success mb-1">
                <i className="fas fa-dollar-sign"></i>{" "}
                {new Intl.NumberFormat("es-CL").format(5950)}
              </h6>
              <i className="far fa-minus-square" role="button"></i>{" "}1{" "}<i className="far fa-plus-square" role="button"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-auto">
        <div className="card w-auto">
          <div className="card-body">
            <h5 className="card-title">Total del pedido</h5>
            <h5>
              <i className="fas fa-dollar-sign"></i>{" "}
              {new Intl.NumberFormat("es-CL").format(5950)}
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
