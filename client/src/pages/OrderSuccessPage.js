import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSuccessPage = () => {
  const history = useHistory();
  const order = useSelector((state) => state.order.order);
  const onHandelClick = () => {
    history.push("/");
  };
  return (
    <div className="order-success container">
      <h4>Thanks for your order</h4>
      <span>ORDER NUMBER: {order?._id.slice(-7)}</span>
      <span>TOTAL: {order?.totalPrice}.00 £</span>
      <button type="button" onClick={onHandelClick}>
        Continue shopping
      </button>
    </div>
  );
};

export default OrderSuccessPage;
