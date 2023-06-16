import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllBlog from './AllBlog';
import ReactPaginate from 'react-paginate';
import { blogApi } from '../../api/blog/blogApi';

const AllBlogs = () => {

  const [blogs, setBlogs] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 5;
  const pagesVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blogs.length / blogsPerPage);



  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultBlog = await blogApi.get('/all');
      // i want the latest blogs to show

      const resultBlogData = resultBlog.data;

      const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultBlogData);
      setBlogs(sortResultBlogData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Blog Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            blogs.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Blogs.!</h3>
            ) : (
              <>
                {
                  blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
                    <AllBlog key={blog._id} blog={blog} />
                  ))
                }
                <ReactPaginate className='filter-pagination'
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  pageClassName={"pagi-item"}
                  pageLinkClassName={"pagi-link"}
                  activeClassName={"pagi-active"}
                  activeLinkClassName={"pagi-active-link"}
                  previousClassName={"pagi-item"}
                  previousLinkClassName={"pagi-link"}
                  nextClassName={"pagi-item"}
                  nextLinkClassName={"pagi-link"}
                  breakClassName={"pagi-item"}
                  breakLinkClassName={"pagi-link"}
                  disabledClassName={"disabledPagi"}
                />
              </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default AllBlogs;