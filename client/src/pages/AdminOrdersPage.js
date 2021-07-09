import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders } from "../redux/order/orderActions";
import AdminOrdersList from "../component/orders/AdminOrdersList";

const AdminOrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders.allOrders);
  

  useEffect(() => {
      dispatch(getListOrders())
      //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      {orders?.length <= 0 && <p>No Orders</p>}
      <ul>
        {orders?.length > 0 &&
          orders?.map((item) => <AdminOrdersList key={item._id} item={item} />)}
      </ul>
    </div>
  );
};

export default AdminOrdersPage;
