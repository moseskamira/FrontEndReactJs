import react from 'react';
import signinReducer from '../signinReducer';
import { shallow } from 'enzyme';
import {
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
} from '../../actions/actionTypes';
import SignUp from '../../components/SignUp';

const initialState = {
    success: null,
    error: null,
    message: null
};

describe('Signin Reducer', () => {
  it('should be able to sign in a user', () => {
    const action = {
      type: SIGNIN_SUCCESS,
      message: "signed in",


    };
    
    const newState = signinReducer(initialState, action);
    expect(newState).toEqual({ "error": "", "message": "signed in", "success": true, });
  });
});