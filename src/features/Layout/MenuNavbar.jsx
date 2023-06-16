import React from 'react';

const MenuNavbar = () => {
  return (
    <>
      <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation">
        <span className="navbar-toggle-icon">
          <span className="toggle-line" />
        </span>
      </button>
      <a className="navbar-brand me-1 me-sm-3" href="/" rel="noopener noreferrer">
        <div className="d-flex align-items-center">
          <img
            className="me-2"
            width={200}
            height={200}
            src="../../../assets/img/icons/logonv.png"
            alt="Nury Valenzuela&#174; Joyer&iacute;a &#45; SISTEMA DE CONTROL DE INVENTARIOS."
            title="Nury Valenzuela&#174; Joyer&iacute;a &#45; SISTEMA DE CONTROL DE INVENTARIOS." />
        </div>
      </a>
    </>
  );
};

export default MenuNavbar;
