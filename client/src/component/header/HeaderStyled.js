import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  .nav-orders,
  .nav-basket {
    display: block;
    margin-left: auto;
  }
  a {
    text-decoration: none;
    margin-right: 15px;
    text-transform: uppercase;
    color: #444242;
    &:nth-child(1) {
      font-size: 24px;
    }
  }
  span {
    margin-right: 15px;
  }
  .nav-orders {
    font-size: 16px;
  }
  button {
    padding: 0;
    padding-top: 5px;
    margin-left: 15px;
    border: none;
    background: transparent;
    text-transform: uppercase;
  }
  span {
    margin-left: 5px;
  }
  .nav-name {
    margin: 0;
  }
`;

export default HeaderStyled;
