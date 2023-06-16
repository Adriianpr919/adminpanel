import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllCategory from './AllCategory';
import ReactPaginate from 'react-paginate';
import { categoryApi } from '../../api/category/categoryApi';

const AllCategories = () => {

  const [category, setCategory] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const categoryPerPage = 5;
  const pagesVisited = pageNumber * categoryPerPage;

  const pageCount = Math.ceil(category.length / categoryPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultCategory = await categoryApi.get('/all');
      // i want the latest category to show

      const resultCategoryData = resultCategory.data;

      const sortResultCategoryData = resultCategoryData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultCategoryData);
      setCategory(sortResultCategoryData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> MEN&#218; 1 Categor&#237;as Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            category.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay MEN&#218; 1 Categor&#237; as.!</h3>
            ) : (
              <>
                {
                  category.slice(pagesVisited, pagesVisited + categoryPerPage).map((category) => (
                    <AllCategory key={category._id} category={category} />
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

export default AllCategories;