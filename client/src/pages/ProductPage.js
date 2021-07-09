import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/products/productsActions";
import { addToCart } from "../redux/cart/cartAction";

const ProductPage = () => {
  const id = useParams().id;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(id));
    //eslint-disable-next-line
  }, []);

  
  const onHandleChange = (e) => {
    setQty(e.target.value);
  };
  const addProductToCard = () => {
    dispatch(addToCart(id, qty));
  };

  return (
    <div className="product-page container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img src={product?.image} alt="" width="50%" />
      <div className="product-page__info">
        <h3>{product?.name}</h3>
        <span className="product-page__price">{product?.price}.00 £</span>
        <span>{product?.countInStock > 0 ? "In Stock" : "Out Of Stock"}</span>
        <p>{product?.description}</p>
        {product?.countInStock && (
          <div>
            <select value={qty} onChange={onHandleChange}>
              {[...Array(product?.countInStock).keys()].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}
        {product?.countInStock > 0 && (
          <button type="button" onClick={addProductToCard}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
