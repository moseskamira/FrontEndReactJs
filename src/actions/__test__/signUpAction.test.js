import * as type from '../actionTypes';
import configureMockStore from 'redux-mock-store'
import mockAxios from 'axios'
import thunk from 'redux-thunk'
import { fetchSignUp } from '../signupAction';
import 'babel-polyfill';

jest.mock('axios')

describe('Create User', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const mockRegData = { first_name: 'Moses', last_name: 'Kamira', email_address: 'moses.african@gmail.com', phone_number: '0789897654', password: 'Kampala'}
        const message = { 'message': "You Registered successfully" }

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: {message: "You Registered successfully"} }))

        const expectedActions = [
            { type: type.FETCH_SIGNUP_SUCCESS, message: message },
        ]

        await store.dispatch(fetchSignUp(mockRegData))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()
        const mockUserData = { first_name: 'Moses', phone_number: '0789897654', password: 'Kampala'}
        const error = { 'errors': "Some Fields Missing" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: error }))

        const expectedActions = [
            { type: type.FETCH_SIGNUP_FAILURE, error: error },
        ]

        await store.dispatch(fetchSignUp(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
    })
})