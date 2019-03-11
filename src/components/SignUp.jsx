import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSignUp } from "../actions/signupAction";
import "../css/main.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      password: "",
      loading: false,
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email_address: this.state.email_address,
      phone_number: this.state.phone_number,
      password: this.state.password,
    };

    this.setState({ loading: true })

    this.props.fetchSignUp(data);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({ loading: false });
    if (nextProps.signUp.message) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <center>
        <div className="p-5 col-md-6 bg-light">
          <h5>
            {" "}
            <center>
              <font color="red">
                <strong>Register Here !</strong>
              </font>{" "}
            </center>
          </h5>
          <form onSubmit={this.handleRegSubmit} id="signUp">
            <div className="form-group" >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                required= {true}
                className="form-control"
                name="first_name"
                id="firstName"
                aria-describedby="emailHelp"
                placeholder="Enter First Name"
                onChange={this.handleChangeValue}
              />
              <small id="emailHelp" className="form-text text-muted" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                required= {true}
                name="last_name"
                className="form-control"
                id="exampleInputLastName"
                aria-describedby="emailHelp"
                placeholder="Enter Last Name"
                onChange={this.handleChangeValue}
              />
              <small id="emailHelp" className="form-text text-muted" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                required= {true}
                name="email_address"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleChangeValue}
              />
              <small id="emailHelp" className="form-text text-muted" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                required= {true}
                name="phone_number"
                className="form-control"
                id="exampleInputPhoneNumber"
                placeholder="Phone Number"
                onChange={this.handleChangeValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required= {true}
                name="password"
                className="form-control"
                id="exampleInputPassword"
                placeholder="Password"
                onChange={this.handleChangeValue}
              />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {this.state.loading ? (
              <div>
                loading...
              </div>
            ) : ''}
          </form>
        </div>
      </center>
    );
  }
}
SignUp.propTypes = {
  handleChangeValue: PropTypes.func,
  handleRegSubmit: PropTypes.func
};
export const mapStateToProps = state => ({
  signUp: state.signup.message,
  signUpError: state.signUp
});

export default connect(
  mapStateToProps,
  { fetchSignUp }
)(SignUp);
