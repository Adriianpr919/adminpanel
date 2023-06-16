import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewSize from './ViewSize';
import EditSize from './EditSize';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { sizeApi } from '../../api/size/sizeApi';

const AllSize = ({ size }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteSize = async (e) => {
    e.preventDefault();

    try {

      const { data } = await sizeApi.delete(`/delete/${size._id}`);

      if (data) {
        toast.success('¡.La Talla Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.La Talla NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={size._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {size.titlesize}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver La Talla.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar La Talla.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteSize} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar La Talla.">
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
      {openView && <ViewSize size={size} setOpenView={setOpenView} />}
      {openEdit && <EditSize size={size} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllSize;