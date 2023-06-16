import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewBanner from './ViewBanner';
import EditBanner from './EditBanner';
import { toast } from 'react-toastify';
import { bannerApi } from '../../api/banner/bannerApi';
//import axios from 'axios';

const AllBanner = ({ banner }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteBanner = async (e) => {
    e.preventDefault();

    try {

      const { data } = await bannerApi.delete(`/delete/${banner._id}`);

      if (data) {
        toast.success('¡.Carrusel Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Carrusel NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={banner._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={banner.image} alt={banner.title} title={banner.title} />
                      </p>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {banner.title} ({banner.description})
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Carrusel.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Carrusel.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteBanner} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Carrusel.">
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
      {openView && <ViewBanner banner={banner} setOpenView={setOpenView} />}
      {openEdit && <EditBanner banner={banner} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllBanner;