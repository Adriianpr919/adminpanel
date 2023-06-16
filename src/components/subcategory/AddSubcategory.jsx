import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';

const AddSubcategory = () => {

  const [titlesubcategory, setTitlesubcategory] = useState('');

  const addSubcategoryHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await subcategoryApi.post('/add', {

        titlesubcategory

      });

      console.log(data);
      toast.success('¡.Has Añadido Correctamente Un Nuevo SubCategoría.!');
      setTitlesubcategory('');

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo SubCategoría.!');

    }

  }

  return (
    <>
      <hr className="my-4" />
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <code>
                  <i className="fa-solid fa-square-plus"></i> Agregar MEN&#218; 2 Categor&#237;as.
                </code>
              </h3>
              <p className="mt-2">
                <NavLink className="btn btn-link ps-0 btn-sm" to="/subcategory" rel="noopener noreferrer">
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <i className="fa-solid fa-eye"></i> Volver Ver MEN&#218; 2 Categor&#237;as. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </NavLink>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> MEN&#218; 2 Categor&#237;as Recientes.
              </h3>
              <p className="mt-2">
                <form onSubmit={addSubcategoryHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlesubcategory">
                      TITULO DE MEN&#218; 2 CATEGORÍAS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlesubcategory(e.target.value)} value={titlesubcategory} id='titlesubcategory' required />
                      <label htmlFor="titlesubcategory">
                        TITULO DE MEN&#218; 2 CATEGORÍAS. :*
                      </label>
                    </div>
                    <hr />
                  </div>
                  <hr />
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faPlus} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Agregar.
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubcategory;