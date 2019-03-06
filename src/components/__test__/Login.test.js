import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login'
import { mapStateToProps } from '../Login';

describe('Login user', () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const mockCreate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Login signinAction={mockCreate} history={historyMock} />);
  });
  afterEach(() => {
    mockCreate.mock.calls = [];
  });
  describe('When form is submitted', () => {
    it('should mock a login function', () => {
      wrapper.find('#email').simulate('change', {
        target: { name: 'email_address', value: 'moses.african@gmail.com' }
      });
      wrapper.find('form').simulate('submit', { preventDefault() {} });
      expect(mockCreate.mock.calls[0][0].email_address).toEqual("moses.african@gmail.com");
    });
    it('mapStateToProps should return the right value', () => {
      const mockedState = {
        signin: 'moses.african@gmail.com'
      };
      const state = mapStateToProps(mockedState);

      expect(state.signIn).toEqual('moses.african@gmail.com');
    });
  });
});
