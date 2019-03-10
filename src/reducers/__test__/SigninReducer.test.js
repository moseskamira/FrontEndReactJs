import react from "react";
import { shallow } from "enzyme";
import signinReducer from "../signinReducer";
import { SIGNIN_FAILURE, SIGNIN_SUCCESS } from "../../actions/actionTypes";
import SignUp from "../../components/SignUp";

const initialState = {
  success: null,
  error: null,
  message: null
};

describe("Signin Reducer", () => {
  it("should be able to sign in a user", () => {
    const action = {
      type: SIGNIN_SUCCESS,
      message: "signed in"
    };

    const newState = signinReducer(initialState, action);

    expect(newState).toEqual({ error: "", message: "signed in", success: true });
  });
  it("should be able to return a message on failure", () => {
    const action = {
      type: SIGNIN_FAILURE,
      error: "failed"
    };
    const newState = signinReducer(initialState, action);

    expect(newState).toEqual({ error: "failed", message: null, success: false });
  });
});
