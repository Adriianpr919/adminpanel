import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderInfo = ({ setOpen, order }) => {

  const date = order.createdAt;
  const productsMap = order.orderItems;

  const uint1 = new Uint32Array([order.subTotal]);
  const uint2 = new Uint32Array([order.taxPrice]);
  const uint3 = new Uint32Array([order.totalPrice]);

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 style={{ textAlign: "justify", color: "black" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> # ID. :* {order._id}
              </h3>
              <hr className="my-4" />
              <h3 style={{ textAlign: "justify", color: "black" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> Usuario ID. :* {order.userId}
              </h3>
              <hr className="my-4" />
              <div className="close-form" onClick={() => setOpen(false)}>X</div>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Nombre Completo. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.name}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Documento. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.document}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Correo. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.email}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Dirección. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.address}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Teléfono. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.phone}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Detalle. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.marker}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Departamento. :*
                </label>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {order.departments}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Ciudad. :*
                </label>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {order.city}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Está Pagado. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.isPaid ? 'SI' : 'NO'}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Está Entregado. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {order.isDelivered ? 'SI' : 'NO'}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Fecha. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {(date)?.substring(0, 10)}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  SubTotal. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                </p>
              </p><p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Impuesto IVA De 19%. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Total. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                </p>
              </p>
            </div>
            <div className="productInfoFlex">
              {productsMap?.map((product) => (
                <div className="productInfoGroup userImage" key={product._id}>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    {product.title}
                  </span>
                  <img src={product.image}
                    className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail item2 mb-2"
                    alt={product.title}
                    title={product.title} />
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    Unidades. :* {product.quantity} <br />
                    {product.quantity > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    La Talla 📏. :* {product.size}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    El Color De Oro 🖌️. :* {product.colorgold}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    El Color De Piedras 🖌️. :* {product.colorstone}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-success mb-2">
                    Precio. :* {(product.price).toLocaleString('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                    })}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    # ID Producto. :* {product.product}
                  </span>
                  <span style={{ color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark mb-2">
                    # ID. :* {product._id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderInfo;