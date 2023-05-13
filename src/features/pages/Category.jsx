import React from 'react';
import AllCategories from '../../components/category/AllCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = () => {
  return (
    <>
      <hr className="my-4" />
      <main className="main" id="top">
        <div className="container" data-layout="container">
          <div className="content">
            <div className="card mb-3">
              <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
              <div className="card-body position-relative">
                <div className="row">
                  <div className="col-lg-12">
                    <h3>
                      <code>
                        <FontAwesomeIcon icon="fa-solid fa-gear" /> Listado De MEN&#218; 1 Categor&#237;as.
                      </code>
                    </h3>
                    <a className="btn btn-link ps-0 btn-sm" href="/addcategory" rel="noopener noreferrer">
                      <code className='badge rounded-pill badge-soft-primary' style={{ fontSize: "20px" }}>
                        <i className="fa-solid fa-square-plus"></i> Agregar MEN&#218; 1 Categor&#237;as.
                      </code>
                    </a>
                    <a className="btn btn-link ps-0 btn-sm" href="/category" rel="noopener noreferrer">
                      <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                        <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La Página. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                      </code>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <>
              <AllCategories />
            </>
          </div>
        </div>
      </main>
    </>
  );
}

export default Category;