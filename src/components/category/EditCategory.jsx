import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { categoryApi } from '../../api/category/categoryApi';

const EditCategory = ({ category, setOpenEdit }) => {

  const [titlecategory, setTitlecategory] = useState(category.titlecategory);

  const editCategoryHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await categoryApi.put("/update", {
        _id: category._id,
        titlecategory
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente La Categoría.!");
      setOpenEdit(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar MEN&#218; 1 Categor&#237;as.
              </h3>
              <p className="mt-2">
                <form onSubmit={editCategoryHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlecategory">
                      CAMBIAR TITULO DE MEN&#218; 1 CATEGORÍAS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlecategory(e.target.value)} value={titlecategory} id='titlecategory' required />
                      <label htmlFor="titlecategory">
                        CAMBIAR TITULO DE MEN&#218; 1 CATEGORÍAS. :*
                      </label>
                    </div>
                    <hr />
                  </div>
                  <hr />
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Actualizar Cambios.
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

export default EditCategory;