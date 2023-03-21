import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditOrder = ({ order, setOpenEdit }) => {

  const [marker, setMarker] = useState(order.marker);
  const [isPaid, setIsPaid] = useState(order.isPaid);
  const [isDelivered, setIsDelivered] = useState(order.isDelivered);

  const editOrderHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.put("/api/orders/update", {
        _id: order._id,
        marker,
        isPaid,
        isDelivered
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Pedido.!");
      setOpenEdit(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Pedido.
              </h3>
              <p className="mt-2">
                <form onSubmit={editOrderHandler}>
                  <div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">CAMBIAR DETALLE. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="marker">
                                    CAMBIAR DETALLE. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                      <code className='text-white'>(Pendiente De Pago), (Pedido Confirmado), (Preparando Tu Pedido)<br />, (Pedido En Camino), (Pedido Entregado), (Pedido NO Entregado)<br />, (Validado) y (Cancelar Pedido).</code>
                                    </span>
                                  </label>
                                  <div className="form-floating mb-3">
                                    <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setMarker(e.target.value)} value={marker} id='marker' required>
                                      <option value="" disabled selected>--- Seleccionar ---</option>
                                      <option value="Pendiente De Pago">
                                        <span className="badge rounded-pill text-bg-danger">Pendiente De Pago</span>
                                      </option>
                                      <option value="Pedido Confirmado">
                                        <span className="badge rounded-pill text-bg-success">Pedido Confirmado</span>
                                      </option>
                                      <option value="Preparando Tu Pedido">
                                        <span className="badge rounded-pill text-bg-info">Preparando Tu Pedido</span>
                                      </option>
                                      <option value="Pedido En Camino">
                                        <span className="badge rounded-pill text-bg-primary">Pedido En Camino</span>
                                      </option>
                                      <option value="Pedido Entregado">
                                        <span className="badge rounded-pill text-bg-success">Pedido Entregado</span>
                                      </option>
                                      <option value="Pedido NO Entregado">
                                        <span className="badge rounded-pill text-bg-danger">Pedido NO Entregado</span>
                                      </option>
                                      <option value="Validado">
                                        <span className="badge rounded-pill text-bg-danger">Validado</span>
                                      </option>
                                      <option value="Cancelar Pedido">
                                        <span className="badge rounded-pill text-bg-danger">Cancelar Pedido</span>
                                      </option>
                                    </select>
                                    <label htmlFor="marker">
                                      CAMBIAR DETALLE. :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">Está Pagado. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="isPaid">
                                    Está Pagado. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                      <code className='text-white'>(SI) y (NO).</code>
                                    </span>
                                  </label>
                                  <div className="form-floating mb-3">
                                    <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setIsPaid(e.target.value)} value={isPaid} id='isPaid' required>
                                      <option value="" disabled selected>--- Seleccionar ---</option>
                                      <option value="false">
                                        NO
                                      </option>
                                      <option value="true">
                                        SI
                                      </option>
                                    </select>
                                    <label htmlFor="isPaid">
                                      Está Pagado. :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">Está Entregado. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="isDelivered">
                                    Está Entregado. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                      <code className='text-white'>(SI) y (NO).</code>
                                    </span>
                                  </label>
                                  <div className="form-floating mb-3">
                                    <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setIsDelivered(e.target.value)} value={isDelivered} id='isDelivered' required>
                                      <option value="" disabled selected>--- Seleccionar ---</option>
                                      <option value="false">
                                        NO
                                      </option>
                                      <option value="true">
                                        SI
                                      </option>
                                    </select>
                                    <label htmlFor="isDelivered">
                                      Está Entregado. :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
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
}

export default EditOrder;