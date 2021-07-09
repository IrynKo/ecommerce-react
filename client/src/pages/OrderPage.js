import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersList from "../component/myOrders/OrdersList";
import { listMyOrders } from "../redux/order/orderActions";

const OrderPage = () => {
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.myOrders.orders);
  useEffect(() => {
    dispatch(listMyOrders());
   //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      {myOrders?.length <= 0 && <span>You have no orders</span>}
      <ul className="myorder-list">
        {myOrders?.map((item) => (
          <OrdersList key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
