import React, { useEffect } from "react";
import ProductItem from "../component/productItem/ProductItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsList } from "../redux/products/productsActions";

const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { products, loading, error } = productsList;

  useEffect(() => {
    dispatch(getProductsList());
    //eslint-disable-next-line
  }, []);
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='container'>
        <ul className="product-list">
          {products?.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
