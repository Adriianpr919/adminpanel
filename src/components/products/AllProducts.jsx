//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllProduct from './AllProduct';
import { productApi } from '../../api/product/productApi';

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultProduct = await productApi.get('/all');
      // i want the latest products to show

      const resultProductData = resultProduct.data;

      const sortResultProductData = resultProductData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultProductData);
      setProducts(sortResultProductData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Productos Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            products.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Productos.!</h3>
            ) : (
              <>
                {
                  products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
                    <AllProduct key={product._id} product={product} />
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

export default AllProducts;
