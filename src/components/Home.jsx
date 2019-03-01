import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from './SignUp';


export class Home extends Component {

  handleClick(e) {
    e.preventDefault();
    if (this.props.signin) {
    this.props.signin.success
      ? this.props.history.push('/placeorder')
      : this.props.history.push('/login');
    }
  }

  render() {

    return (
      <div>
        <section>
        <div id="textOverlay">
            <div>
            <h2> <strong><center>FAST FOOD FAST </center></strong></h2>
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
