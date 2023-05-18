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
                SISTEMA DE CONTROL DE INVENTARIOS.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
