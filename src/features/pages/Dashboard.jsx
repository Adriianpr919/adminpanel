import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import HomePage from '../views/HomePage';
import { userApi } from '../../api/login/userApi';
import { aboutApi } from '../../api/about/aboutApi';
import { categoryApi } from '../../api/category/categoryApi';
import { subcategoryApi } from '../../api/subcategory/subcategoryApi';
import { tripletecategoryApi } from '../../api/tripletecategory/tripletecategoryApi';
import { blogApi } from '../../api/blog/blogApi';
import { productApi } from '../../api/product/productApi';
import { orderApi } from '../../api/order/orderApi';
import { messageApi } from '../../api/messages/messageApi';
import { bannerApi } from '../../api/banner/bannerApi';
import { sizeApi } from '../../api/size/sizeApi';
import { colorGoldApi } from '../../api/color/colorGoldApi';
import { colorStoneApi } from '../../api/color/colorStoneApi';

const Dashboard = () => {

  const [users, setUsers] = useState(0); //defualt is 0
  const [abouts, setAbouts] = useState(0); //defualt is 0
  const [blogs, setBlogs] = useState(0); //defualt is 0
  const [banners, setBanners] = useState(0); //defualt is 0
  const [orders, setOrders] = useState(0); //default is 0
  const [messagesopcions, setMessagesopcions] = useState(0); //default is 0
  const [products, setProducts] = useState(0); //defualt is 0
  const [sizes, setSizes] = useState(0); //defualt is 0
  const [colorsgolds, setColorsgolds] = useState(0); //defualt is 0
  const [colorsstones, setColorsstones] = useState(0); //defualt is 0
  const [category, setCategory] = useState(0); //defualt is 0
  const [subcategory, setSubcategory] = useState(0); //defualt is 0
  const [tripletecategory, setTripletecategory] = useState(0); //defualt is 0

  const [sum, setSum] = useState(0); //default is 0

  useEffect(() => {

    const fetchData = async () => {

      //Teams Users
      const resultUsers = await userApi.get('/countUsers');
      console.log(resultUsers);
      setUsers(resultUsers.data);

      //Teams Abouts
      const resultAbouts = await aboutApi.get('/countAbouts');
      console.log(resultAbouts);
      setAbouts(resultAbouts.data);

      //Teams Category
      const resultCategory = await categoryApi.get('/countCategories');
      console.log(resultCategory);
      setCategory(resultCategory.data);

      //Teams Subcategory
      const resultSubcategory = await subcategoryApi.get('/countSubcategories');
      console.log(resultSubcategory);
      setSubcategory(resultSubcategory.data);

      //Teams Tripletecategory
      const resultTripletecategory = await tripletecategoryApi.get('/countTripletecategories');
      console.log(resultTripletecategory);
      setTripletecategory(resultTripletecategory.data);

      //Teams Blogs
      const resultBlogs = await blogApi.get('/countBlogs');
      console.log(resultBlogs);
      setBlogs(resultBlogs.data);

      //Teams Products
      const resultProducts = await productApi.get('/countProducts');
      console.log(resultProducts);
      setProducts(resultProducts.data);

      //Teams Sizes
      const resultSizes = await sizeApi.get('/countSizes');
      console.log(resultSizes);
      setSizes(resultSizes.data);

      //Teams Colorsgolds
      const resultColorsgolds = await colorGoldApi.get('/countColorsgolds');
      console.log(resultColorsgolds);
      setColorsgolds(resultColorsgolds.data);

      //Teams Colorsstones
      const resultColorsstones = await colorStoneApi.get('/countColorsstones');
      console.log(resultColorsstones);
      setColorsstones(resultColorsstones.data);

      //Teams Orders
      const resultOrdersClient = await orderApi.get('/countOrders');
      console.log(resultOrdersClient);
      setOrders(resultOrdersClient.data);

      //Teams Messagesopcions
      const resultMessagesopcions = await messageApi.get('/countMessagesopcions');
      console.log(resultMessagesopcions);
      setMessagesopcions(resultMessagesopcions.data);

      //Teams Banners
      const resultBanners = await bannerApi.get('/countBanners');
      console.log(resultBanners);
      setBanners(resultBanners.data);

      //Teams Sum
      const resultOrders = await orderApi.get('/countSumTotal');

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
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      MEN&#218; 1 Categor&#237;as. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/menu.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {category?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      MEN&#218; 2 Categor&#237;as. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/menu.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {subcategory?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      MEN&#218; 3 Categor&#237;as. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/menu.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {tripletecategory?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
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
                          <img className="me-3" src="../../../assets/img/icons/coin.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
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
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Acerca De. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/about.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Publicaciones.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {abouts?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Carrusel Para Deslizarse. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/slider.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Publicaciones.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {banners?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
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
                          <img className="me-3" src="../../../assets/img/icons/box.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
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
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      La Talla 📏. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/size.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {sizes?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      EL Color De Oro 🖌️. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/color(1).png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {colorsgolds?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      El Color De Piedras 🖌️. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/color(2).png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {colorsstones?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
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
                          <img className="me-3" src="../../../assets/img/icons/user.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
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
              {/*--------------------------------------------------------------------*/}
              <div className="col-md-6 col-xxl-3">
                <div className="card h-md-100">
                  <div className="card-header d-flex flex-between-center pb-0">
                    <h6 className="mb-0 badge rounded-pill fs--2 bg-200 text-primary" style={{ textAlign: "justify", fontSize: "15px" }}>
                      Mensajes. :*
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <div className="row g-0 h-100 align-items-center">
                      <div className="col">
                        <div className="d-flex align-items-center">
                          <img className="me-3" src="../../../assets/img/icons/chat.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
                          <div>
                            <h6 className="mb-2" style={{ textAlign: "justify", fontSize: "15px" }}>
                              Totales.
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-center ps-2">
                        <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1 fs-4 badge badge-soft-success rounded-pill fs--2">
                          {messagesopcions?.count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------------------------------------------*/}
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
                          <img className="me-3" src="../../../assets/img/icons/blog.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
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
              {/*--------------------------------------------------------------------*/}
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
                          <img className="me-3" src="../../../assets/img/icons/online-shopping.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" height={60} />
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
              {/*--------------------------------------------------------------------*/}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
