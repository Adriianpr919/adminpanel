import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { aboutApi } from '../../api/about/aboutApi';

const AddAbouts = () => {

  const [imageOne, setImageOne] = useState('');
  const [titleOne, setTitleOne] = useState('');
  const [descriptionOne, setDescriptionOne] = useState('');
  const [titleTwo, setTitleTwo] = useState('');
  const [descriptionTwo, setDescriptionTwo] = useState('');
  const [titleThree, setTitleThree] = useState('');
  const [descriptionThree, setDescriptionThree] = useState('');
  const [imageFour, setImageFour] = useState('');
  const [titleFour, setTitleFour] = useState('');
  const [descriptionFour, setDescriptionFour] = useState('');
  const [titleFive, setTitleFive] = useState('');
  const [imageMother, setImageMother] = useState('');
  const [imageDaughter, setImageDaughter] = useState('');

  const addAboutHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await aboutApi.post(`/add`, {

        imageOne,
        titleOne,
        descriptionOne,
        titleTwo,
        descriptionTwo,
        titleThree,
        descriptionThree,
        imageFour,
        titleFour,
        descriptionFour,
        titleFive,
        imageMother,
        imageDaughter

      });

      console.log(data);
      toast.success('¡.Has Añadido Correctamente Acerca De.!');
      setImageOne('');
      setTitleOne('');
      setDescriptionOne('');
      setTitleTwo('');
      setDescriptionTwo('');
      setTitleThree('');
      setDescriptionThree('');
      setImageFour('');
      setTitleFour('');
      setDescriptionFour('');
      setTitleFive('');
      setImageMother('');
      setImageDaughter('');

    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Acerca De.!');

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
                  <i className="fa-solid fa-square-plus"></i> Agregar Acerca De.
                </code>
              </h3>
              <p className="mt-2">
                <NavLink className="btn btn-link ps-0 btn-sm" to="/abouts" rel="noopener noreferrer">
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <i className="fa-solid fa-eye"></i> Volver Ver Acerca De. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </NavLink>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> Acerca De Recientes.
              </h3>
              <p className="mt-2">
                <form onSubmit={addAboutHandler}>
                  <div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">IMAGEN PRINCIPAL 📸. :*</div>
                          <div className="panel-body">
                            <fieldset className="col-md-12">
                              <legend style={{ textAlign: "justify" }}>
                                <label htmlFor="imageOne">
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
                                    <label htmlFor="imageOne">
                                      IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne' required />
                                      <label htmlFor="imageOne">
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
                    <label htmlFor="titleOne">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleOne(e.target.value)} value={titleOne} id='titleOne' required />
                      <label htmlFor="titleOne">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionOne">
                      COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionOne" cols="100" rows="100" required onChange={(e) => setDescriptionOne(e.target.value)} value={descriptionOne} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionOne">
                        COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleTwo">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleTwo(e.target.value)} value={titleTwo} id='titleTwo' required />
                      <label htmlFor="titleTwo">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionTwo">
                      COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionTwo" cols="100" rows="100" required onChange={(e) => setDescriptionTwo(e.target.value)} value={descriptionTwo} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionTwo">
                        COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleThree">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleThree(e.target.value)} value={titleThree} id='titleThree' required />
                      <label htmlFor="titleThree">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionThree">
                      COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionThree" cols="100" rows="100" required onChange={(e) => setDescriptionThree(e.target.value)} value={descriptionThree} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionThree">
                        COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">IMAGEN PRINCIPAL 📸. :*</div>
                          <div className="panel-body">
                            <fieldset className="col-md-12">
                              <legend style={{ textAlign: "justify" }}>
                                <label htmlFor="imageFour">
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
                                    <label htmlFor="imageFour">
                                      IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageFour(e.target.value)} value={imageFour} id='imageFour' required />
                                      <label htmlFor="imageFour">
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
                    <label htmlFor="titleFour">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleFour(e.target.value)} value={titleFour} id='titleFour' required />
                      <label htmlFor="titleFour">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionFour">
                      COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionFour" cols="100" rows="100" required onChange={(e) => setDescriptionFour(e.target.value)} value={descriptionFour} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionFour">
                        COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleFive">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleFive(e.target.value)} value={titleFive} id='titleFive' required />
                      <label htmlFor="titleFive">
                        TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">IMAGEN PRINCIPAL 📸. :*</div>
                          <div className="panel-body">
                            <fieldset className="col-md-12">
                              <legend style={{ textAlign: "justify" }}>
                                <label htmlFor="imageMother">
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
                                    <label htmlFor="imageMother">
                                      IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageMother(e.target.value)} value={imageMother} id='imageMother' required />
                                      <label htmlFor="imageMother">
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
                          <div className="panel-heading">IMAGEN PRINCIPAL 📸. :*</div>
                          <div className="panel-body">
                            <fieldset className="col-md-12">
                              <legend style={{ textAlign: "justify" }}>
                                <label htmlFor="imageDaughter">
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
                                    <label htmlFor="imageDaughter">
                                      IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageDaughter(e.target.value)} value={imageDaughter} id='imageDaughter' required />
                                      <label htmlFor="imageDaughter">
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
                  </div>
                  <hr />
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faPlus} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Agregar.
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

export default AddAbouts;