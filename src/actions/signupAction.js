import axios from "axios";
import { toast } from 'react-toastify';
import * as type from './actionTypes';

const headers = {
    'Content-Type': 'application/json',
  };

export const fetchSignUp = (data) => (dispatch) =>
    axios.post('https://backendfastfoodfast.herokuapp.com/api/v1/auth/signup', data, { headers })
        .then((response) => {
            dispatch({
                type: type.FETCH_SIGNUP_SUCCESS,
                message: response.data
                
            });
            toast.success("User  Created")
        }).catch(error => {
          
            dispatch({
                type: type.FETCH_SIGNUP_FAILURE,
                error: error.response,
            });
        })
