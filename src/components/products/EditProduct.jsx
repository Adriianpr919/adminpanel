import { faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const EditProduct = ({ product, setOpenEditProduct }) => {

  const [titlecategory, setTitlecategory] = useState('');
  const [titlesubcategory, setTitlesubcategory] = useState('');
  const [titletripletecategory, setTitletripletecategory] = useState('');

  const [title, setTitle] = useState(product.title);
  const [categoryOptions, setCategoryOptions] = useState(product.categoryOptions);
  const [subcategoryOptions, setSubcategoryOptions] = useState(product.subcategoryOptions);
  const [tripletecategoryOptions, setTripletecategoryOptions] = useState(product.tripletecategoryOptions);
  const [countInStock, setCountInStock] = useState(product.countInStock);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
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
        categoryOptions,
        subcategoryOptions,
        tripletecategoryOptions,
        countInStock,
        description,
        price,
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

  useEffect(() => {

    const fetchData = async () => {
      const resultCategory = await axios.get('/api/category/all');
      console.log(resultCategory.data);
      setTitlecategory(resultCategory.data);

      const resultSubcategory = await axios.get('/api/subcategory/all');
      console.log(resultSubcategory.data);
      setTitlesubcategory(resultSubcategory.data);

      const resultTripletecategory = await axios.get('/api/tripletecategory/all');
      console.log(resultTripletecategory.data);
      setTitletripletecategory(resultTripletecategory.data);
    }

    fetchData();

  }, []);

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
                        <label htmlFor="categoryOptions">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        MENÚ DE OPCIONES CATEGORÍA. {titlecategory &&
                          titlecategory.map(titlecategory => (
                            <div key={titlecategory._id} className='form-check'>
                              <span className="badge rounded-pill badge-soft-warning">
                                <code>
                                  {titlecategory.titlecategory}
                                </code>
                              </span>
                            </div>
                          ))}
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="categoryOptions">
                              CAMBIAR CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control is-valid"
                                type="text"
                                onChange={(e) => setCategoryOptions(e.target.value)}
                                value={categoryOptions}
                                name={categoryOptions}
                                id='categoryOptions'
                                required />
                              <div className="mb-3">
                                <label htmlFor="categoryOptions">
                                  Seleccione Uno ⬆️. :*
                                </label>
                                <select
                                  className="form-select js-choice is-valid"
                                  aria-label=".form-select-lg js-choice"
                                  data-placeholder="--- Seleccionar ---"
                                  data-control="select2"
                                  defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                  onChange={(e) => setCategoryOptions(e.target.value)}
                                  value={categoryOptions}
                                  name={categoryOptions}
                                  id={categoryOptions}
                                  required="required"
                                  data-options='{"removeItemButton":true,"placeholder":true}'>
                                  <option value={'Seleccionar'} defaultValue hidden>
                                    {'--- Seleccionar ---'}
                                  </option>
                                  {titlecategory &&
                                    titlecategory.map((titlecategory) => (
                                      <option
                                        details={titlecategory}
                                        key={titlecategory._id}
                                        name={titlecategory.titlecategory}
                                        value={titlecategory.titlecategory}
                                        className="badge rounded-pill badge-soft-warning">
                                        <code>
                                          {titlecategory.titlecategory}
                                        </code>
                                      </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                  <span className="badge rounded-pill badge-soft-danger">
                                    <code>
                                      ¡.ALERTA POR FAVOR Seleccione Uno.!
                                    </code>
                                  </span>
                                </div>
                              </div>
                              <label htmlFor="categoryOptions">
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
                        <label htmlFor="subcategoryOptions">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        MENÚ DE OPCIONES SUBCATEGORÍA. {titlesubcategory &&
                          titlesubcategory.map(titlesubcategory => (
                            <div key={titlesubcategory._id} className='form-check'>
                              <span className="badge rounded-pill badge-soft-warning">
                                <code>
                                  {titlesubcategory.titlesubcategory}
                                </code>
                              </span>
                            </div>
                          ))}
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="subcategoryOptions">
                              CAMBIAR SUBCATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control is-valid"
                                type="text"
                                onChange={(e) => setSubcategoryOptions(e.target.value)}
                                value={subcategoryOptions}
                                name={subcategoryOptions}
                                id='subcategoryOptions'
                                required />
                              <div className="mb-3">
                                <label htmlFor="subcategoryOptions">
                                  Seleccione Uno ⬆️. :*
                                </label>
                                <select
                                  className="form-select js-choice is-valid"
                                  aria-label=".form-select-lg js-choice"
                                  data-placeholder="--- Seleccionar ---"
                                  data-control="select2"
                                  defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                  onChange={(e) => setSubcategoryOptions(e.target.value)}
                                  value={subcategoryOptions}
                                  name={subcategoryOptions}
                                  id={subcategoryOptions}
                                  required="required"
                                  data-options='{"removeItemButton":true,"placeholder":true}'>
                                  <option value={'Seleccionar'} defaultValue hidden>
                                    {'--- Seleccionar ---'}
                                  </option>
                                  {titlesubcategory &&
                                    titlesubcategory.map((titlesubcategory) => (
                                      <option
                                        details={titlesubcategory}
                                        key={titlesubcategory._id}
                                        name={titlesubcategory.titlesubcategory}
                                        value={titlesubcategory.titlesubcategory}
                                        className="badge rounded-pill badge-soft-warning">
                                        <code>
                                          {titlesubcategory.titlesubcategory}
                                        </code>
                                      </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                  <span className="badge rounded-pill badge-soft-danger">
                                    <code>
                                      ¡.ALERTA POR FAVOR Seleccione Uno.!
                                    </code>
                                  </span>
                                </div>
                              </div>
                              <label htmlFor="subcategoryOptions">
                                CAMBIAR SUBCATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="tripletecategoryOptions">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        MENÚ DE OPCIONES TRIPLETECATEGORÍA. {titletripletecategory &&
                          titletripletecategory.map(titletripletecategory => (
                            <div key={titletripletecategory._id} className='form-check'>
                              <span className="badge rounded-pill badge-soft-warning">
                                <code>
                                  {titletripletecategory.titletripletecategory}
                                </code>
                              </span>
                            </div>
                          ))}
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="tripletecategoryOptions">
                              CAMBIAR TRIPLETECATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control is-valid"
                                type="text"
                                onChange={(e) => setTripletecategoryOptions(e.target.value)}
                                value={tripletecategoryOptions}
                                name={tripletecategoryOptions}
                                id='tripletecategoryOptions'
                                required />
                              <div className="mb-3">
                                <label htmlFor="tripletecategoryOptions">
                                  Seleccione Uno ⬆️. :*
                                </label>
                                <select
                                  className="form-select js-choice is-valid"
                                  aria-label=".form-select-lg js-choice"
                                  data-placeholder="--- Seleccionar ---"
                                  data-control="select2"
                                  defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                  onChange={(e) => setTripletecategoryOptions(e.target.value)}
                                  value={tripletecategoryOptions}
                                  name={tripletecategoryOptions}
                                  id={tripletecategoryOptions}
                                  required="required"
                                  data-options='{"removeItemButton":true,"placeholder":true}'>
                                  <option value={'Seleccionar'} defaultValue hidden>
                                    {'--- Seleccionar ---'}
                                  </option>
                                  {titletripletecategory &&
                                    titletripletecategory.map((titletripletecategory) => (
                                      <option
                                        details={titletripletecategory}
                                        key={titletripletecategory._id}
                                        name={titletripletecategory.titletripletecategory}
                                        value={titletripletecategory.titletripletecategory}
                                        className="badge rounded-pill badge-soft-warning">
                                        <code>
                                          {titletripletecategory.titletripletecategory}
                                        </code>
                                      </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                  <span className="badge rounded-pill badge-soft-danger">
                                    <code>
                                      ¡.ALERTA POR FAVOR Seleccione Uno.!
                                    </code>
                                  </span>
                                </div>
                              </div>
                              <label htmlFor="tripletecategoryOptions">
                                CAMBIAR TRIPLETECATEGORÍA. :*
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
                      <textarea className="form-control is-valid" id="desc" cols="100" rows="100" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        CAMBIAR DESCRIPCIÓN. :*
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
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
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
                        <div className="panel-heading">ESCRIBA CAMBIAR EL COLOR DE ORO 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="colors">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
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
                                        ESCRIBA CAMBIAR EL COLOR DE ORO 🖌️. :*
                                      </label>
                                      <div className="form-floating mb-3">
                                        {
                                          product.colors?.map((item, i) => (
                                            <div className='d-flexAdd form-floating mb-3' key={i}>
                                              <input className="form-control is-valid" key={item.i} type="text" name='colors' onChange={(e) => handleChangeColor(e, i, item.i)} value={colors[`${i}`]?.value || ''} id='colors' required />
                                              <label htmlFor="colors">
                                                ESCRIBA CAMBIAR EL COLOR DE ORO 🖌️. :*
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
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
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
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
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
