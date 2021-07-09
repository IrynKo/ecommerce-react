import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import {
  getOrderDetails,
  deleteOrder,
  editOrder,
  removeAddToOrder,
} from "../redux/order/orderActions";
import OrderDetailsItem from "../component/orders/OrderDetailsItem";

const AdminOrdersPageDetails = () => {
  const id = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails.order);
  const orderDelete = useSelector((state) => state.orderDelete.success);
  const orderItem = useSelector((state) => state.orderItems);
  const isAdmin = useSelector((state) => state.userSignIn.userInfo);

  const [isDel, setIsDel] = useState(orderDetails?.isDelivered);

  useEffect(() => {
    setIsDel(orderDetails?.isDelivered);
  }, [orderDetails?.isDelivered]);

  const onHandlerChange = (e) => {
    const isDelValue = e.target.value;
    setIsDel(isDelValue === "Delivered" ? true : false);
  };
  useEffect(() => {
    dispatch(getOrderDetails(id));
    //eslint-disable-next-line
  }, [orderDelete]);
  const onHandelDelete = (e) => {
    const id = e.target.dataset.id;
    dispatch(deleteOrder(id));
  };
  const itemsQty = orderItem.orderItems?.reduce((a, b) => {
    return Number(a) + Number(b.qty);
  }, 0);
  const totalPrice = orderItem.orderItems?.reduce((a, b) => {
    return Number(a) + Number(b.price) * Number(b.qty);
  }, 0);
  
  const onHandelEdit = (e) => {
    const id = e.target.dataset.id;
    dispatch(
      editOrder(id, {
        orderItems: orderItem.orderItems,
        isDelivered: isDel,
        totalPrice: totalPrice,
        itemsQty,
      })
    );
    dispatch(removeAddToOrder());
    history.push("/orders");
  };
  return (
    <div className="container">
      <h3 className="admin_details__title ">ORDER INFORMATION</h3>
      <div className="admin_details__order-info">
        <span className="admin_details__number">
          Order Number: {orderDetails?._id.slice(-7)}
        </span>
        <span className="admin_details__number">
          Total Price: {orderDetails?.totalPrice}.00 £
        </span>
        <span className="admin_details__number">
          Total Qty: {orderDetails?.itemsQty}
        </span>
      </div>
      {isAdmin?.isAdmin && (
        <>
          <span className="admin_details__delivery-title">Delivery info:</span>
          <select
            className="admin_details__delivery-info"
            data-id={orderDetails?._id}
            value={isDel ? "Delivered" : "On its way"}
            onChange={onHandlerChange}
          >
            <option>Delivered</option>
            <option>On its way</option>
          </select>
        </>
      )}
      <div className="order-details">
        {isAdmin?.isAdmin && (
          <ul className="order-item__title">
            <li>Name</li>
            <li>Product artikel</li>
            <li>Amount</li>
            <li>Quantity</li>
          </ul>
        )}
        <ul>
          {orderDetails?.orderItems.map((item) => (
            <OrderDetailsItem
              key={item.productId}
              order={orderDetails?.orderItems}
              item={item}
            />
          ))}
        </ul>
        {isAdmin?.isAdmin && (
          <div className="order-admin__panel">
            <button
              className="order-admin__button delete"
              type="button"
              data-id={orderDetails?._id}
              onClick={onHandelDelete}
            >
              Delete Order
            </button>
            <div className="order-admin__button-descr">
              <button
                disabled={orderDetails?.orderItems > orderItem.orderItems}
                className="order-admin__button edit"
                type="button"
                data-id={orderDetails?._id}
                onClick={onHandelEdit}
              >
                Save Changes
              </button>
              <small>*First you have to save every item in order </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrdersPageDetails;
