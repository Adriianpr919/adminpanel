import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewOrderClient = ({ setOpenView, orderclient }) => {
  const date = orderclient.createdAt;
  const uint8 = new Uint32Array([orderclient.price]);
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> NUMERO #. :* {orderclient.number}
              </h3>
              <hr className="my-2" />
              <h3 className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> REFERENCIA. :* {orderclient.reference}
              </h3>
              <hr className="my-2" />
              <h3 className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> NOMBRE DE CLIENTE. :* {orderclient.client}
              </h3>
              <div className="close-form" onClick={() => setOpenView(false)}>X</div>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> MARCADOR. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {orderclient.marker}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> CORREO. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {orderclient.email}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> DIRECCIÓN. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {orderclient.address}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {orderclient.description}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> TELÉFONO O CELULAR. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {orderclient.phone}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> PRECIO. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-success" style={{ textAlign: "justify" }}>
                  {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> FECHA. :*
                  </span>
                </h3>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black" }}>
                  {(date)?.substring(0, 10)}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrderClient;