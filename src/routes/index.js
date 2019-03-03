import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import { ToastContainer } from 'react-toastify';
import { Login } from '../components/Login'
import Order from '../components/Order';

const Routes = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/place-order" component={Order} />
        <ToastContainer />
      </div>
    </BrowserRouter>
  </div>
);
export default Routes;
