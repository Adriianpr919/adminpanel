import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewAbout = ({ setOpenView, about }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> {about.titleOne}
              </h3>
              <div className="close-form" onClick={() => setOpenView(false)}>X</div>
              <hr />
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagen Principal 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <span className="item2 mb-2">
                      <img src={about.imageOne} alt={about.titleOne} title={about.titleOne} />
                    </span>
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.descriptionOne}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Titulo. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.titleTwo}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.descriptionTwo}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Titulo. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.titleThree}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.descriptionThree}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagen Principal 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <span className="item2 mb-2">
                      <img src={about.imageFour} alt={about.titleFour} title={about.titleFour} />
                    </span>
                  </div>
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Titulo. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.titleFour}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.descriptionFour}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Titulo. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {about.titleFive}
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagen Principal 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <span className="item2 mb-2">
                      <img src={about.imageMother} alt={about.titleFive} title={about.titleFive} />
                    </span>
                  </div>
                </p>
              </p>

              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagen Principal 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <span className="item2 mb-2">
                      <img src={about.imageDaughter} alt={about.titleFive} title={about.titleFive} />
                    </span>
                  </div>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAbout;