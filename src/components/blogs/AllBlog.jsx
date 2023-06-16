import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewBlog from './ViewBlog';
import EditBlog from './EditBlog';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { blogApi } from '../../api/blog/blogApi';

const AllBlog = ({ blog }) => {

  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handlerDeleteBlog = async (e) => {
    e.preventDefault();

    try {

      const { data } = await blogApi.delete(`/delete/${blog._id}`);

      if (data) {
        toast.success('¡.Blog Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Blog NO Eliminado.!');
    }

  }

  return (
    <>
      <>
        <div className="card mb-4" key={blog._id}>
          <div className="card-body">
            <div className="row">
              <div className="mb-4 col-md-6 col-lg-4">
                <div className="border rounded-1 h-100 d-flex flex-column justify-content-between pb-3">
                  <div className="overflow-hidden">
                    <div className="position-relative rounded-top overflow-hidden">
                      <p className="d-block">
                        <img className="img-fluid rounded-top" src={blog.image} alt={blog.title} title={blog.title} />
                      </p>
                    </div>
                    <div className="p-3">
                      <h5 className="fs-0">
                        <p className="text-dark">
                          {blog.title} ({blog.description})
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center px-3">
                    <div>
                      <>
                        <span onClick={() => setOpenView(true)} className="badge badge badge-soft-secondary text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Ver Blog.">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </>
                      <>
                        <span onClick={() => setOpenEdit(true)} className="badge badge badge-soft-success text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Editar Blog.">
                          <FontAwesomeIcon icon={faEdit} />
                        </span>
                      </>
                      <>
                        <span onClick={handlerDeleteBlog} className="badge badge badge-soft-danger text-center btn btn-sm btn-falcon-default me-2" style={{ fontSize: "15px", textAlign: "justify" }} title="Borrar Blog.">
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
      {openView && <ViewBlog blog={blog} setOpenView={setOpenView} />}
      {openEdit && <EditBlog blog={blog} setOpenEdit={setOpenEdit} />}
    </>
  );
};

export default AllBlog;
