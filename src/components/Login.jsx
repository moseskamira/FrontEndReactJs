import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { signinAction } from "../actions/signinAction";
import "../css/main.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: "",
      loading: false,
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email_address: this.state.email_address,
      password: this.state.password
    };

    this.setState({ loading: true })

    this.props.signinAction(data);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.signIn.success) {
      nextProps.history.push("/place-order");
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} id="signIn">

        <div className="row" style={{ float: "right" }}>
          <div className="col-md-4">
            <input
              type="email"
              required
              onChange={this.handleChangeValue}
              name="email_address"
              className="form-control" id="emailId"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="col-md-4">
            <input
              type="password"
              required
              onChange={this.handleChangeValue}
              name="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary">
              Login
              {this.state.loading ? (
              <div>
                loading...
              </div>
            ) : ''}
            </button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}
Login.propTypes = {
  handleChangeValue: PropTypes.func,
  handleSubmit: PropTypes.func
};

export const mapStateToProps = state => ({
    signIn: state.signin
  });

export default withRouter(
  connect(
    mapStateToProps,
    { signinAction }
  )(Login)
);
