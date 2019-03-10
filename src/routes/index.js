import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import { Login } from "../components/Login";
import Order from "../components/Order";

const Routes = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/place-order" component={Order} />
        <ToastContainer />
      </div>
    </BrowserRouter>
  </div>
);

export default Routes;
