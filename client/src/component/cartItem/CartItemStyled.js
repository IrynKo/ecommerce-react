import styled from "styled-components";

const CartItemStyled = styled.li`
  display: flex;
  margin-bottom: 20px;
  img {
    margin-right: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    margin-top: 30px;
    width: 200px;
    height: 30px;
    background: transparent;
    text-transform: uppercase;
  }
  select {
    width: 50px;
  }
`;
export default CartItemStyled;
