import * as type from '../actionTypes';
import configureMockStore from 'redux-mock-store'
import mockAxios from 'axios'
import thunk from 'redux-thunk'
import { signinAction } from '../signinAction';
import 'babel-polyfill';

jest.mock('axios')

describe('User Login', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const userData = { email_address: 'moses.african@gmail.com', password: 'Kampala'}
        const message = { 'message': "You are logged in" }

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: {message: "You are logged in"} }))

        const expectedActions = [
            { type: type.SIGNIN_SUCCESS, message: message },
        ]

        await store.dispatch(signinAction(userData))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()
        const mockUserData = { password: 'Kampala'}
        const error = { 'errors': "Some Fields Missing" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: error }))

        const expectedActions = [
            { type: type.SIGNIN_FAILURE, error: error },
        ]

        await store.dispatch(signinAction(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
    })
})