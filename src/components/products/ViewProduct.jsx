import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewProduct = ({ product, setOpenViewProduct }) => {
  const uint8 = new Uint32Array([product.price]);
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 style={{ textAlign: "justify", color: "black" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> {product.title}
              </h3>
              <div className="close-form" onClick={() => setOpenViewProduct(false)}>X</div>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  MEN&#218; 1 Categor&#237;as. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.categoryOptions}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  MEN&#218; 2 Categor&#237;as. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.subcategoryOptions}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  MEN&#218; 3 Categor&#237;as. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.tripletecategoryOptions}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Cantidad. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Descripción. :*
                </label>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {product.description}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Precio. :*
                </label>
                <p className="description badge rounded-pill badge-soft-success" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  La Talla 📏. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.sizesOptions?.map((item) => (
                      <span className="item mb-2" key={item.i}>
                        {item.value}
                      </span>
                    ))}
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  El Color De Oro 🖌️. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.colorsgoldsOptions?.map((item) => (
                      <span className="item mb-2" key={item.i}>
                        {item.value}
                      </span>
                    ))}
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  El Color De Piedras 🖌️. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.colorsstonesOptions?.map((item) => (
                      <span className="item mb-2" key={item.i}>
                        {item.value}
                      </span>
                    ))}
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagen Principal 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <span className="item2 mb-2">
                      <img src={product.image} alt={product.title} title={product.title} />
                    </span>
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagenes Multiples 📸. :*
                </label>
                <p className="description text-left" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.imagesOnes?.map((item) => (
                      <span className="item2 mb-2" key={item.i}>
                        <img src={item.value} alt={product.title} title={product.title} />
                      </span>
                    ))}
                  </div>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
