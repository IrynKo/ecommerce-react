import React  from "react";
import { Link } from "react-router-dom";
import AdminOrdersListStyled from "./AdminOrdersListStyled";

const AdminOrdersList = ({ item }) => {

  /*useEffect(()=>{
    dispatch(getListOrders());
  },[])*/


  return (
    <AdminOrdersListStyled>
      <div>
        <h5>Order Id</h5>
        <Link to={"/order/" + item._id}>{item._id.slice(-7)}</Link>
      </div>
      <div className="admin-list__user-info">
        <h5>User</h5>
        <span> Id:{item.user._id.slice(-7)}</span>
        <span>Name: {item.user.name}</span>
        <span>Email: {item.user.email}</span>
      </div>
      <div>
        <h5>Order info</h5>
        <p>{item.isDelivered ? "Delivered" : "On its way"}</p>
        <p>Total price: {item.totalPrice}.00 £</p>
      </div>
    </AdminOrdersListStyled>
  );
};

export default AdminOrdersList;
