import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewColorStone from './ViewColorStone';
import EditColorStone from './EditColorStone';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { colorStoneApi } from '../../api/color/colorStoneApi';

const AllColorStone = ({ colorstone }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteColorstone = async (e) => {
    e.preventDefault();

    try {

      const { data } = await colorStoneApi.delete(`/delete/${colorstone._id}`);

      if (data) {
        toast.success('¡.El Color De Piedra Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.El Color De Piedra NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={colorstone._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {colorstone.titlecolorstone}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver El Color De Piedra.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar El Color De Piedra.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteColorstone} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar El Color De Piedra.">
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
      {openView && <ViewColorStone colorstone={colorstone} setOpenView={setOpenView} />}
      {openEdit && <EditColorStone colorstone={colorstone} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllColorStone;