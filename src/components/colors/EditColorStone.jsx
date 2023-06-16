import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { colorStoneApi } from '../../api/color/colorStoneApi';

const EditColorStone = ({ colorstone, setOpenEdit }) => {

  const [titlecolorstone, setTitlecolorstone] = useState(colorstone.titlecolorstone);

  const editColorstoneHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await colorStoneApi.put("/update", {
        _id: colorstone._id,
        titlecolorstone
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Color De Piedra.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar El Color De Piedras 🖌️.
              </h3>
              <p className="mt-2">
                <form onSubmit={editColorstoneHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlecolorstone">
                      CAMBIAR EL COLOR DE PIEDRAS 🖌️. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlecolorstone(e.target.value)} value={titlecolorstone} id='titlecolorstone' required />
                      <label htmlFor="titlecolorstone">
                        CAMBIAR EL COLOR DE PIEDRAS 🖌️. :*
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

export default EditColorStone;