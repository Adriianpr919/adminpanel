import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <>
      <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
        <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="active" to="/" rel="noopener noreferrer" role="button" aria-haspopup="true" aria-expanded="false" id="dashboards" style={{ color: "black", fontSize: "15px" }}>
              <i className="fa-solid fa-sliders"></i> Menu Principal.
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" rel="noopener noreferrer" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps" style={{ color: "black", fontSize: "15px" }}>
              Menu.
            </a>
            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
              <div className="card navbar-card-app shadow-none dark__bg-1000">
                <div className="card-body scrollbar max-h-dropdown">
                  <img className="img-dropdown" src="../../../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" />
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="nav flex-column">
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-gear" /> MEN&#218; 1 CATEGORÍAS.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/category' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver MEN&#218; 1 Categor&#237;as.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addcategory' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear MEN&#218; 1 Categor&#237;as.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-gear" /> MEN&#218; 2 CATEGORÍAS.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/subcategory' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver MEN&#218; 2 Categor&#237;as.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addsubcategory' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear MEN&#218; 2 Categor&#237;as.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-gear" /> MEN&#218; 3 CATEGORÍAS.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/tripletecategory' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver MEN&#218; 3 Categor&#237;as.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addtripletecategory' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear MEN&#218; 3 Categor&#237;as.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon={faBagShopping} /> PRODUCTOS.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/products' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Productos.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addproducts' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear Productos.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-ruler" /> LA TALLAS 📏.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/sizes' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver La Tallas 📏.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addsizes' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear La Talla 📏.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-swatchbook" /> COLOR DE ORO 🖌️.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/colorsgolds' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver El Color De Oro 🖌️.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addcolorsgolds' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear El Color De Oro 🖌️.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-swatchbook" /> COLOR DE PIEDRAS 🖌️.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/colorsstones' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver El Color De Piedras 🖌️.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addcolorsstones' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear El Color De Piedras 🖌️.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fas fa-user-shield"></i> AJUSTES.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/users' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Colaboradores.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa-solid fa-message"></i> MENSAJES.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/messages' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver MENSAJES.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-box" /> MIS PEDIDOS.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/orders' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Pedidos.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon={faInfoCircle} /> PUBLICACIONES.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/posts' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Blog.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addposts' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear Blog.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-sliders" /> PUBLICACIONES.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/banners' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Carrusel Para Deslizarse.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addbanners' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear Carrusel Para Deslizarse.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                        <div className="dropdown-divider" />
                        {/*--------------------------------------------------------------------*/}
                        <p className="nav-link text-700 mb-0 fw-bold" style={{ color: "black", fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-address-card" /> PUBLICACIONES.
                        </p>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/abouts' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Ver Acerca De.
                        </NavLink>
                        <NavLink className="nav-link py-1 link-600 fw-medium" activeclassname="active" to='/addabouts' rel="noopener noreferrer" style={{ color: "black", fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Crear Acerca De.
                        </NavLink>
                        {/*--------------------------------------------------------------------*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
