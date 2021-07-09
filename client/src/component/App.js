import React from "react";
import { Route } from "react-router";
import AdminOrdersPage from "../pages/AdminOrdersPage";
import AdminOrdersPageDetails from "../pages/AdminOrdersPageDetails";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrderPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import ProductPage from "../pages/ProductPage";
import RegistrationPage from "../pages/RegistrationPage";
import Header from "./header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/signin" component={LoginPage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/myorders" component={OrderPage} />
      <Route path="/orders" component={AdminOrdersPage} />
      <Route path="/order/:id" component={AdminOrdersPageDetails} />
      <Route path="/ordersucces" component={OrderSuccessPage} />
    </div>
  );
};

export default App;
