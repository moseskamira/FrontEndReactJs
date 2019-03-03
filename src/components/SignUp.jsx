import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchSignUp} from '../actions/signupAction'
import default_image from '../images/foodwelcome.jpg';

export class  SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '',
            phone_number: '',
            password: ''
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
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "email_address": this.state.email_address,
                "phone_number": this.state.phone_number,
                "password": this.state.password,
            };
            this.props.fetchSignUp(data);
          };
        render(){

        return(
            <div className="row m-5"  >
                <div className="col-md-6"> <p><img src={ default_image } alt="image" /></p>
                </div>
                <div className="p-5 col-md-6 bg-light"> 
                            <h5> <center><font color="red"><strong>Register Here !</strong></font> </center></h5>
                    <form onSubmit={ this.handleRegSubmit }>
                    <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" name="first_name" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"  onChange={this.handleChangeValue}/>
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" name="last_name" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Enter Last Name"  onChange={this.handleChangeValue}/>
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" name="email_address"className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={this.handleChangeValue}/>
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="phone" name="phone_number" className="form-control" id="exampleInputPhoneNumber" placeholder="Password"  onChange={this.handleChangeValue}/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword" placeholder="Password"  onChange={this.handleChangeValue}/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                
                </div>
            </div>
        )
    }
    
}
SignUp.propTypes = {
    handleChangeValue: PropTypes.func,
    handleRegSubmit: PropTypes.func
  };
  export const mapStateToProps = state => state;
  export default connect(
    mapStateToProps,
    { fetchSignUp }
  )(SignUp);
