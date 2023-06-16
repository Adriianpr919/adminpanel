import React from 'react';

const page404 = () => {
  return (
    <main className="main" id="main">
      <section className="py-0">
        <div className="container">
          <div className="flex-center min-vh-100 py-6 row">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-11">
              <a className="text-decoration-none" href="/" rel="noopener noreferrer">
                <div className="d-flex flex-center fw-bolder fs-5 mb-4">
                  <img className="me-2" src="../../../assets/img/icons/logonv.png" alt="Error HTTP: - .404." title="Error HTTP: - .404." width={58} />
                </div>
              </a>
              <div className="text-center card">
                <div className="p-5 card-body">
                  <div className="display-1 text-300 fs-error">
                    Error HTTP: - .404.
                  </div>
                  <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold" style={{ fontSize: "15px" }}>
                    Lo sentimos, no podemos encontrar esa p&#225;gina.<br /> Encontrar&#225; mucho para explorar<br /> en la p&#225;gina de inicio.
                  </p><hr />
                  <a className="btn btn-primary btn-sm mt-3" href="/" rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg> VOLVER LA P&#193;GINA PRINCIPAL.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page404;