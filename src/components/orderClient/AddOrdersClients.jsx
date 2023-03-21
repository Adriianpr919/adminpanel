import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const AddOrdersClients = () => {

  const [number, setNumber] = useState('');
  const [reference, setReference] = useState('');
  const [marker, setMarker] = useState('');
  const [client, setClient] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');

  const addOrderClientHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post('/api/ordersclients/add', {

        number,
        reference,
        marker,
        client,
        email,
        address,
        description,
        phone,
        price

      });

      console.log(data);
      toast.success('¡.Ha Agregado Con Éxito Un Nuevo Pedido.!');
      setNumber('');
      setReference('');
      setMarker('');
      setClient('');
      setEmail('');
      setAddress('');
      setDescription('');
      setPhone('');
      setPrice('');

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Pedido.!');

    }
  }

  return (
    <>
      <hr className="my-4" />
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <code>
                  <i className="fa-solid fa-square-plus"></i> Agregar Pedidos.
                </code>
              </h3>
              <p className="mt-2">
                <NavLink className="btn btn-link ps-0 btn-sm" to="/ordersclients" rel="noopener noreferrer">
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <i className="fa-solid fa-eye"></i> Volver Ver Pedidos. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </NavLink>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> Pedidos Recientes.
              </h3>
              <p className="mt-2">
                <hr />
                <form onSubmit={addOrderClientHandler}>
                  <div>
                    <hr />
                    <label htmlFor="number">
                      NUMERO #. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setNumber(e.target.value)} value={number} id='number' required />
                      <label htmlFor="number">
                        NUMERO #. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="reference">
                      REFERENCIA. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setReference(e.target.value)} value={reference} id='reference' required />
                      <label htmlFor="reference">
                        REFERENCIA. :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">MARCADOR. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="marker">
                                    MARCADOR. :* <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
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
                                      MARCADOR. :*
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
                    <label htmlFor="client">
                      CLIENTE. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setClient(e.target.value)} value={client} id='client' required />
                      <label htmlFor="client">
                        CLIENTE. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="email">
                      CORREO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setEmail(e.target.value)} value={email} id='email' required />
                      <label htmlFor="email">
                        CORREO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="address">
                      DIRECCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="address" cols="50" rows="50" required onChange={(e) => setAddress(e.target.value)} value={address} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="address">
                        DIRECCIÓN. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="description">
                      DESCRIPCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="description" cols="50" rows="50" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="description">
                        DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="phone">
                      TELÉFONO O CELULAR. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setPhone(e.target.value)} value={phone} id='phone' required />
                      <label htmlFor="phone">
                        TELÉFONO O CELULAR. :*
                      </label>
                    </div>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="price">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN PUNTO SEQUIDO (.)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="price">
                              PRECIO. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price' required />
                              <label htmlFor="price">
                                PRECIO. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                  </div>
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faPlus} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Agregar.
                  </button>
                </form >
              </p >
            </div >
          </div >
        </div >
      </div >
    </>
  );
}

export default AddOrdersClients;