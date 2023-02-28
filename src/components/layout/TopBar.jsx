import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


const TopBar = () => {



  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('adminInfo');
    toast.success('¡.Ha Cerrado Sesión Correctamente Como Administrador.!');
    navigate('/login');
  }

  useEffect(() => {
    //check for if exists admin then redirect to login page
    if (!localStorage.getItem('adminInfo')) {
      localStorage.getItem('adminInfo');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <li className="nav-item dropdown">
          <a className="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#!" rel="noopener noreferrer">
            <div className="avatar avatar-xl">
              <img className="rounded-circle" src="../../../assets/img/customers/user.png" alt="Nury Valenzuela." title="Nury Valenzuela." />
            </div>
          </a>
          <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
            <div className="bg-white dark__bg-1000 rounded-2 py-2">
              <div className="dropdown-divider" />
              <a className="dropdown-item fw-bold text-danger" href="#!" rel="noopener noreferrer">
                <span onClick={logoutHandler} style={{ fontSize: "15px" }}>
                  <FontAwesomeIcon icon={faPowerOff} className="me-1" aria-hidden="true" /> Cerrar Sesión.
                </span>
              </a>
              <div className="dropdown-divider" />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TopBar;
