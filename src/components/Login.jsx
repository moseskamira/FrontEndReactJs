import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {signinAction} from '../actions/signinAction'
import{signinReducer} from '../reducers/signinReducer'

export class  Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email_address: '',
            password: ''
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
            password: this.state.password,

            };
            this.props.signinAction(data);
          };
          
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <div className="row"> 
                    <div className="col"> </div>
                    <div className="col-2"><input type="email" onChange={this.handleChangeValue} name="email_address" className="form-control" id="email" placeholder="Enter Email"/></div>
                    <div className="col-2"><input type="password" onChange={this.handleChangeValue} name="password" className="form-control" placeholder="Enter Password"/></div>
                    <div className="col-1"><button type="submit" className="btn btn-primary">Login</button></div>
                </div>
            </form>
        )
    }}
    Login.propTypes = {
        handleChangeValue: PropTypes.func,
        handleSubmit: PropTypes.func
      };
      const mapStateToProps = state => state;
      
      export default connect(
        mapStateToProps,
        { signinAction }
      )(Login);