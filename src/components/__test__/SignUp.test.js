import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../SignUp'
import { mapStateToProps } from '../SignUp';

describe('Create Article', () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const mockCreate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SignUp fetchSignUp={mockCreate} history={historyMock} />);
  });
  afterEach(() => {
    mockCreate.mock.calls = [];
  });
  describe('When form is submitted', () => {
    it('should mock a signup function', () => {
      wrapper.find('#email').simulate('change', {
        target: { name: 'email_address', value: 'moses.african@gmail.com' }
      });
      wrapper.find('form').simulate('submit', { preventDefault() {} });
      expect(mockCreate.mock.calls[0][0].email_address).toEqual("moses.african@gmail.com");
    });
    it('mapStateToProps should return the right value', () => {
      const mockedState = {
        email_address: 'moses.african@gmail.com'
      };
      const state = mapStateToProps(mockedState);

      expect(state).toEqual({ email_address: 'moses.african@gmail.com' });
    });



    
   
  });
});
