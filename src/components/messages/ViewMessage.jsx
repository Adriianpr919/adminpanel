import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewMessage = ({ messageopcion, setOpenViewMessageopcion }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 style={{ textAlign: "justify", color: "black" }}>
                Nombre Completo. :*
              </h3>
              <p className="mt-2" style={{ textAlign: "justify", color: "black" }}>
                <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon="fa-solid fa-eye" /> {messageopcion.fullname}
                </span>
              </p>
              <div className="close-form" onClick={() => setOpenViewMessageopcion(false)}>X</div>
              <hr />
              <h3 style={{ textAlign: "justify", color: "black" }}>
                Mensaje. :*
              </h3>
              <p className="description" style={{ textAlign: "justify", color: "black" }}>
                <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon="fa-solid fa-eye" /> {messageopcion.comment}
                </span>
              </p>
              <hr />
              <h3 style={{ textAlign: "justify", color: "black" }}>
                Fecha. :*
              </h3>
              <p className="mt-2" style={{ textAlign: "justify", color: "black" }}>
                <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon="fa-solid fa-eye" /> {messageopcion.createdAt.slice(0, 10)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMessage;