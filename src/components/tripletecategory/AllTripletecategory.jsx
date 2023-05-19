import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewTripletecategory from './ViewTripletecategory';
import EditTripletecategory from './EditTripletecategory';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { api } from '../../api/tripletecategory/tripletecategoryApi';

const AllTripletecategory = ({ tripletecategory }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteTripletecategory = async (e) => {
    e.preventDefault();

    try {

      const { data } = await api.delete(`/api/tripletecategory/delete/${tripletecategory._id}`);

      if (data) {
        toast.success('¡.Multiples Categorías Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Multiples Categorías NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={tripletecategory._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {tripletecategory.titletripletecategory}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Multiples Categorías.">
                          <FontAwesomeIcon icon={faEye} onClick={() => setOpenView(true)} />
                        </span>
                      </>
                      <>
                        <span className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Multiples Categorías.">
                          <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEdit(true)} />
                        </span>
                      </>
                      <>
                        <span className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Multiples Categorías.">
                          <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteTripletecategory} />
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
      {openView && <ViewTripletecategory tripletecategory={tripletecategory} setOpenView={setOpenView} />}
      {openEdit && <EditTripletecategory tripletecategory={tripletecategory} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllTripletecategory;