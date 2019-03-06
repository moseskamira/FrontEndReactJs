import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import '../css/main.css'
import default_image from '../images/foodwelcome.jpg';

export class Home extends Component {

  render() {
    
    return (
      <div>
        <section>
        <div id="textOverlay">
            <div>
            <h2> <strong><center>FAST FOOD FAST </center></strong></h2>
            </div>
            <div>
              <Login />
            </div>
            <hr/>
            <div className="row m-5" >
                <div className="col-md-5"> <p><img src={ default_image } alt="image" /></p></div>
                <div className="col-md-5">
                </div>
                <div className="register"   ><NavLink to="/signup" > <a> <strong>Register With Us</strong></a></NavLink></div>
            </div>
          
        </div>
        </section>
      </div>
    );
  }
}

export default Home
