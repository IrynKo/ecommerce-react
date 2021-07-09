import styled from "styled-components";

const OrderDetailsItemStyled = styled.li`
  margin-bottom: 15px;
  border: 1px solid black;
  padding: 10px;
  .order-item__descr {
    display: flex;
    align-items: center;
  }

  .order-item__descr p,
  .order-item__descr span {
    flex: 2;
  }
  .order-item__descr p {
    margin-left: 20px;
    @media screen and (min-width: 1280px) {
      flex: 0.3;
      margin-left: 150px;
    }
  }
  .order-item__descr span {
    max-width: 150px;
  }
  .order-item__descr button {
    height: 35px;
  }

  .order-item__descr form {
    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-right: -50px;
    }
  }
  .order-item__descr form {
    flex: 0.5;
  }
  .order-item__descr form input {
    max-width: 20%;
    height: 35px;
  }
  .order-item__descr form input:nth-child(1) {
    //margin-left: -110px;
    margin-right: 120px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-right: 60px;
    }
    @media screen and (min-width: 1280px) {
      flex: 0.3;
      margin-right: 200px;
    }
  }
`;

export default OrderDetailsItemStyled;
