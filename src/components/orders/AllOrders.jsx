import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import AllOrder from './AllOrder';
import { orderApi } from '../../api/order/orderApi';

const AllOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await orderApi.get("/all");
      setOrders(result.data);
      //console.log(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="card shadow-none">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"><i className="fa-solid fa-eye"></i> Pedidos Recientes. </h5>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          {orders.length === 0 ? (<h4 className='noProducts'>¡.Actualmente NO Hay Pedidos.!</h4>) : (
            <div>
              {orders.map((order) => (
                <AllOrder order={order} key={order._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllOrders;