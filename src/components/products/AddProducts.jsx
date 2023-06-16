import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { productApi } from '../../api/product/productApi';
import { sizeApi } from '../../api/size/sizeApi';
import { colorGoldApi } from '../../api/color/colorGoldApi';
import { colorStoneApi } from '../../api/color/colorStoneApi';
import { categoryApi } from '../../api/category/categoryApi';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';
import { tripletecategoryApi } from '../../api/tripletecategory/tripletecategoryApi';

const AddProducts = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [titlecategory, setTitlecategory] = useState('');
  const [titlesubcategory, setTitlesubcategory] = useState('');
  const [titletripletecategory, setTitletripletecategory] = useState('');
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [titlesize, setTitlesize] = useState('');
  const [titlecolorgold, setTitlecolorgold] = useState('');
  const [titlecolorstone, setTitlecolorstone] = useState('');
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [title, setTitle] = useState('');
  const [categoryOptions, setCategoryOptions] = useState('');
  const [subcategoryOptions, setSubcategoryOptions] = useState('');
  const [tripletecategoryOptions, setTripletecategoryOptions] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizesOptions, setSizesOptions] = useState([{ value: '', key: '' }]);
  const [colorsgoldsOptions, setColorsgoldsOptions] = useState([{ value: '', key: '' }]);
  const [colorsstonesOptions, setColorsstonesOptions] = useState([{ value: '', key: '' }]);
  const [image, setImage] = useState('');
  const [imagesOnes, setImagesOnes] = useState([{ value: '', key: '' }]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //for sizesOptions add fields
  const handleChangeSizeOption = (e, i) => {
    e.preventDefault();
    const clonedSizesOptions = [...sizesOptions];
    clonedSizesOptions[`${i}`] = { value: e.target.value, key: i };
    setSizesOptions(clonedSizesOptions);
  };

  const addSizeOptionFields = () => {
    setSizesOptions([...sizesOptions, { value: '', key: '' }]);
  }

  const removeSizeOptionFields = (i) => {
    const newSizeOptionValues = [...sizesOptions];
    newSizeOptionValues.splice(i, 1);
    setSizesOptions(newSizeOptionValues);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //for colorsGoldsOptions add fields
  const handleChangeColorGoldOption = (e, i) => {
    e.preventDefault();
    const clonedColorsGoldsOptions = [...colorsgoldsOptions];
    clonedColorsGoldsOptions[`${i}`] = { value: e.target.value, key: i };
    setColorsgoldsOptions(clonedColorsGoldsOptions);
  };

  const addColorGoldOptionFields = () => {
    setColorsgoldsOptions([...colorsgoldsOptions, { value: '', key: '' }]);
  }

  const removeColorGoldOptionFields = (i) => {
    const newColorGoldOptionValues = [...colorsgoldsOptions];
    newColorGoldOptionValues.splice(i, 1);
    setColorsgoldsOptions(newColorGoldOptionValues);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //for colorsStonesOptions add fields
  const handleChangeColorStoneOption = (e, i) => {
    e.preventDefault();
    const clonedColorsStonesOptions = [...colorsstonesOptions];
    clonedColorsStonesOptions[`${i}`] = { value: e.target.value, key: i };
    setColorsstonesOptions(clonedColorsStonesOptions);
  };

  const addColorStoneOptionFields = () => {
    setColorsstonesOptions([...colorsstonesOptions, { value: '', key: '' }]);
  }

  const removeColorStoneOptionFields = (i) => {
    const newColorStoneOptionValues = [...colorsstonesOptions];
    newColorStoneOptionValues.splice(i, 1);
    setColorsstonesOptions(newColorStoneOptionValues);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
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

      const { data } = await productApi.post('/add', {

        title,
        categoryOptions,
        subcategoryOptions,
        tripletecategoryOptions,
        countInStock,
        description,
        price,
        sizesOptions,
        colorsgoldsOptions,
        colorsstonesOptions,
        image,
        imagesOnes

      });

      console.log(data);
      toast.success('¡.Ha Agregado Con Éxito Un Nuevo Producto.!');
      setTitle('');
      setCategoryOptions('');
      setSubcategoryOptions('');
      setTripletecategoryOptions('');
      setCountInStock('');
      setDescription('');
      setPrice('');
      setSizesOptions([{ value: '', key: '' }]);
      setColorsgoldsOptions([{ value: '', key: '' }]);
      setColorsstonesOptions([{ value: '', key: '' }]);
      setImage('');
      setImagesOnes([{ value: '', key: '' }]);

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Producto.!');

    }
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultCategory = await categoryApi.get('/all');
      console.log(resultCategory.data);
      setTitlecategory(resultCategory.data);

      const resultSubcategory = await subcategoryApi.get('/all');
      console.log(resultSubcategory.data);
      setTitlesubcategory(resultSubcategory.data);

      const resultTripletecategory = await tripletecategoryApi.get('/all');
      console.log(resultTripletecategory.data);
      setTitletripletecategory(resultTripletecategory.data);

      const resultSizes = await sizeApi.get('/all');
      console.log(resultSizes.data);
      setTitlesize(resultSizes.data);

      const resultColorsgolds = await colorGoldApi.get('/all');
      console.log(resultColorsgolds.data);
      setTitlecolorgold(resultColorsgolds.data);

      const resultColorsstones = await colorStoneApi.get('/all');
      console.log(resultColorsstones.data);
      setTitlecolorstone(resultColorsstones.data);
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
                      <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        TITULO. :*
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
                        MENÚ DE OPCIONES MEN&#218; 1 CATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="categoryOptions">
                              MEN&#218; 1 CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control"
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
                                  className="form-select js-choice"
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
                                MEN&#218; 1 CATEGORÍA. :*
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
                        MENÚ DE OPCIONES MEN&#218; 2 CATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="subcategoryOptions">
                              MEN&#218; 2 CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control"
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
                                  className="form-select js-choice"
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
                                MEN&#218; 2 CATEGORÍA. :*
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
                        MENÚ DE OPCIONES MEN&#218; 3 CATEGORÍA.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="tripletecategoryOptions">
                              MEN&#218; 3 CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input
                                className="form-control"
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
                                  className="form-select js-choice"
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
                                MEN&#218; 3 CATEGORÍA. :*
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
                      <input className="form-control" type="number" min={0} max={9000} onChange={(e) => setCountInStock(e.target.value)} value={countInStock} id='countInStock' required />
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
                              <input className="form-control" type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price' required />
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
                      <textarea className="form-control" id="desc" cols="100" rows="100" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">MEN&#218; DE OPCIONES LA TALLA 📏. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="sizesOptions">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              MEN&#218; DE OPCIONES LA TALLA 📏.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="sizesOptions">
                                        MEN&#218; DE OPCIONES LA TALLA 📏. :*
                                      </label>
                                      {sizesOptions.map((element, i) => (
                                        <>
                                          <div className='d-flexAdd form-floating mb-3' key={i}>
                                            <input
                                              type="text"
                                              className="form-control"
                                              key={element.i}
                                              onChange={(e) => handleChangeSizeOption(e, i, element.i)}
                                              value={sizesOptions[`${i}`]?.value || ''}
                                              name={sizesOptions[`${i}`]?.value || ''}
                                              id={sizesOptions[`${i}`]?.value || ''} required />
                                            <label htmlFor="sizesOptions">
                                              MEN&#218; DE OPCIONES LA TALLA 📏. :*
                                            </label>
                                            {
                                              i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeSizeOptionFields(i)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                              </button> : null
                                            }
                                          </div>
                                          <div className="mb-3">
                                            <label htmlFor="sizesOptions">
                                              Seleccione Uno ⬆️. :*
                                            </label>
                                            <select
                                              className="form-select js-choice"
                                              aria-label=".form-select-lg js-choice"
                                              data-placeholder="--- Seleccionar ---"
                                              data-control="select2"
                                              defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                              onChange={(e) => handleChangeSizeOption(e, i, element.i)}
                                              value={sizesOptions[`${i}`]?.value || ''}
                                              name={sizesOptions[`${i}`]?.value || ''}
                                              id={sizesOptions[`${i}`]?.value || ''}
                                              required="required"
                                              data-options='{"removeItemButton":true,"placeholder":true}'>
                                              <option value={'Seleccionar'} defaultValue hidden>
                                                {'--- Seleccionar ---'}
                                              </option>
                                              {titlesize &&
                                                titlesize.map((titlesize) => (
                                                  <option
                                                    details={titlesize}
                                                    key={titlesize._id}
                                                    name={titlesize.titlesize}
                                                    value={titlesize.titlesize}
                                                    className="badge rounded-pill badge-soft-warning">
                                                    <code>
                                                      {titlesize.titlesize}
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
                                        </>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addSizeOptionFields()}>
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
                        <div className="panel-heading">MEN&#218; DE OPCIONES EL COLOR DE ORO 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="colorsgoldsOptions">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              MEN&#218; DE OPCIONES EL COLOR DE ORO 🖌️.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="colorsgoldsOptions">
                                        MEN&#218; DE OPCIONES EL COLOR DE ORO 🖌️. :*
                                      </label>
                                      {colorsgoldsOptions.map((element, i) => (
                                        <>
                                          <div className='d-flexAdd form-floating mb-3' key={i}>
                                            <input
                                              type="text"
                                              className="form-control"
                                              key={element.i}
                                              onChange={(e) => handleChangeColorGoldOption(e, i, element.i)}
                                              value={colorsgoldsOptions[`${i}`]?.value || ''}
                                              name={colorsgoldsOptions[`${i}`]?.value || ''}
                                              id={colorsgoldsOptions[`${i}`]?.value || ''} required />
                                            <label htmlFor="colorsgoldsOptions">
                                              MEN&#218; DE OPCIONES EL COLOR DE ORO 🖌️. :*
                                            </label>
                                            {
                                              i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeColorGoldOptionFields(i)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                              </button> : null
                                            }
                                          </div>
                                          <div className="mb-3">
                                            <label htmlFor="colorsgoldsOptions">
                                              Seleccione Uno ⬆️. :*
                                            </label>
                                            <select
                                              className="form-select js-choice"
                                              aria-label=".form-select-lg js-choice"
                                              data-placeholder="--- Seleccionar ---"
                                              data-control="select2"
                                              defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                              onChange={(e) => handleChangeColorGoldOption(e, i, element.i)}
                                              value={colorsgoldsOptions[`${i}`]?.value || ''}
                                              name={colorsgoldsOptions[`${i}`]?.value || ''}
                                              id={colorsgoldsOptions[`${i}`]?.value || ''}
                                              required="required"
                                              data-options='{"removeItemButton":true,"placeholder":true}'>
                                              <option value={'Seleccionar'} defaultValue hidden>
                                                {'--- Seleccionar ---'}
                                              </option>
                                              {titlecolorgold &&
                                                titlecolorgold.map((titlecolorgold) => (
                                                  <option
                                                    details={titlecolorgold}
                                                    key={titlecolorgold._id}
                                                    name={titlecolorgold.titlecolorgold}
                                                    value={titlecolorgold.titlecolorgold}
                                                    className="badge rounded-pill badge-soft-warning">
                                                    <code>
                                                      {titlecolorgold.titlecolorgold}
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
                                        </>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addColorGoldOptionFields()}>
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
                        <div className="panel-heading">MEN&#218; DE OPCIONES EL COLOR DE PIEDRAS 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="colorsstonesOptions">
                                <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              MEN&#218; DE OPCIONES EL COLOR DE PIEDRAS 🖌️.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="colorsstonesOptions">
                                        MEN&#218; DE OPCIONES EL COLOR DE PIEDRAS 🖌️. :*
                                      </label>
                                      {colorsstonesOptions.map((element, i) => (
                                        <>
                                          <div className='d-flexAdd form-floating mb-3' key={i}>
                                            <input
                                              type="text"
                                              className="form-control"
                                              key={element.i}
                                              onChange={(e) => handleChangeColorStoneOption(e, i, element.i)}
                                              value={colorsstonesOptions[`${i}`]?.value || ''}
                                              name={colorsstonesOptions[`${i}`]?.value || ''}
                                              id={colorsstonesOptions[`${i}`]?.value || ''} required />
                                            <label htmlFor="colorsstonesOptions">
                                              MEN&#218; DE OPCIONES EL COLOR DE PIEDRAS 🖌️. :*
                                            </label>
                                            {
                                              i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeColorStoneOptionFields(i)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                              </button> : null
                                            }
                                          </div>
                                          <div className="mb-3">
                                            <label htmlFor="colorsstonesOptions">
                                              Seleccione Uno ⬆️. :*
                                            </label>
                                            <select
                                              className="form-select js-choice"
                                              aria-label=".form-select-lg js-choice"
                                              data-placeholder="--- Seleccionar ---"
                                              data-control="select2"
                                              defaultValue={{ label: "--- Seleccionar ---", value: 0 }}
                                              onChange={(e) => handleChangeColorStoneOption(e, i, element.i)}
                                              value={colorsstonesOptions[`${i}`]?.value || ''}
                                              name={colorsstonesOptions[`${i}`]?.value || ''}
                                              id={colorsstonesOptions[`${i}`]?.value || ''}
                                              required="required"
                                              data-options='{"removeItemButton":true,"placeholder":true}'>
                                              <option value={'Seleccionar'} defaultValue hidden>
                                                {'--- Seleccionar ---'}
                                              </option>
                                              {titlecolorstone &&
                                                titlecolorstone.map((titlecolorstone) => (
                                                  <option
                                                    details={titlecolorstone}
                                                    key={titlecolorstone._id}
                                                    name={titlecolorstone.titlecolorstone}
                                                    value={titlecolorstone.titlecolorstone}
                                                    className="badge rounded-pill badge-soft-warning">
                                                    <code>
                                                      {titlecolorstone.titlecolorstone}
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
                                        </>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addColorStoneOptionFields()}>
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
                                      <input className="form-control" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
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
                                            <input key={element.i} className="form-control" type="text" name='imagesOnes' onChange={(e) => handleChangeImageOne(e, i, element.i)} value={imagesOnes[`${i}`]?.value || ''} id='imagesOnes' required />
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
