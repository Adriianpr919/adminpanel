import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllBanner from './AllBanner';
import ReactPaginate from 'react-paginate';
import { bannerApi } from '../../api/banner/bannerApi';

const AllBanners = () => {

  const [banners, setBanners] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const bannersPerPage = 5;
  const pagesVisited = pageNumber * bannersPerPage;

  const pageCount = Math.ceil(banners.length / bannersPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultBanner = await bannerApi.get('/all');
      // i want the latest banners to show

      const resultBannerData = resultBanner.data;

      const sortResultBannerData = resultBannerData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultBannerData);
      setBanners(sortResultBannerData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Carrusel Para Deslizarse Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            banners.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Carrusel Para Deslizarse.!</h3>
            ) : (
              <>
                {
                  banners.slice(pagesVisited, pagesVisited + bannersPerPage).map((banner) => (
                    <AllBanner key={banner._id} banner={banner} />
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

export default AllBanners;