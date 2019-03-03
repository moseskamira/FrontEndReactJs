import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from './SignUp';
import Login from './Login';


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
            <div>
              <SignUp/>
            </div>
        </div>
        </section>
      </div>
    );
  }
}

export default Home
