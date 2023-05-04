import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const AddProducts = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [tripletecategory, setTripletecategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([{ value: '', key: '' }]);
  const [colors, setColors] = useState([{ value: '', key: '' }]);
  const [image, setImage] = useState('');
  const [imagesOnes, setImagesOnes] = useState([{ value: '', key: '' }]);

  //for sizes add fields
  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const addSizeFields = () => {
    setSizes([...sizes, { value: '', key: '' }]);
  }

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

  const addColorFields = () => {
    setColors([...colors, { value: '', key: '' }]);
  }

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

  const addImageOneFields = () => {
    setImagesOnes([...imagesOnes, { value: '', key: '' }]);
  }

  const removeImageOneFields = (i) => {
    const newImageOneValues = [...imagesOnes];
    newImageOneValues.splice(i, 1);
    setImagesOnes(newImageOneValues);
  }

  const addProductHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post('/api/products/add', {

        title,
        category,
        subcategory,
        tripletecategory,
        countInStock,
        description,
        price,
        sizes,
        colors,
        image,
        imagesOnes

      });

      console.log(data);
      toast.success('¡.Ha Agregado Con Éxito Un Nuevo Producto.!');
      setTitle('');
      setCategory('');
      setSubcategory('');
      setTripletecategory('');
      setCountInStock('');
      setDescription('');
      setPrice('');
      setSizes([{ value: '', key: '' }]);
      setColors([{ value: '', key: '' }]);
      setImage('');
      setImagesOnes([{ value: '', key: '' }]);

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Producto.!');

    }
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultCategory = await axios.get('/api/category/all');
      console.log(resultCategory.data);
      setCategory(resultCategory.data);

      const resultSubcategory = await axios.get('/api/subcategory/all');
      console.log(resultSubcategory.data);
      setSubcategory(resultSubcategory.data);

      const resultTripletecategory = await axios.get('/api/tripletecategory/all');
      console.log(resultTripletecategory.data);
      setTripletecategory(resultTripletecategory.data);
    }

    fetchData();

  }, []);

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
                  <i className="fa-solid fa-square-plus"></i> Agregar Productos.
                </code>
              </h3>
              <p className="mt-2">
                <NavLink className="btn btn-link ps-0 btn-sm" to="/products" rel="noopener noreferrer">
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <i className="fa-solid fa-eye"></i> Volver Ver Productos. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </NavLink>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> Producto Recientes.
              </h3>
              <p className="mt-2">
                <hr />
                <form onSubmit={addProductHandler}>
                  <div>
                    <label htmlFor="title">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="category">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR SELECCIONA CATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="category">
                              CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              {
                                category.length === 0 ? (
                                  <h3 className='no-data'>¡.Actualmente NO Hay CATEGORÍA.!</h3>
                                ) : (
                                  <>
                                    {
                                      //only max latest titlecategory
                                      category.map((category) => (
                                        <>
                                          <Form.Select
                                            className="form-control form-select form-select-lg mb-3 is-valid"
                                            aria-label=".form-select-lg example"
                                            data-placeholder="--- Seleccionar ---"
                                            data-control="select2"
                                            onChange={(e) => setCategory(e.target.value)}
                                            value={category}
                                            id='category'
                                            key={category._id}
                                            required>
                                            <option value="Seleccionar" disabled selected="selected">--- Seleccionar ---</option>
                                            <option value={category.titlecategory}>
                                              {category.titlecategory}
                                            </option>
                                          </Form.Select>
                                        </>
                                      ))
                                    }
                                  </>
                                )
                              }
                              <label htmlFor="category">
                                CATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="subcategory">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR SELECCIONA SUBCATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="subcategory">
                              SUBCATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              {
                                subcategory.length === 0 ? (
                                  <h3 className='no-data'>¡.Actualmente NO Hay SUBCATEGORÍA.!</h3>
                                ) : (
                                  <>
                                    {
                                      //only max latest titlesubcategory
                                      subcategory.map((subcategory) => (
                                        <>
                                          <Form.Select
                                            className="form-control form-select form-select-lg mb-3 is-valid"
                                            aria-label=".form-select-lg example"
                                            data-placeholder="--- Seleccionar ---"
                                            data-control="select2"
                                            onChange={(e) => setSubcategory(e.target.value)}
                                            value={subcategory}
                                            id='subcategory'
                                            key={subcategory._id}
                                            required>
                                            <option value="Seleccionar" disabled selected="selected">--- Seleccionar ---</option>
                                            <option value={subcategory.titlesubcategory}>
                                              {subcategory.titlesubcategory}
                                            </option>
                                          </Form.Select>
                                        </>
                                      ))
                                    }
                                  </>
                                )
                              }
                              <label htmlFor="subcategory">
                                SUBCATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="tripletecategory">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR SELECCIONA TRIPLETECATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="tripletecategory">
                              TRIPLETECATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              {
                                tripletecategory.length === 0 ? (
                                  <h3 className='no-data'>¡.Actualmente NO Hay TRIPLETECATEGORÍA.!</h3>
                                ) : (
                                  <>
                                    {
                                      //only max latest titletripletecategory
                                      tripletecategory.map((tripletecategory) => (
                                        <>
                                          <Form.Select
                                            className="form-control form-select form-select-lg mb-3 is-valid"
                                            aria-label=".form-select-lg example"
                                            data-placeholder="--- Seleccionar ---"
                                            data-control="select2"
                                            onChange={(e) => setTripletecategory(e.target.value)}
                                            value={tripletecategory}
                                            id='tripletecategory'
                                            key={tripletecategory._id}
                                            required>
                                            <option value="Seleccionar" disabled selected="selected">--- Seleccionar ---</option>
                                            <option value={tripletecategory.titletripletecategory}>
                                              {tripletecategory.titletripletecategory}
                                            </option>
                                          </Form.Select>
                                        </>
                                      ))
                                    }
                                  </>
                                )
                              }
                              <label htmlFor="tripletecategory">
                                TRIPLETECATEGORÍA. :*
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
                    <label htmlFor="desc">
                      DESCRIPCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="desc" cols="100" rows="100" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">ESCRIBA LA TALLA 📏. :*</div>
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
                                        ESCRIBA LA TALLA 📏. :*
                                      </label>
                                      {sizes.map((element, i) => (
                                        <div className='d-flexAdd form-floating mb-3' key={i}>
                                          <input key={element.i} className="form-control is-valid" type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, element.i)} value={sizes[`${i}`]?.value || ''} id='sizes' required />
                                          <label htmlFor="sizes">
                                            ESCRIBA LA TALLA 📏. :*
                                          </label>
                                          {
                                            i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeSizeFields(i)}>
                                              <FontAwesomeIcon icon={faTrash} />
                                            </button> : null
                                          }
                                        </div>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addSizeFields()}>
                                        <i className="fa-solid fa-square-plus"></i> Agregue Campo.
                                      </button>
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
                        <div className="panel-heading">ESCRIBA EL COLOR DE ORO 🖌️. :*</div>
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
                                        ESCRIBA EL COLOR DE ORO 🖌️. :*
                                      </label>
                                      {colors.map((element, i) => (
                                        <div className='d-flexAdd form-floating mb-3' key={i}>
                                          <input key={element.i} className="form-control is-valid" type="text" name='colors' onChange={(e) => handleChangeColor(e, i, element.i)} value={colors[`${i}`]?.value || ''} id='colors' required />
                                          <label htmlFor="colors">
                                            ESCRIBA EL COLOR DE ORO 🖌️. :*
                                          </label>
                                          {
                                            i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeColorFields(i)}>
                                              <FontAwesomeIcon icon={faTrash} />
                                            </button> : null
                                          }
                                        </div>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addColorFields()}>
                                        <i className="fa-solid fa-square-plus"></i> Agregue Campo.
                                      </button>
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
                    <div className="form-floating mb-3">
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
                                      IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control is-valid" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
                                      <label htmlFor="image">
                                        IMAGEN PRINCIPAL 📸. :*
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
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">IMAGENES MULTIPLES 📸. :*</div>
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
                                          IMAGENES MULTIPLES 📸. :*
                                        </label>
                                        {imagesOnes.map((element, i) => (
                                          <div className='d-flexAdd form-floating mb-3' key={i}>
                                            <input key={element.i} className="form-control is-valid" type="text" name='imagesOnes' onChange={(e) => handleChangeImageOne(e, i, element.i)} value={imagesOnes[`${i}`]?.value || ''} id='imagesOnes' required />
                                            <label htmlFor="imagesOnes">
                                              IMAGENES MULTIPLES 📸. :*
                                            </label>
                                            {
                                              i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeImageOneFields(i)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                              </button> : null
                                            }
                                          </div>
                                        ))}
                                      </div>
                                      <div className="form-groupAdd">
                                        <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addImageOneFields()}>
                                          <i className="fa-solid fa-square-plus"></i> Agregue Campo.
                                        </button>
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
                    </div>
                    <hr />
                  </div >
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
};

export default AddProducts;
