import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { colorGoldApi } from '../../api/color/colorGoldApi';

const AddcolorGold = () => {

  const [titlecolorgold, setTitlecolorgold] = useState('');

  const addColorgoldHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await colorGoldApi.post('/add', {

        titlecolorgold

      });

      console.log(data);
      toast.success('¡.Has Añadido Correctamente Un Nuevo El Color De Oro.!');
      setTitlecolorgold('');

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo El Color De Oro.!');

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
                  <i className="fa-solid fa-square-plus"></i> Agregar El Color De Oro 🖌️.
                </code>
              </h3>
              <p className="mt-2">
                <NavLink className="btn btn-link ps-0 btn-sm" to="/colorsgolds" rel="noopener noreferrer">
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <i className="fa-solid fa-eye"></i> Volver Ver El Color De Oro 🖌️. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </NavLink>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> El Color De Oro 🖌️ Recientes.
              </h3>
              <p className="mt-2">
                <form onSubmit={addColorgoldHandler}>
                  <div>
                    <hr />
                    <label htmlFor="titlecolorgold">
                      EL COLOR DE ORO 🖌️. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitlecolorgold(e.target.value)} value={titlecolorgold} id='titlecolorgold' required />
                      <label htmlFor="titlecolorgold">
                        EL COLOR DE ORO 🖌️. :*
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

export default AddcolorGold;