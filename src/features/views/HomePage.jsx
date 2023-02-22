import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-lg-12 col-xl-12 col-xxl-12 mb-12 ps-lg-12">
          <div className="card h-lg-100">
            <div className="bg-holder bg-card" style={{ backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/corner-1.png)' }} />
            {/*/.bg-holder*/}
            <div className="card-body position-relative">
              <h5 className="text-warning">
                Administrador.
              </h5>
              <p className="fs--1 mb-0">
              </p>
              <a className="btn btn-link fs--1 text-warning mt-lg-3 ps-0" href="/" rel="noopener noreferrer">
                Bienvenida De Nuevo, <span className="special" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  Nury Valenzuela.
                </span>
                <span className="fas fa-chevron-right ms-1" data-fa-transform="shrink-4 down-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
