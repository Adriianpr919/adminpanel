import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../api/login/userApi';

const ChangePassUser = ({ user, setOpenChangePassUser }) => {

  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const changePassHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error('¡.Las Contraseñas NO Coinciden.!');
      return;
    } else {

      try {

        const { data } = await userApi.put("/update", {
          _id: user._id,
          password,
        });

        console.log(data);
        toast.success("¡.Has Actualizado Correctamente La Contraseña.!");
        setOpenChangePassUser(false);

      } catch (err) {
        toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
      }

    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Cambiar La Contraseña Para. - <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "20px" }}>{user.username}</span>
              </h3>
              <div className="close-form" onClick={() => setOpenChangePassUser(false)}>X</div>
              <p className="mt-2">
                <hr />
                <form onSubmit={changePassHandler}>
                  <div>
                    <label htmlFor="pass">
                      CAMBIAR NUEVA CONTRASEÑA. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} id='pass' required />
                      <label htmlFor="pass">
                        CAMBIAR NUEVA CONTRASEÑA. :*
                      </label>
                    </div>
                    <label htmlFor="r_pass">
                      CAMBIAR REESCRIBA NUEVA CONTRASEÑA. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="password" onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} id='r_pass' required />
                      <label htmlFor="r_pass">
                        CAMBIAR REESCRIBA NUEVA CONTRASEÑA. :*
                      </label>
                    </div>
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
};

export default ChangePassUser;
