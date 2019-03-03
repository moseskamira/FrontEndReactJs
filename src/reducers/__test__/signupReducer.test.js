import react from 'react';
import signupReducer from '../signupReducer';
import { shallow } from 'enzyme';
import {
    FETCH_SIGNUP_SUCCESS,
    FETCH_SIGNUP_FAILURE
} from '../../actions/actionTypes';
import SignUp from '../../components/SignUp';

const initialState = {
    success: null,
    error: null,
    message: null
};

describe('Sign Up Reducer', () => {
  it('should be able to sign up a user', () => {
    const action = {
      type: FETCH_SIGNUP_SUCCESS,
      message: "hello"
    };
    
    const newState = signupReducer(initialState, action);
    expect(newState).toEqual({ "error": "", "message": "hello", "success": true, });
  });
  it('should be able to return a message on failure', () => {
    const action = {
      type: FETCH_SIGNUP_FAILURE,
      error: "failed"
    };
    
    const newState = signupReducer(initialState, action);
    expect(newState).toEqual({ "error": "failed", "message": null, "success": false, });
  });
  it('should return the default state',()=>{
      const newState= signupReducer(undefined, {});
      expect(newState).toEqual(initialState);
  })
});
