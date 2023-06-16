import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewAbout from './ViewAbout';
import EditAbout from './EditAbout';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { aboutApi } from '../../api/about/aboutApi';

const AllAbout = ({ about }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteAbout = async (e) => {
    e.preventDefault();

    try {

      const { data } = await aboutApi.delete(`/delete/${about._id}`);

      if (data) {
        toast.success('¡.Acerca De Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Acerca De NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={about._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={about.imageOne} alt={about.titleOne} title={about.titleOne} />
                      </p>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {about.titleOne} ({about.descriptionOne})
                        </p>
                      </h5>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {about.titleTwo} ({about.descriptionTwo})
                        </p>
                      </h5>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {about.titleThree} ({about.descriptionThree})
                        </p>
                      </h5>
                    </div>
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={about.imageFour} alt={about.titleFour} title={about.titleFour} />
                      </p>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {about.titleFour} ({about.descriptionFour})
                        </p>
                      </h5>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {about.titleFive}
                        </p>
                      </h5>
                    </div>
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={about.imageMother} alt={about.titleFive} title={about.titleFive} />
                      </p>
                    </div>
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={about.imageDaughter} alt={about.titleFive} title={about.titleFive} />
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Acerca De.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Acerca De.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteAbout} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Acerca De.">
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
      {openView && <ViewAbout about={about} setOpenView={setOpenView} />}
      {openEdit && <EditAbout about={about} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllAbout;