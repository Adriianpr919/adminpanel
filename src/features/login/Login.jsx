import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../api/login/userApi';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await userApi.post('/login', {
        email,
        password
      });

      //console.log(data);

      if (data.isAdmin === true) {

        localStorage.setItem('adminInfo', JSON.stringify(data));
        toast.success('¡.Ha Iniciado Sesión Correctamente Como Administrador.!');
        navigate('/'); //navigate to home page

      } else {
        toast.error("¡.Correo Electrónico O Contraseña NO Válidos.!");
      }

    } catch (err) {
      toast.error("¡.Correo Electrónico O Contraseña NO Válidos.!");
    }
  }

  useEffect(() => {
    //check for if exists admin then redirect from login to home page
    if (localStorage.getItem('adminInfo')) {
      localStorage.getItem('adminInfo');
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <main className="main" id="top">
        <div className="container-fluid">
          <div className="row min-vh-100 flex-center g-0">
            <div className="col-lg-8 col-xxl-5 py-3 position-relative">
              <img className="bg-auth-circle-shape" src="../../../assets/img/icons/spot-illustrations/bg-shape.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" width={250} />
              <img className="bg-auth-circle-shape-2" src="../../../assets/img/icons/spot-illustrations/shape-1.png" alt="Nury Valenzuela&#174; Joyer&iacute;a" title="Nury Valenzuela&#174; Joyer&iacute;a" width={150} />
              <div className="card overflow-hidden z-index-1">
                <div className="card-body p-0">
                  <div className="row g-0 h-100">
                    <div className="col-md-5 text-center bg-card-gradient">
                      <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                        <div className="bg-holder bg-auth-card-shape" style={{ backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/half-circle.png)' }} />
                        {/*/.bg-holder*/}
                        <div className="z-index-1 position-relative">
                          <a className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="/" rel="noopener noreferrer">
                            Bienvenida De Nuevo, <span className="special" style={{ textAlign: "center", color: "white" }}>
                              Nury Valenzuela&#174;
                            </span>Joyer&iacute;a
                          </a>
                          <p className="opacity-75 text-white" style={{ textAlign: "center" }}>
                            Inicia Sesión En Tu Cuenta Para Continuar.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                        <p className="text-white">
                          CopyRight &copy; Nury Valenzuela&#174; Joyer&iacute;a &#45; SISTEMA DE CONTROL DE INVENTARIOS. &#45; {new Date().getFullYear()}. &#124; Todos Los Derechos Reservados.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex flex-center">
                      <div className="p-4 p-md-5 flex-grow-1">
                        <div className="row flex-between-center">
                          <div className="col-auto">
                            <h3>Cuenta De Ingreso.</h3>
                          </div>
                        </div>
                        <div className="position-relative mt-4">
                          <hr />
                          <div className="divider-content-center"><i className="fas fa-user-shield"></i></div>
                        </div>
                        <form onSubmit={loginHandler}>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                              Correo Electrónico. :*
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" id='email' required placeholder="Ingresa Tu Correo Electrónico." />
                          </div>
                          <div className="mb-3">
                            <div className="d-flex justify-content-between">
                              <label className="form-label" htmlFor="password">
                                Contraseña. :*
                              </label>
                            </div>
                            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" id='password' required placeholder="Ingresa Tu Contraseña." />
                          </div>
                          <div className="position-relative mt-4">
                            <hr />
                            <div className="divider-content-center"><i className="fas fa-user-shield"></i></div>
                          </div>
                          <div className="mb-3">
                            <button className="btn btn-primary d-block w-100 mt-3" name="submit">
                              <i className="fas fa-user-shield"></i> Iniciar Sesión.
                            </button>
                          </div>
                        </form>
                        <div className="position-relative mt-4">
                          <hr />
                          <div className="divider-content-center"><i className="fas fa-user-shield"></i></div>
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

export default Login;
