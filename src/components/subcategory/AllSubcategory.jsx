import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewSubcategory from './ViewSubcategory';
import EditSubcategory from './EditSubcategory';
import { toast } from 'react-toastify';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';
//import axios from 'axios';

const AllSubcategory = ({ subcategory }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteSubcategory = async (e) => {
    e.preventDefault();

    try {

      const { data } = await subcategoryApi.delete(`/delete/${subcategory._id}`);

      if (data) {
        toast.success('¡.SubCategoría Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.SubCategoría NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={subcategory._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {subcategory.titlesubcategory}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver SubCategoría.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar SubCategoría.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteSubcategory} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar SubCategoría.">
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
      {openView && <ViewSubcategory subcategory={subcategory} setOpenView={setOpenView} />}
      {openEdit && <EditSubcategory subcategory={subcategory} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllSubcategory;