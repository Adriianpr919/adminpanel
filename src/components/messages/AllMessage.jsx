import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ViewMessage from './ViewMessage';
import { messageApi } from '../../api/messages/messageApi';

const AllMessage = ({ messageopcion }) => {

  const [openViewMessageopcion, setOpenViewMessageopcion] = useState(false);

  const handlerDeleteMessageopcion = async (e) => {
    e.preventDefault();

    try {

      const { data } = await messageApi.delete(`/delete/${messageopcion._id}`);

      if (data) {
        toast.success('¡.Mensaje Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Mensaje NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={messageopcion._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Nombre Completo. :* ({messageopcion.fullname})
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Mensaje. :* ({messageopcion.comment})
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Fecha. :* {messageopcion.createdAt.slice(0, 10)}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenViewMessageopcion(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Mensaje.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteMessageopcion} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Mensaje.">
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
      {openViewMessageopcion && <ViewMessage messageopcion={messageopcion} setOpenViewMessageopcion={setOpenViewMessageopcion} />}
    </>
  );
}

export default AllMessage;