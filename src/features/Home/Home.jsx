import React from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////
import SideBar from '../../components/layout/SideBar';
import TopBar from '../../components/layout/TopBar';
import Footer from '../Layout/Footer';
import MenuNavbar from '../Layout/MenuNavbar';
///////////////////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
import Dashboard from '../pages/Dashboard';
///////////////////////////////////////////////////////////////////////////////////////////////
import Products from '../pages/Products';
import AddProducts from '../../components/products/AddProducts';
///////////////////////////////////////////////////////////////////////////////////////////////
import Users from '../login/Users';
///////////////////////////////////////////////////////////////////////////////////////////////
import Posts from '../pages/Posts';
import AddBlogs from '../../components/blogs/AddBlogs';
///////////////////////////////////////////////////////////////////////////////////////////////
import Orders from '../pages/Orders';
///////////////////////////////////////////////////////////////////////////////////////////////
import Login from '../login/Login';
///////////////////////////////////////////////////////////////////////////////////////////////
import Abouts from '../pages/Abouts';
import AddAbouts from '../../components/abouts/AddAbouts';
///////////////////////////////////////////////////////////////////////////////////////////////
import Banners from '../pages/Banners';
import AddBanners from '../../components/banners/AddBanners';
///////////////////////////////////////////////////////////////////////////////////////////////
import Category from '../pages/Category';
import AddCategory from '../../components/category/AddCategory';
///////////////////////////////////////////////////////////////////////////////////////////////
import Subcategory from '../pages/Subcategory';
import AddSubcategory from '../../components/subcategory/AddSubcategory';
///////////////////////////////////////////////////////////////////////////////////////////////
import Tripletecategory from '../pages/Tripletecategory';
import AddTripletecategory from '../../components/tripletecategory/AddTripletecategory';
///////////////////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <main className="main" id="top">
          <div className="container" data-layout="container">
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
              <MenuNavbar />
              {/*--------------------------------------------------------------------*/}
              <SideBar />
              {/*--------------------------------------------------------------------*/}
              <TopBar />
            </nav>
            <div className="content">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/products' element={<Products />} />
                <Route path='/addproducts' element={<AddProducts />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/users' element={<Users />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/posts' element={<Posts />} />
                <Route path='/addposts' element={<AddBlogs />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/orders' element={<Orders />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/category' element={<Category />} />
                <Route path='/addcategory' element={<AddCategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/subcategory' element={<Subcategory />} />
                <Route path='/addsubcategory' element={<AddSubcategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/tripletecategory' element={<Tripletecategory />} />
                <Route path='/addtripletecategory' element={<AddTripletecategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/banners' element={<Banners />} />
                <Route path='/addbanners' element={<AddBanners />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='/abouts' element={<Abouts />} />
                <Route path='/addabouts' element={<AddAbouts />} />
                {/*--------------------------------------------------------------------*/}
              </Routes>
            </div>
            <Footer />
          </div>
        </main>
      </Router>
    </>
  );
};

export default Home;