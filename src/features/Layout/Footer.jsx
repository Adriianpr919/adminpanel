import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row g-0 justify-content-between fs--1 mt-4 mb-3">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">
              CopyRight &copy; {new Date().getFullYear()}. :* <span className="d-none d-sm-inline-block"> | </span><br className="d-sm-none" /> <a href="https://nuryvalenzuelajoyeria.com.co/" rel="noopener noreferrer">nuryvalenzuelajoyeria.com</a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-600">
              <span className="special" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                Nury Valenzuela.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
