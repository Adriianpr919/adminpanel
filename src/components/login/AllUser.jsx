import { faEdit, faEye, faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ChangePassUser from './ChangePassUser';
import Edituser from './EditUser';
import ViewUser from './ViewUser';
import { userApi } from '../../api/login/userApi';

const AllUser = ({ user }) => {

  const [openViewUser, setOpenViewUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openChangePassUser, setOpenChangePassUser] = useState(false);

  const handlerDeleteUser = async (e) => {
    e.preventDefault();

    try {

      const { data } = await userApi.delete(`/delete/${user._id}`);

      if (data) {
        toast.success('¡.Usuario Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Usuario NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={user._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Nombre Completo. :* ({user.fullname})
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Usuario. :* ({user.username})
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Correo. :* {user.email}
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Fecha. :* {user.createdAt.slice(0, 10)}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenViewUser(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Usuarios.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEditUser(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Usuarios.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenChangePassUser(true)} className="badge badge badge-soft-warning text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Cambiar Claves.">
                          <FontAwesomeIcon icon={faKey} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteUser} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Usuarios.">
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {openViewUser && <ViewUser user={user} setOpenViewUser={setOpenViewUser} />}
      {openEditUser && <Edituser user={user} setOpenEditUser={setOpenEditUser} />}
      {openChangePassUser && <ChangePassUser user={user} setOpenChangePassUser={setOpenChangePassUser} />}
    </>
  );
};

export default AllUser;
