import { faEdit, faEye, faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ChangePassUser from './ChangePassUser';
import Edituser from './EditUser';
import ViewUser from './ViewUser';

const AllUser = ({ user }) => {

  const [openViewUser, setOpenViewUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openChangePassUser, setOpenChangePassUser] = useState(false);

  const handlerDeleteUser = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.delete(`/api/users/delete/${user._id}`);

      if (data) {
        toast.success('¡.Usuario Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Usuario NO Eliminado.!');
    }

  }

  return (
    <>
      <table className="table table-sm mb-0 overflow-hidden data-table fs--1" data-options="{&quot;responsive&quot;:false,&quot;pagingType&quot;:&quot;simple&quot;,&quot;lengthChange&quot;:false,&quot;searching&quot;:false,&quot;pageLength&quot;:8,&quot;language&quot;:{&quot;info&quot;:&quot;_START_ to _END_ Items of _TOTAL_&quot;}}" key={user._id}>
        <thead className="bg-200 text-900">
          <tr>
            <th className="sort pe-1 align-middle white-space-nowrap">
              <span className="badge rounded-pill badge-soft-primary" style={{ fontSize: "15px" }}>USUARIO.</span>
            </th>
            <th className="no-sort pe-1 align-middle data-table-row-action" />
          </tr>
        </thead>
        <tbody className="list" id="table-simple-pagination-body">
          <tr className="btn-reveal-trigger">
            <th className="align-middle white-space-nowrap">
              <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "15px" }}>{user.username}</span>
            </th>
            <td className="align-middle white-space-nowrap text-end">
              <div className="dropstart font-sans-serif position-static d-inline-block">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end badge rounded-pill badge-soft-dark" type="button"
                  id="dropdown-simple-pagination-table-item-0" data-bs-toggle="dropdown" data-boundary="window"
                  aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                  <span className="fas fa-ellipsis-h fs--1" />
                </button>
                <div className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-simple-pagination-table-item-0">
                  <span className="badge badge rounded-pill badge-soft-secondary text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faEye} onClick={() => setOpenViewUser(true)} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                  <div className="dropdown-divider" />
                  <span className="badge badge rounded-pill badge-soft-success text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEditUser(true)} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                  <div className="dropdown-divider" />
                  <span className="badge badge rounded-pill badge-soft-warning text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faKey} onClick={() => setOpenChangePassUser(true)} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                  <div className="dropdown-divider" />
                  <span className="badge badge rounded-pill badge-soft-danger text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteUser} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {openViewUser && <ViewUser user={user} setOpenViewUser={setOpenViewUser} />}
      {openEditUser && <Edituser user={user} setOpenEditUser={setOpenEditUser} />}
      {openChangePassUser && <ChangePassUser user={user} setOpenChangePassUser={setOpenChangePassUser} />}
    </>
  );
};

export default AllUser;
