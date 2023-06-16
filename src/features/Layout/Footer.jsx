import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row g-0 justify-content-between fs--1 mt-4 mb-3">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">
              CopyRight &copy; Nury Valenzuela&#174; Joyer&iacute;a &#45; SISTEMA DE CONTROL DE INVENTARIOS. &#45; {new Date().getFullYear()}. &#124; Todos Los Derechos Reservados.
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">
              <span className="special" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                Nury Valenzuela&#174;
              </span> Joyer&iacute;a
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
