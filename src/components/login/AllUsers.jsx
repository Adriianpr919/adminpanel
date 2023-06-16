//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllUser from './AllUser';
import { userApi } from '../../api/login/userApi';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  useEffect(() => {

    const fetchData = async () => {
      const resultUser = await userApi.get('/all');
      // i want the latest Users to show

      const resultUserData = resultUser.data;

      const sortResultUserData = resultUserData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

      console.log(sortResultUserData);
      setUsers(sortResultUserData);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fas fa-user-shield"></i> Colaboradores Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {
            users.length === 0 ? (
              <h3 className='no-data'>¡.Actualmente NO Hay Colaboradores.!</h3>
            ) : (
              <>
                {
                  users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => (
                    <AllUser key={user._id} user={user} />
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

export default AllUsers;
