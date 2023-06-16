import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { tripletecategoryApi } from '../../api/tripletecategory/tripletecategoryApi';

const EditTripletecategory = ({ tripletecategory, setOpenEdit }) => {

  const [titletripletecategory, setTitletripletecategory] = useState(tripletecategory.titletripletecategory);

  const editTripletecategoryHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await tripletecategoryApi.put("/update", {
        _id: tripletecategory._id,
        titletripletecategory
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente Multiples Categorías.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar MEN&#218; 3 Categor&#237;as.
              </h3>
              <p className="mt-2">
                <form onSubmit={editTripletecategoryHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titletripletecategory">
                      CAMBIAR TITULO DE MEN&#218; 3 CATEGORÍAS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitletripletecategory(e.target.value)} value={titletripletecategory} id='titletripletecategory' required />
                      <label htmlFor="titletripletecategory">
                        CAMBIAR TITULO DE MEN&#218; 3 CATEGORÍAS. :*
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

export default EditTripletecategory;