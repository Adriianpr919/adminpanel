import React from 'react';
import SideBar from '../../components/layout/SideBar';
import TopBar from '../../components/layout/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import AddProducts from '../../components/products/AddProducts';
import Users from '../login/Users';
import Posts from '../pages/Posts';
import AddBlogs from '../../components/blogs/AddBlogs';
import Orders from '../pages/Orders';
import Login from '../login/Login';
import Footer from '../Layout/Footer';
import MenuNavbar from '../Layout/MenuNavbar';

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
              <SideBar />
              <TopBar />
            </nav>
            <div className="content">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/addproducts' element={<AddProducts />} />
                <Route path='/users' element={<Users />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/addposts' element={<AddBlogs />} />
                <Route path='/orders' element={<Orders />} />
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