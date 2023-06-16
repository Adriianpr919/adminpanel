import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { colorGoldApi } from '../../api/color/colorGoldApi';

const EditColorGold = ({ colorgold, setOpenEdit }) => {

  const [titlecolorgold, setTitlecolorgold] = useState(colorgold.titlecolorgold);

  const editColorgoldHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await colorGoldApi.put("/update", {
        _id: colorgold._id,
        titlecolorgold
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Color De Oro.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar El Color De Oro 🖌️.
              </h3>
              <p className="mt-2">
                <form onSubmit={editColorgoldHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlecolorgold">
                      CAMBIAR EL COLOR DE ORO 🖌️. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlecolorgold(e.target.value)} value={titlecolorgold} id='titlecolorgold' required />
                      <label htmlFor="titlecolorgold">
                        CAMBIAR EL COLOR DE ORO 🖌️. :*
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

export default EditColorGold;