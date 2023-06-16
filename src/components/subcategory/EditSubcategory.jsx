import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';

const EditSubcategory = ({ subcategory, setOpenEdit }) => {

  const [titlesubcategory, setTitlesubcategory] = useState(subcategory.titlesubcategory);

  const editSubcategoryHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await subcategoryApi.put("/update", {
        _id: subcategory._id,
        titlesubcategory
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente SubCategoría.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar MEN&#218; 2 Categor&#237;as.
              </h3>
              <p className="mt-2">
                <form onSubmit={editSubcategoryHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlesubcategory">
                      CAMBIAR TITULO DE MEN&#218; 2 CATEGORÍAS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlesubcategory(e.target.value)} value={titlesubcategory} id='titlesubcategory' required />
                      <label htmlFor="titlesubcategory">
                        CAMBIAR TITULO DE MEN&#218; 2 CATEGORÍAS. :*
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

export default EditSubcategory;