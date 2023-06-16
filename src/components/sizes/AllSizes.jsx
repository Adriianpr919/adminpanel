import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllSize from './AllSize';
import ReactPaginate from 'react-paginate';
import { sizeApi } from '../../api/size/sizeApi';

const AllSizes = () => {

  const [sizes, setSizes] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const sizesPerPage = 5;
  const pagesVisited = pageNumber * sizesPerPage;

  const pageCount = Math.ceil(sizes.length / sizesPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultSize = await sizeApi.get('/all');
      // i want the latest sizes to show

      const resultSizeData = resultSize.data;

      const sortResultSizeData = resultSizeData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultSizeData);
      setSizes(sortResultSizeData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                <i className="fa-solid fa-eye"></i> La Tallas 📏 Recientes.
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            sizes.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Tallas 📏.!</h3>
            ) : (
              <>
                {
                  sizes.slice(pagesVisited, pagesVisited + sizesPerPage).map((size) => (
                    <AllSize key={size._id} size={size} />
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

export default AllSizes;