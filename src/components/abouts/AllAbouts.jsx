import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllAbout from './AllAbout';
import ReactPaginate from 'react-paginate';
import { aboutApi } from '../../api/about/aboutApi';

const AllAbouts = () => {

  const [abouts, setAbouts] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const aboutsPerPage = 5;
  const pagesVisited = pageNumber * aboutsPerPage;

  const pageCount = Math.ceil(abouts.length / aboutsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultAbout = await aboutApi.get(`/all`);
      // i want the latest abouts to show

      const resultAboutData = resultAbout.data;

      const sortResultAboutData = resultAboutData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultAboutData);
      setAbouts(sortResultAboutData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Acerca De Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            abouts.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Acerca De.!</h3>
            ) : (
              <>
                {
                  abouts.slice(pagesVisited, pagesVisited + aboutsPerPage).map((about) => (
                    <AllAbout key={about._id} about={about} />
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
}

export default AllAbouts;