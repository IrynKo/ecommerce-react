import styled from "styled-components";
const ProductItemStyled = styled.li`
  width: 30%;
  margin-right: 15px;
  margin-bottom: 40px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .product-item__name {
    margin: 10px 0;

    font-weight: 400;
  }
  .product-item__name a {
    text-decoration: none;
    color: #0c0c0c;
  }
  .product-item__price {
  }
`;
export default ProductItemStyled;
