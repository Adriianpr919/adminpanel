//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';
import { productApi } from '../../api/product/productApi';

const AllProduct = ({ product }) => {

  const uint8 = new Uint32Array([product.price]);

  const [openViewProduct, setOpenViewProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);

  const handlerDeleteProduct = async (e) => {
    e.preventDefault();

    try {

      const { data } = await productApi.delete(`/delete/${product._id}`);

      if (data) {
        toast.success('¡.Producto Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Producto no eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={product._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={product.image} alt={product.title} title={product.title} />
                      </p>
                      <span className="badge rounded-pill bg-success position-absolute mt-2 me-2 z-index-2 top-0 end-0">
                        {product.categoryOptions}
                      </span>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {product.title} ({product.description})
                        </p>
                        <hr />
                        <p className="text-dark">
                          MEN&#218; 1 Categor&#237;as. :* <span className="badge rounded-pill badge-soft-info">
                            {product.categoryOptions}
                          </span>
                        </p>
                        <p className="text-dark">
                          MEN&#218; 2 Categor&#237;as. :* <span className="badge rounded-pill badge-soft-info">
                            {product.subcategoryOptions}
                          </span>
                        </p>
                        <p className="text-dark">
                          MEN&#218; 3 Categor&#237;as. :* <span className="badge rounded-pill badge-soft-info">
                            {product.tripletecategoryOptions}
                          </span>
                        </p>
                      </h5>
                      <hr />
                      <h5 className="fs-md-2 text-warning d-flex align-items-center mb-3">
                        <span className="badge rounded-pill badge-soft-success">
                          {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                        </span>
                      </h5>
                      <p className="fs--1 mb-1">
                        <h5 className="fs-md-2 text-warning d-flex align-items-center mb-3">
                          <strong className="text-success">{product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}</strong>
                        </h5>
                      </p>
                      <hr />
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenViewProduct(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Producto.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEditProduct(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Producto.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteProduct} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Producto.">
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
      {openViewProduct && <ViewProduct product={product} setOpenViewProduct={setOpenViewProduct} />}
      {openEditProduct && <EditProduct product={product} setOpenEditProduct={setOpenEditProduct} />}
    </>
  );
};

export default AllProduct;
