import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditUser = ({ user, setOpenEditUser }) => {

  const [nombres, setNombres] = useState(user.nombres);
  const [apellidos, setApellidos] = useState(user.apellidos);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [rol, setRol] = useState(user.rol);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);

  const editUserHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.put("/api/users/update", {
        _id: user._id,
        nombres,
        apellidos,
        username,
        email,
        rol,
        isAdmin
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
                    <label htmlFor="nombres">
                      CAMBIAR DE NOMBRE. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setNombres(e.target.value)} value={nombres} id='nombres' required />
                      <label htmlFor="nombres">
                        CAMBIAR DE NOMBRE. :*
                      </label>
                    </div>
                    <label htmlFor="apellidos">
                      CAMBIAR DE APELLIDO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setApellidos(e.target.value)} value={apellidos} id='apellidos' required />
                      <label htmlFor="apellidos">
                        CAMBIAR DE APELLIDO. :*
                      </label>
                    </div>
                    <label htmlFor="username">
                      CAMBIAR DE USUARIO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setUsername(e.target.value)} value={username} id='username' required />
                      <label htmlFor="username">
                        CAMBIAR DE USUARIO. :*
                      </label>
                    </div>
                    <label htmlFor="email">
                      CAMBIAR DE CORREO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' required />
                      <label htmlFor="email">
                        CAMBIAR DE CORREO. :*
                      </label>
                    </div>
                    <label htmlFor="rol">
                      <i className="fa-solid fa-users"></i> CAMBIAR DE CARGO #1. :*
                    </label>
                    <div class="form-floating mb-3">
                      <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setRol(e.target.value)} value={rol} id='rol' required>
                        <option value="" disabled selected>--- Seleccionar ---</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Inventariado">Inventariado</option>
                        <option value="Cliente">Cliente</option>
                      </select>
                      <label htmlFor="rol">
                        <i className="fa-solid fa-users"></i> CAMBIAR DE CARGO #1. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                          <code className='text-white'>(Administrador), (Vendedor), (Inventariado) y (Cliente).</code>
                        </span>
                      </label>
                    </div>
                    <label htmlFor="isAdmin">
                      <i className="fa-solid fa-users"></i> CAMBIAR DE CARGO #2. :*
                    </label>
                    <div class="form-floating mb-3">
                      <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setIsAdmin(e.target.value)} value={isAdmin} id='isAdmin' required>
                        <option value="" disabled selected>--- Seleccionar ---</option>
                        <option value="false">DesActivado - Cliente</option>
                        <option value="true">Activado - Administrador</option>
                      </select>
                      <label htmlFor="isAdmin">
                        <i className="fa-solid fa-users"></i> CAMBIAR DE CARGO #2. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                          <code className='text-white'>(DesActivado - Cliente) y (Activado - Administrador).</code>
                        </span>
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
