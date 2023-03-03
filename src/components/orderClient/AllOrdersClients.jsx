import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllOrderClient from './AllOrderClient';
import ReactPaginate from 'react-paginate';

const AllOrdersClients = () => {

  const [ordersclients, setOrdersClients] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const ordersclientsPerPage = 5;
  const pagesVisited = pageNumber * ordersclientsPerPage;

  const pageCount = Math.ceil(ordersclients.length / ordersclientsPerPage);



  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultOrderClient = await axios.get('/api/ordersclients/all');
      // i want the latest OrderClient to show

      const resultOrderClientData = resultOrderClient.data;

      const sortResultOrderClientData = resultOrderClientData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultOrderClientData);
      setOrdersClients(sortResultOrderClientData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Pedidos Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            ordersclients.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Pedidos.!</h3>
            ) : (
              <>
                {
                  ordersclients.slice(pagesVisited, pagesVisited + ordersclientsPerPage).map((orderclient) => (
                    <AllOrderClient key={orderclient._id} orderclient={orderclient} />
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

export default AllOrdersClients;