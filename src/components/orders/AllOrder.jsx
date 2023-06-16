import React, { useState } from 'react';
import OrderInfo from './OrderInfo';
import EditOrder from './EditOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

const AllOrder = ({ order }) => {

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <>
        <div className="card mb-4" key={order._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          # ID. :* {order._id}
                        </p>
                      </h5>
                      <hr className="my-4" />
                      <h5 className="fs-0">
                        <p className="text-dark">
                          Usuario ID. :* {order.userId}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpen(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Pedidos.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Pedido.">
                          <FontAwesomeIcon icon={faEdit} />
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
      {open && <OrderInfo setOpen={setOpen} order={order} />}
      {openEdit && <EditOrder order={order} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllOrder;
