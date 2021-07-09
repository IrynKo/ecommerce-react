import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../redux/order/orderActions";
import OrderDetailsItemStyled from "./OrderDetailsItemStyled";

const initialState = {
  price: "",
  qty: null,
};
const OrderDetailsItem = ({ item, order }) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.userSignIn.userInfo.isAdmin);
  const [state, setState] = useState({
    ...initialState,
    price: item.price,
    qty: item.qty,
  });
  const onHanlerChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onEdit = (e) => {
    const id = e.target.dataset.id;

    dispatch(
      addToOrder({ ...item, productId: id, price: state.price, qty: state.qty })
    );
  };
  return (
    <>
      <OrderDetailsItemStyled>
        <div className="order-item__descr">
          <span>{item.name}</span>
          {isAdmin ? (
            <>
              <p> {item.productId?.slice(-7)}</p>
              <form>
                <input
                  type="text"
                  name="price"
                  value={state.price}
                  onChange={onHanlerChange}
                />

                <input
                  type="text"
                  name="qty"
                  value={state.qty}
                  onChange={onHanlerChange}
                />
              </form>
              <button onClick={onEdit} data-id={item.productId}>
                Save
              </button>
            </>
          ) : (
            <>
              <img src={item.image} alt="Orders" width="100px" />
              <p>Quantity: {item.qty}</p>
              <p>Amount: {item.price}.00 £</p>
            </>
          )}
        </div>
      </OrderDetailsItemStyled>
    </>
  );
};

export default OrderDetailsItem;


