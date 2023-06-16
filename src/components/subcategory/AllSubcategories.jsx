import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllSubcategory from './AllSubcategory';
import ReactPaginate from 'react-paginate';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';

const AllSubcategories = () => {

  const [subcategory, setSubcategory] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const subcategoryPerPage = 5;
  const pagesVisited = pageNumber * subcategoryPerPage;

  const pageCount = Math.ceil(subcategory.length / subcategoryPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultSubcategory = await subcategoryApi.get('/all');
      // i want the latest subcategory to show

      const resultSubcategoryData = resultSubcategory.data;

      const sortResultSubcategoryData = resultSubcategoryData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultSubcategoryData);
      setSubcategory(sortResultSubcategoryData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> MEN&#218; 2 Categor&#237;as Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            subcategory.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay MEN&#218; 2 Categor&#237; as.!</h3>
            ) : (
              <>
                {
                  subcategory.slice(pagesVisited, pagesVisited + subcategoryPerPage).map((subcategory) => (
                    <AllSubcategory key={subcategory._id} subcategory={subcategory} />
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

export default AllSubcategories;