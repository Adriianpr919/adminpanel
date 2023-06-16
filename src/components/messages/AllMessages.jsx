import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllMessage from './AllMessage';
import { messageApi } from '../../api/messages/messageApi';

const AllMessages = () => {

  const [messagesopcions, setMessagesopcions] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const messagesopcionsPerPage = 5;
  const messagesopcionsVisited = pageNumber * messagesopcionsPerPage;

  const pageCount = Math.ceil(messagesopcions.length / messagesopcionsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultMessageopcion = await messageApi.get('/all');
      // i want the latest messagesopcions to show

      const resultMessageopcionData = resultMessageopcion.data;

      const sortResultMessageopcionData = resultMessageopcionData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultMessageopcionData);
      setMessagesopcions(sortResultMessageopcionData);
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
                <i className="fa-solid fa-message"></i> Mensajes Recientes.
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            messagesopcions.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Mensajes.!</h3>
            ) : (
              <>
                {
                  messagesopcions.slice(messagesopcionsVisited, messagesopcionsVisited + messagesopcionsPerPage).map((messageopcion) => (
                    <AllMessage key={messageopcion._id} messageopcion={messageopcion} />
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

export default AllMessages;