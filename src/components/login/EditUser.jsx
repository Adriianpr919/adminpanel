import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../api/login/userApi';

const EditUser = ({ user, setOpenEditUser }) => {

  const [fullname, setFullname] = useState(user.fullname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const editUserHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await userApi.put("/update", {
        _id: user._id,
        fullname,
        username,
        email,
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Usuario.!");
      setOpenEditUser(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Usuario. - <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "20px" }}>{user.username}</span>
              </h3>
              <div className="close-form" onClick={() => setOpenEditUser(false)}>X</div>
              <p className="mt-2">
                <hr />
                <form onSubmit={editUserHandler}>
                  <div>
                    <label htmlFor="fullname">
                      CAMBIAR DE NOMBRE COMPLETO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setFullname(e.target.value)} value={fullname} id='fullname' required />
                      <label htmlFor="fullname">
                        CAMBIAR DE NOMBRE COMPLETO. :*
                      </label>
                    </div>
                    <label htmlFor="username">
                      CAMBIAR DE USUARIO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setUsername(e.target.value)} value={username} id='username' required />
                      <label htmlFor="username">
                        CAMBIAR DE USUARIO. :*
                      </label>
                    </div>
                    <label htmlFor="email">
                      CAMBIAR DE CORREO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' required />
                      <label htmlFor="email">
                        CAMBIAR DE CORREO. :*
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

export default EditUser;
