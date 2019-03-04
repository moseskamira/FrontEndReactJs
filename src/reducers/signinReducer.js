
import * as type from '../actions/actionTypes'


const initialState = {
    success: false,
    error: null,
    message: null
};

export default function signinReducer(state = initialState, action) {
    switch (action.type) {
        case type.SIGNIN_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: true,
                error: ''
            };
        case type.SIGNIN_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                message: null,
            };

        default:
            return state;
    }
}
