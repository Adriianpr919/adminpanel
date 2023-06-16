import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { aboutApi } from '../../api/about/aboutApi';

const EditAbout = ({ about, setOpenEdit }) => {

  const [imageOne, setImageOne] = useState(about.imageOne);
  const [titleOne, setTitleOne] = useState(about.titleOne);
  const [descriptionOne, setDescriptionOne] = useState(about.descriptionOne);
  const [titleTwo, setTitleTwo] = useState(about.titleTwo);
  const [descriptionTwo, setDescriptionTwo] = useState(about.descriptionTwo);
  const [titleThree, setTitleThree] = useState(about.titleThree);
  const [descriptionThree, setDescriptionThree] = useState(about.descriptionThree);
  const [imageFour, setImageFour] = useState(about.imageFour);
  const [titleFour, setTitleFour] = useState(about.titleFour);
  const [descriptionFour, setDescriptionFour] = useState(about.descriptionFour);
  const [titleFive, setTitleFive] = useState(about.titleFive);
  const [imageMother, setImageMother] = useState(about.imageMother);
  const [imageDaughter, setImageDaughter] = useState(about.imageDaughter);

  const editAboutHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await aboutApi.put(`/update`, {
        _id: about._id,
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
      toast.success("¡.Has Actualizado Correctamente Acerca De.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Acerca De.
              </h3>
              <p className="mt-2">
                <form onSubmit={editAboutHandler}>
                  <div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">CAMBIAR IMAGEN PRINCIPAL 📸. :*</div>
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
                                      CAMBIAR IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne' required />
                                      <label htmlFor="imageOne">
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
                    </div>
                    <hr />
                    <label htmlFor="titleOne">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleOne(e.target.value)} value={titleOne} id='titleOne' required />
                      <label htmlFor="titleOne">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionOne">
                      CAMBIAR COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionOne" cols="100" rows="100" required onChange={(e) => setDescriptionOne(e.target.value)} value={descriptionOne} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionOne">
                        CAMBIAR COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleTwo">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleTwo(e.target.value)} value={titleTwo} id='titleTwo' required />
                      <label htmlFor="titleTwo">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionTwo">
                      CAMBIAR COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionTwo" cols="100" rows="100" required onChange={(e) => setDescriptionTwo(e.target.value)} value={descriptionTwo} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionTwo">
                        CAMBIAR COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleThree">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleThree(e.target.value)} value={titleThree} id='titleThree' required />
                      <label htmlFor="titleThree">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionThree">
                      CAMBIAR COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionThree" cols="100" rows="100" required onChange={(e) => setDescriptionThree(e.target.value)} value={descriptionThree} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionThree">
                        CAMBIAR COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">CAMBIAR IMAGEN PRINCIPAL 📸. :*</div>
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
                                      CAMBIAR IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageFour(e.target.value)} value={imageFour} id='imageFour' required />
                                      <label htmlFor="imageFour">
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
                    </div>
                    <hr />
                    <label htmlFor="titleFour">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleFour(e.target.value)} value={titleFour} id='titleFour' required />
                      <label htmlFor="titleFour">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <label htmlFor="descriptionFour">
                      CAMBIAR COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="descriptionFour" cols="100" rows="100" required onChange={(e) => setDescriptionFour(e.target.value)} value={descriptionFour} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="descriptionFour">
                        CAMBIAR COMENTARIOS. :*
                      </label>
                    </div>

                    <hr />
                    <label htmlFor="titleFive">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitleFive(e.target.value)} value={titleFive} id='titleFive' required />
                      <label htmlFor="titleFive">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">CAMBIAR IMAGEN PRINCIPAL 📸. :*</div>
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
                                      CAMBIAR IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageMother(e.target.value)} value={imageMother} id='imageMother' required />
                                      <label htmlFor="imageMother">
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
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                      <div className="container">
                        <div className="panel panel-default">
                          <div className="panel-heading">CAMBIAR IMAGEN PRINCIPAL 📸. :*</div>
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
                                      CAMBIAR IMAGEN PRINCIPAL 📸. :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control" type="text" onChange={(e) => setImageDaughter(e.target.value)} value={imageDaughter} id='imageDaughter' required />
                                      <label htmlFor="imageDaughter">
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
                    </div>
                  </div>
                  <hr />
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

export default EditAbout;