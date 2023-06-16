import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllColorStone from './AllColorStone';
import ReactPaginate from 'react-paginate';
import { colorStoneApi } from '../../api/color/colorStoneApi';

const AllColorsStones = () => {

  const [colorsstones, setColorsstones] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const colorsstonesPerPage = 5;
  const pagesVisited = pageNumber * colorsstonesPerPage;

  const pageCount = Math.ceil(colorsstones.length / colorsstonesPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultColorstone = await colorStoneApi.get('/all');
      // i want the latest colorsstones to show

      const resultColorstoneData = resultColorstone.data;

      const sortResultColorstoneData = resultColorstoneData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultColorstoneData);
      setColorsstones(sortResultColorstoneData);
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
                <i className="fa-solid fa-eye"></i> El Color De Piedras 🖌️ Recientes.
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            colorsstones.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay El Color De Piedras 🖌️.!</h3>
            ) : (
              <>
                {
                  colorsstones.slice(pagesVisited, pagesVisited + colorsstonesPerPage).map((colorstone) => (
                    <AllColorStone key={colorstone._id} colorstone={colorstone} />
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

export default AllColorsStones;