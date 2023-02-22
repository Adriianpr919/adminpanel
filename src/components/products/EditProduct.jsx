import { faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditProduct = ({ product, setOpenEditProduct }) => {

  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [subCategory, setSubCategory] = useState(product.subcategory);
  const [countInStock, setCountInStock] = useState(product.countInStock);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [star, setStar] = useState(product.star);
  const [sizes, setSizes] = useState(product.sizes);
  const [colors, setColors] = useState(product.colors);
  const [image, setImage] = useState(product.image);
  const [imagesOnes, setImagesOnes] = useState(product.imagesOnes);

  const editProductHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.put("/api/products/update", {
        _id: product._id,
        title,
        category,
        subCategory,
        countInStock,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imagesOnes
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Producto.!");
      setOpenEditProduct(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
    }
  }

  //for sizes add fields
  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const removeSizeFields = (i) => {
    const newSizeValues = [...sizes];
    newSizeValues.splice(i, 1);
    setSizes(newSizeValues);
  }

  //for colors add fields
  const handleChangeColor = (e, i) => {
    e.preventDefault();
    const clonedColors = [...colors];
    clonedColors[`${i}`] = { value: e.target.value, key: i };
    setColors(clonedColors);
  };

  const removeColorFields = (i) => {
    const newColorValues = [...colors];
    newColorValues.splice(i, 1);
    setColors(newColorValues);
  }

  //for imageOne add fields
  const handleChangeImageOne = (e, i) => {
    e.preventDefault();
    const clonedImagesOnes = [...imagesOnes];
    clonedImagesOnes[`${i}`] = { value: e.target.value, key: i };
    setImagesOnes(clonedImagesOnes);
  };

  const removeImageOneFields = (i) => {
    const newImageOneValues = [...imagesOnes];
    newImageOneValues.splice(i, 1);
    setImagesOnes(newImageOneValues);
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <div className="close-form" onClick={() => setOpenEditProduct(false)}>X</div>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Producto. - {product.title}
              </h3>
              <p className="mt-2">
                <form onSubmit={editProductHandler}>
                  <div>
                    <hr />
                    <label htmlFor="title">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="cat">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Hombres), (Mujeres), (Niños) y (Niñas)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="cat">
                              CAMBIAR CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setCategory(e.target.value)} value={category} id='cat' required />
                              <label htmlFor="cat">
                                CAMBIAR CATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="scat">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Nuevos) y (Destacados)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="scat">
                              CAMBIAR SUBCATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setSubCategory(e.target.value)} value={subCategory} id='scat' required />
                              <label htmlFor="scat">
                                CAMBIAR SUBCATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <label htmlFor="countInStock">
                      CANTIDAD 🛍️. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="number" min={0} max={9000} onChange={(e) => setCountInStock(e.target.value)} value={countInStock} id='countInStock' required />
                      <label htmlFor="countInStock">
                        CANTIDAD 🛍️. :*
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
                              CAMBIAR PRECIO. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price' required />
                              <label htmlFor="price">
                                CAMBIAR PRECIO. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <label htmlFor="desc">
                      CAMBIAR DESCRIPCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="desc" cols="50" rows="50" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        CAMBIAR DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <label htmlFor="star">
                      CAMBIAR CLASIFICACIÓN ⭐. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setStar(e.target.value)} value={star} id='star' required />
                      <label htmlFor="star">
                        CAMBIAR CLASIFICACIÓN ⭐. :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">ESCRIBA CAMBIAR LA TALLA 📏. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="sizes">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN MINÚSCULA CON ACENTO AGUDO Y SIN MAYÚSCULA CON TILDE (á, é, í, ñ, ó y ú)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="sizes">
                                        ESCRIBA CAMBIAR LA TALLA 📏. :*
                                      </label>
                                      <div className="form-floating mb-3">
                                        {
                                          product.sizes?.map((item, i) => (
                                            <div className='d-flexAdd form-floating mb-3' key={i}>
                                              <input className="form-control is-valid" key={item.i} type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, item.i)} value={sizes[`${i}`]?.value || ''} id='sizes' required />
                                              <label htmlFor="sizes">
                                                ESCRIBA CAMBIAR LA TALLA 📏. :*
                                              </label>
                                              {
                                                i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeSizeFields(i)}>
                                                  <FontAwesomeIcon icon={faTrash} />
                                                </button> : null
                                              }
                                            </div>
                                          ))}
                                      </div>
                                    </div>
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
                        <div className="panel-heading">ESCRIBA CAMBIAR LOS COLORES 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="colors">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN MINÚSCULA CON ACENTO AGUDO, SIN MAYÚSCULA CON TILDE Y SIN PUNTO SEQUIDO (á, é, í, ñ, ó, ú y .)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="colors">
                                        ESCRIBA CAMBIAR LOS COLORES 🖌️. :*
                                      </label>
                                      <div className="form-floating mb-3">
                                        {
                                          product.colors?.map((item, i) => (
                                            <div className='d-flexAdd form-floating mb-3' key={i}>
                                              <input className="form-control is-valid" key={item.i} type="text" name='colors' onChange={(e) => handleChangeColor(e, i, item.i)} value={colors[`${i}`]?.value || ''} id='colors' required />
                                              <label htmlFor="colors">
                                                ESCRIBA CAMBIAR LOS COLORES 🖌️. :*
                                              </label>
                                              {
                                                i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeColorFields(i)}>
                                                  <FontAwesomeIcon icon={faTrash} />
                                                </button> : null
                                              }
                                            </div>
                                          ))}
                                      </div>
                                    </div>
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
                        <div className="panel-heading">IMAGEN PRINCIPAL 📸. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="image">
                                    CAMBIAR IMAGEN PRINCIPAL 📸. :*
                                  </label>
                                  <div className="form-floating mb-3">
                                    <input className="form-control is-valid" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
                                    <label htmlFor="image">
                                      CAMBIAR IMAGEN PRINCIPAL 📸. :*
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
                        <div className="panel-heading">CAMBIAR IMAGENES MULTIPLES 📸. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="imagesOnes">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="imagesOnes">
                                        CAMBIAR IMAGENES MULTIPLES 📸. :*
                                      </label>
                                      <div className="form-floating mb-3">
                                        {
                                          product.imagesOnes?.map((item, i) => (
                                            <div className='d-flexAdd form-floating mb-3' key={i}>
                                              <input className="form-control is-valid" key={item.i} type="text" name='imagesOnes' onChange={(e) => handleChangeImageOne(e, i, item.i)} value={imagesOnes[`${i}`]?.value || ''} id='imagesOnes' required />
                                              <label htmlFor="imagesOnes">
                                                CAMBIAR IMAGENES MULTIPLES 📸. :*
                                              </label>
                                              {
                                                i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeImageOneFields(i)}>
                                                  <FontAwesomeIcon icon={faTrash} />
                                                </button> : null
                                              }
                                            </div>
                                          ))}
                                      </div>
                                    </div>
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
};

export default EditProduct;
