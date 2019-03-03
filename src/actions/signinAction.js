import axios from "axios";

import * as type from './actionTypes';

const headers = {
    'Content-Type': 'application/json',
   
  };

export const signinAction = (data) => (dispatch) =>
    axios.post('https://backendfastfoodfast.herokuapp.com/api/v1/auth/login', data, { headers })
        .then((response) => {
            dispatch({
                type: type.SIGNIN_SUCCESS,
                message: response.data
                
            });
            console.log(response.data)
            
        }).catch(error => {
            dispatch({
                type: type.SIGNIN_FAILURE,
                error: error.response,
            });

        })