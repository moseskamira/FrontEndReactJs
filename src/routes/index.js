import React from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import { ToastContainer } from 'react-toastify';

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/placeOrder/" component={PlaceOrder} /> */}
        <ToastContainer />
      </div>
    </Router>
  </div>
);

export default Routes;
