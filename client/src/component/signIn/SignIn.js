import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signInUser } from "../../redux/user/userActions";
import SignInStyled from "./SignInStyled";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [user, setUser] = useState({ ...initialState });
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, userInfo, error } = useSelector((state) => state.userSignIn);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);
  const onHanlerChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email: user.email, password: user.password }));
  };
  return (
    <SignInStyled>
      <h3>Sign In</h3>
      {loading && <span>Loading ...</span>}
      {error && <p className="error">{error}</p>}
      <div>
        <form onSubmit={onHandlerSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="reg-link">
        <span>New user?</span>
        <Link to="/register"> Create a new account</Link>
      </div>
    </SignInStyled>
  );
};

export default SignIn;
