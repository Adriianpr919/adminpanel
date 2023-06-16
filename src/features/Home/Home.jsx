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
import Posts from '../pages/Posts';
import AddBlogs from '../../components/blogs/AddBlogs';
///////////////////////////////////////////////////////////////////////////////////////////////
import Orders from '../pages/Orders';
///////////////////////////////////////////////////////////////////////////////////////////////
import Messages from '../pages/Messages';
///////////////////////////////////////////////////////////////////////////////////////////////
import Users from '../pages/Users';
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
import Sizes from '../pages/Sizes';
import AddSize from '../../components/sizes/AddSize';
///////////////////////////////////////////////////////////////////////////////////////////////
import ColorsGolds from '../pages/ColorsGolds';
import AddcolorGold from '../../components/colors/AddColorGold';
import ColorsStones from '../pages/ColorsStones';
import AddColorStone from '../../components/colors/AddColorStone';
///////////////////////////////////////////////////////////////////////////////////////////////
import Page404 from '../page404/page404';
///////////////////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
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
                <Route exact path='/' element={<Dashboard />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/addproducts' element={<AddProducts />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/sizes' element={<Sizes />} />
                <Route exact path='/addsizes' element={<AddSize />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/colorsgolds' element={<ColorsGolds />} />
                <Route exact path='/addcolorsgolds' element={<AddcolorGold />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/colorsstones' element={<ColorsStones />} />
                <Route exact path='/addcolorsstones' element={<AddColorStone />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/users' element={<Users />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/posts' element={<Posts />} />
                <Route exact path='/addposts' element={<AddBlogs />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/orders' element={<Orders />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/messages' element={<Messages />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/category' element={<Category />} />
                <Route exact path='/addcategory' element={<AddCategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/subcategory' element={<Subcategory />} />
                <Route exact path='/addsubcategory' element={<AddSubcategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/tripletecategory' element={<Tripletecategory />} />
                <Route exact path='/addtripletecategory' element={<AddTripletecategory />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/banners' element={<Banners />} />
                <Route exact path='/addbanners' element={<AddBanners />} />
                {/*--------------------------------------------------------------------*/}
                <Route exact path='/abouts' element={<Abouts />} />
                <Route exact path='/addabouts' element={<AddAbouts />} />
                {/*--------------------------------------------------------------------*/}
                <Route path='*' element={<Page404 />} />
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