import React from "react";
import { shallow } from "enzyme";
import { Order } from "../Order";

describe("Order Component", () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const mockCreate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Order />);
  });
  afterEach(() => {
    mockCreate.mock.calls = [];
  });
  describe("Testing the Order component", () => {
    it("should render without crashing", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
