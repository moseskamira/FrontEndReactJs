import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../Home'

describe('Home Compoonent', () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const mockCreate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });
  afterEach(() => {
    mockCreate.mock.calls = [];
  });
  describe('Testing the Home component', () => {
    it('should render without crashing', () => {
      expect(wrapper).toMatchSnapshot()
    });
   
  });
});
