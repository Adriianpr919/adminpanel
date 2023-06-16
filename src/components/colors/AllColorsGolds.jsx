import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllColorGold from './AllColorGold';
import ReactPaginate from 'react-paginate';
import { colorGoldApi } from '../../api/color/colorGoldApi';

const AllColorsGolds = () => {

  const [colorsgolds, setColorsgolds] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const colorsgoldsPerPage = 5;
  const pagesVisited = pageNumber * colorsgoldsPerPage;

  const pageCount = Math.ceil(colorsgolds.length / colorsgoldsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultColorgold = await colorGoldApi.get('/all');
      // i want the latest colorsgolds to show

      const resultColorgoldData = resultColorgold.data;

      const sortResultColorgoldData = resultColorgoldData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultColorgoldData);
      setColorsgolds(sortResultColorgoldData);
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
                <i className="fa-solid fa-eye"></i> El Color De Oro 🖌️ Recientes.
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            colorsgolds.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay El Color De Oro 🖌️.!</h3>
            ) : (
              <>
                {
                  colorsgolds.slice(pagesVisited, pagesVisited + colorsgoldsPerPage).map((colorgold) => (
                    <AllColorGold key={colorgold._id} colorgold={colorgold} />
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

export default AllColorsGolds;