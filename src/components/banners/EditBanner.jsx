import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { bannerApi } from '../../api/banner/bannerApi';

const EditBanner = ({ banner, setOpenEdit }) => {

  const [title, setTitle] = useState(banner.title);
  const [image, setImage] = useState(banner.image);
  const [description, setDescription] = useState(banner.description);

  const editBannerHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await bannerApi.put("/update", {
        _id: banner._id,
        title,
        image,
        description
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente Carrusel.!");
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
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Carrusel Para Deslizarse.
              </h3>
              <p className="mt-2">
                <form onSubmit={editBannerHandler}>
                  <div>
                    <hr />
                    <label htmlFor="title">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">CAMBIAR IMAGEN PRINCIPAL 📸. :*</div>
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
                                    <input className="form-control" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
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
                    <label htmlFor="description">
                      CAMBIAR COMENTARIOS. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="description" cols="100" rows="100" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="description">
                        CAMBIAR COMENTARIOS. :*
                      </label>
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

export default EditBanner;