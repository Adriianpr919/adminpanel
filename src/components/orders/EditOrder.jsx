import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { orderApi } from '../../api/order/orderApi';

const EditOrder = ({ order, setOpenEdit }) => {

  const [name, setName] = useState(order.name);
  const [document, setDocument] = useState(order.document);
  const [email, setEmail] = useState(order.email);
  const [address, setAddress] = useState(order.address);
  const [phone, setPhone] = useState(order.phone);
  const [marker, setMarker] = useState(order.marker);
  const [departments, setDepartments] = useState(order.departments);
  const [city, setCity] = useState(order.city);
  const [isPaid, setIsPaid] = useState(order.isPaid);
  const [isDelivered, setIsDelivered] = useState(order.isDelivered);

  const editOrderHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await orderApi.put("/update", {
        _id: order._id,
        name,
        document,
        email,
        address,
        phone,
        marker,
        departments,
        city,
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
                    <label htmlFor="name">
                      CAMBIAR NOMBRE COMPLETO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="name" cols="100" rows="100" required onChange={(e) => setName(e.target.value)} value={name} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="name">
                        CAMBIAR NOMBRE COMPLETO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="document">
                      CAMBIAR DOCUMENTO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="document" cols="100" rows="100" required onChange={(e) => setDocument(e.target.value)} value={document} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="document">
                        CAMBIAR DOCUMENTO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="email">
                      CAMBIAR CORREO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="email" cols="100" rows="100" required onChange={(e) => setEmail(e.target.value)} value={email} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="email">
                        CAMBIAR CORREO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="address">
                      CAMBIAR DIRECC&#211;IN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="address" cols="100" rows="100" required onChange={(e) => setAddress(e.target.value)} value={address} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="address">
                        CAMBIAR DIRECC&#211;IN. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="phone">
                      CAMBIAR &#35; TEL&#201;FONO Y CELULAR. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="phone" cols="100" rows="100" required onChange={(e) => setPhone(e.target.value)} value={phone} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="phone">
                        CAMBIAR &#35; TEL&#201;FONO Y CELULAR. :*
                      </label>
                    </div>
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
                                    <select className="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setMarker(e.target.value)} value={marker} id='marker' required>
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
                    <label htmlFor="departments">
                      CAMBIAR DEPARTAMENTO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="departments" cols="100" rows="100" required onChange={(e) => setDepartments(e.target.value)} value={departments} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="departments">
                        CAMBIAR DEPARTAMENTO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="city">
                      CAMBIAR CIUDAD. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="city" cols="100" rows="100" required onChange={(e) => setCity(e.target.value)} value={city} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="city">
                        CAMBIAR CIUDAD. :*
                      </label>
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
                                    <select className="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setIsPaid(e.target.value)} value={isPaid} id='isPaid' required>
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
                                    <select className="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setIsDelivered(e.target.value)} value={isDelivered} id='isDelivered' required>
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