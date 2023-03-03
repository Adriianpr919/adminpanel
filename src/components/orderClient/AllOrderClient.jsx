import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewOrderClient from './ViewOrderClient';
import EditOrderClient from './EditOrderClient';
import { toast } from 'react-toastify';
import axios from 'axios';

const AllOrderClient = ({ orderclient }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handlerDeleteOrderClient = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.delete(`/api/ordersclients/delete/${orderclient._id}`);

      if (data) {
        toast.success('¡.Pedido Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Pedido NO Eliminado.!');
    }

  }
  return (
    <>
      <>
        <div className="card mb-4" key={orderclient._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          NUMERO #. :* <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>{orderclient.number}</span>
                        </p>
                      </h5>
                    </div>
                    <hr className="my-2" />
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          REFERENCIA. :* <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>{orderclient.reference}</span>
                        </p>
                      </h5>
                    </div>
                    <hr className="my-2" />
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          NOMBRE DE CLIENTE. :* <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>{orderclient.client}</span>
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Pedido.">
                          <FontAwesomeIcon icon={faEye} onClick={() => setOpenView(true)} />
                        </span>
                      </>
                      <>
                        <span className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Pedido.">
                          <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEdit(true)} />
                        </span>
                      </>
                      <>
                        <span className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Pedido.">
                          <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteOrderClient} />
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
      {openView && <ViewOrderClient orderclient={orderclient} setOpenView={setOpenView} />}
      {openEdit && <EditOrderClient orderclient={orderclient} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllOrderClient;