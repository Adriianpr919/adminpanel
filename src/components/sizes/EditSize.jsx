import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sizeApi } from '../../api/size/sizeApi';

const EditSize = ({ size, setOpenEdit }) => {

  const [titlesize, setTitlesize] = useState(size.titlesize);

  const editSizeHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await sizeApi.put("/update", {
        _id: size._id,
        titlesize
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente La Talla.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar La Talla 📏.
              </h3>
              <p className="mt-2">
                <form onSubmit={editSizeHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlesize">
                      CAMBIAR &#35; LA TALLA 📏. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlesize(e.target.value)} value={titlesize} id='titlesize' required />
                      <label htmlFor="titlesize">
                        CAMBIAR &#35; LA TALLA 📏. :*
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

export default EditSize;