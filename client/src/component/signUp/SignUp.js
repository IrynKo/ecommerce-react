import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUpUser } from "../../redux/user/userActions";
import SignUpStyled from "./SignUpStyled";

const initialState = {
  name: "",
  email: "",
  password: "",
  comfirmedPassword: "",
};

const SignUp = () => {
  const [user, setUser] = useState({ ...initialState });
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, userInfo, error } = useSelector((state) => state.userSignUp);

  useEffect(() => {
    if (userInfo) {
      history.push("/signin");
    }
  }, [userInfo, history]);
  const onHanlerChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.comfirmedPassword) {
      dispatch(
        signUpUser({
          name: user.name,
          email: user.email,
          password: user.password,
        })
      );
   
    } else setPassError("Passwords do not match");
  };
  console.log("error", error);
  return (
    <SignUpStyled>
      <h3>Create a new account</h3>
      {loading && <span>Loading ...</span>}
      {error && <p className="error">{error}</p>}
      {passError && <p className="error">{passError}</p>}
      <div>
        <form onSubmit={onHandlerSubmit}>
          <label> Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={onHanlerChange}
          />
          <label> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={onHanlerChange}
          />
          <label> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password || ""}
            autoComplete="on"
            onChange={onHanlerChange}
          />
          <label> Comfirm password</label>
          <input
            type="password"
            name="comfirmedPassword"
            id="comfirmedPassword"
            value={user.comfirmedPassword || ""}
            autoComplete="on"
            onChange={onHanlerChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="login-link">
        <span>Has already an account? </span>
        <Link to="/signin">Sign In</Link>
      </div>
    </SignUpStyled>
  );
};

export default SignUp;
