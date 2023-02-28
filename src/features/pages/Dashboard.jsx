import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from '../views/HomePage';

const Dashboard = () => {

  const [users, setUsers] = useState(0); //defualt is 0
  const [blogs, setBlogs] = useState(0); //defualt is 0
  const [orders, setOrders] = useState(0); //default is 0
  const [products, setProducts] = useState(0); //defualt is 0

  const [sum, setSum] = useState(0); //default is 0

  useEffect(() => {

    const fetchData = async () => {

      //Teams users
      const resultUsers = await axios.get('/api/users/countUsers');
      console.log(resultUsers);
      setUsers(resultUsers.data);

      //Teams blogs
      const resultBlogs = await axios.get('/api/blogs/countBlogs');
      console.log(resultBlogs);
      setBlogs(resultBlogs.data);

      //Teams products
      const resultProducts = await axios.get('/api/products/countProducts');
      console.log(resultProducts);
      setProducts(resultProducts.data);

      //Teams orders
      const resultOrdersClient = await axios.get('/api/orders/countOrders');
      console.log(resultOrdersClient);
      setOrders(resultOrdersClient.data);

      //Teams sum
      const resultOrders = await axios.get('/api/orders/countSumTotal');

      const resultDataOrders = resultOrders.data;

      const totalSum = resultDataOrders[0].total;
      console.log(totalSum);

      setSum(totalSum);

    }

    fetchData();

  }, [])

  const uint8 = new Uint32Array([sum]);

  return (
    <>
      <hr className="my-4" />
      <main className="main" id="top">
        <div className="container" data-layout="container">
          <div className="content">
            <HomePage /><hr className="my-4" />
            <div className="row g-3 mb-3">
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Ganancias Totales. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/coin.png" alt="Nury Valenzuela." title="Nury Valenzuela." height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Productos. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/box.png" alt="Nury Valenzuela." title="Nury Valenzuela." height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {products?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Usuarios. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/user.png" alt="Nury Valenzuela." title="Nury Valenzuela." height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {users?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Blogs. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/blog.png" alt="Nury Valenzuela." title="Nury Valenzuela." height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Publicaciones.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {blogs?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Pedidos. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/online-shopping.png" alt="Nury Valenzuela." title="Nury Valenzuela." height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {orders?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
