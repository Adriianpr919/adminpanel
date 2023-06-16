import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewCategory from './ViewCategory';
import EditCategory from './EditCategory';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { categoryApi } from '../../api/category/categoryApi';

const AllCategory = ({ category }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteCategory = async (e) => {
    e.preventDefault();

    try {

      const { data } = await categoryApi.delete(`/delete/${category._id}`);

      if (data) {
        toast.success('¡.Categoría Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Categoría NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={category._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {category.titlecategory}
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Categoría.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Categoría.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteCategory} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Categoría.">
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
      {openView && <ViewCategory category={category} setOpenView={setOpenView} />}
      {openEdit && <EditCategory category={category} setOpenEdit={setOpenEdit} />}
    </>
  );
}

export default AllCategory;