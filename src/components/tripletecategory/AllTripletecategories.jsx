import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllTripletecategory from './AllTripletecategory';
import ReactPaginate from 'react-paginate';
import { tripletecategoryApi } from '../../api/tripletecategory/tripletecategoryApi';

const AllTripletecategories = () => {

  const [tripletecategory, setTripletecategory] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const tripletecategoryPerPage = 5;
  const pagesVisited = pageNumber * tripletecategoryPerPage;

  const pageCount = Math.ceil(tripletecategory.length / tripletecategoryPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultTripletecategory = await tripletecategoryApi.get('/all');
      // i want the latest tripletecategory to show

      const resultTripletecategoryData = resultTripletecategory.data;

      const sortResultTripletecategoryData = resultTripletecategoryData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultTripletecategoryData);
      setTripletecategory(sortResultTripletecategoryData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> MEN&#218; 3 Categor&#237;as Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            tripletecategory.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay MEN&#218; 3 Categor&#237;as.!</h3>
            ) : (
              <>
                {
                  tripletecategory.slice(pagesVisited, pagesVisited + tripletecategoryPerPage).map((tripletecategory) => (
                    <AllTripletecategory key={tripletecategory._id} tripletecategory={tripletecategory} />
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

export default AllTripletecategories;