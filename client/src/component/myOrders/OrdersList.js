import React from "react";
import { Link } from "react-router-dom";
import OrdersListStyled from "./OrdersListStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const OrdersList = ({ item }) => {
  
  return (
    <OrdersListStyled>
      {!item.isDelivered ? <p>On its way</p> : <p>Delivered</p>}
      <div>
        <p>ORDER NUMBER: {item._id.slice(-7)}</p>
        <span>TOTAL: {item.totalPrice}.00 £</span>
      </div>
      <Link to={"/order/" + item._id}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </OrdersListStyled>
  );
};

export default OrdersList;
