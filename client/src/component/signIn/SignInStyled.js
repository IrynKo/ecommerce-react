import styled from "styled-components";

const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;

  input,
  button {
    width: 60%;
    display: block;
    margin: 0 auto;
    height: 30px;
    text-transform: uppercase;
  }
  input {
    margin-bottom: 20px;
  }

  h3,
  label,
  .reg-link {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
  label {
    margin-bottom: 10px;
    font-size: 12px;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 18px;
    text-transform: uppercase;
  }

  button {
    height: 40px;
    font-size: 16px;
    background: transparent;
    margin-bottom: 20px;
  }
  button:hover {
    background: #111;
    color: #fff;
  }

  .reg-link a {
    text-decoration: none;
  }
`;
export default SignInStyled;
