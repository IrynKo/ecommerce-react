import React from "react";
import { Link } from "react-router-dom";
import ProductItemStyled from "./ProductItemStyled";

const ProductItem = ({ item }) => {
  return (
    <ProductItemStyled>
      <Link to={"/product/" + item._id}>
        {" "}
        <img className="product-item__img" alt="product" src={item.image} />
      </Link>
      <h4 className="product-item__name">
        <Link to={"/product/" + item._id}> {item.name}</Link>
      </h4>
      <span className="product-item__price">{item.price}.00 £</span>
    </ProductItemStyled>
  );
};

export default ProductItem;
